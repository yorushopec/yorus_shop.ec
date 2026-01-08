const SUPABASE_URL = 'https://dbuwvjulqepafaqghgbv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_5IKv1NLLczrV96wPPF07dw_eSXtmdPu';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- ESTADO ---
let products = []; 
let cart = JSON.parse(localStorage.getItem('yorusCart')) || [];
let productModalInstance;
let imageModalInstance;

// --- PETICIÓN DE DATOS ---
async function fetchProducts() {
    const { data, error } = await supabaseClient
        .from('products')
        .select('*');

    if (error) {
        console.error("Error loading products:", error);
        return;
    }

    products = data;

    shuffleArray(products);
    renderFeatured();
    filterCatalog('all', document.querySelector('.active-filter'));
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    productModalInstance = new bootstrap.Modal(document.getElementById('productModal'));
    imageModalInstance = new bootstrap.Modal(document.getElementById('imageModal'));

    updateCartUI();
    fetchProducts();

    document.getElementById('searchInput').addEventListener('keyup', (e) => {
        const text = e.target.value.toLowerCase();
        filterCatalog('search', null, text);
    });
});

// --- SISTEMA DE VISTAS ---
function showView(viewName, filterCategory = 'all') {
    const homeView = document.getElementById('home-view');
    const catalogView = document.getElementById('catalog-view');
    const navLinks = document.querySelectorAll('.nav-link');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    navLinks.forEach(link => link.classList.remove('active'));

    if (viewName === 'home') {
        homeView.classList.remove('d-none');
        catalogView.classList.add('d-none');
        const homeLink = document.querySelector('.nav-link[onclick*="home"]');
        if(homeLink) homeLink.classList.add('active');

    } else if (viewName === 'catalog') {
        homeView.classList.add('d-none');
        catalogView.classList.remove('d-none');
        
        if(filterCategory !== 'all') {
            const btn = Array.from(document.querySelectorAll('#catalog-view button'))
                .find(b => b.textContent.toLowerCase().includes(filterCategory));
            filterCatalog(filterCategory, btn);
        } else {
            const btnAll = Array.from(document.querySelectorAll('#catalog-view button'))
                .find(b => b.textContent.trim() === 'Todo'); 
            
            filterCatalog('all', btnAll);
        }
    }
}

// --- RENDERIZADO ---
function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    grid.innerHTML = '';
    const featured = products.slice(0, 4);
    featured.forEach(prod => {
        grid.appendChild(createProductCard(prod));
    });
}

function filterCatalog(category, btnElement, filterValue = '') {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = '';

    if (category === 'all' && !btnElement) {
        const foundBtn = Array.from(document.querySelectorAll('#catalog-view button'))
            .find(b => b.textContent.trim() === 'Todo');
        if (foundBtn) btnElement = foundBtn;
    }

    if (btnElement) {
        const container = btnElement.parentElement;
        const allButtons = container.querySelectorAll('button');

        allButtons.forEach(btn => {
            btn.classList.remove('active-filter', 'btn-dark');
            btn.classList.add('btn-outline-dark');
        });

        btnElement.classList.remove('btn-outline-dark');
        btnElement.classList.add('btn-dark', 'active-filter');
    }

    let filtered = products;

    if (category === 'search') {
        filtered = products.filter(p => p.title.toLowerCase().includes(filterValue));
    } 
    else if (category === 'et_filt') {
        filtered = products.filter(p => p.et_filt && p.et_filt.toLowerCase().includes(filterValue.toLowerCase()));
    } 
    else if (category !== 'all') {
        filtered = products.filter(p => p.category === category);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No encontramos resultados para tu búsqueda :(</h3></div>';
    } else {
        filtered.forEach(prod => {
            grid.appendChild(createProductCard(prod));
        });
    }
}

function createProductCard(prod) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    col.innerHTML = `
        <div class="product-item position-relative bg-light d-flex flex-column text-center h-100 shadow-sm rounded-3 overflow-hidden" 
             onclick="openModal(${prod.id})" style="cursor: pointer;">
            
            <div class="product-img-wrap">
                <span class="position-absolute top-0 end-0 badge badge-cute m-2">${prod.type}</span>
                <img src="${prod.image}" alt="${prod.title}" style="width:100%; height:300px; object-fit:cover;">
            </div>
            
            <div class="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                    <h6 class="text-secondary text-uppercase text-xs fw-bold">
                        ${prod.genre} ${prod.language ? `<span class="text-muted mx-1">|</span> <span class="text-dark">${prod.language}</span>` : ''}
                    </h6>
                    <h5 class="mb-1 fw-bold text-dark">${prod.title}</h5>
                    <small class="text-muted d-block mb-2">${prod.type}</small>
                    <h4 class="text-danger fw-bold">$${prod.price.toFixed(2)}</h4>
                </div>
                
                <button class="btn btn-outline-dark rounded-pill mt-3 w-100" onclick="event.stopPropagation(); addToCart(${prod.id})">
                    <i class="fas fa-plus me-1"></i> Añadir
                </button>
            </div>
        </div>
    `;
    return col;
}

// --- MODALES ---
function openModal(id) {
    const prod = products.find(p => p.id === id);

    document.getElementById('modalTitle').innerText = prod.title;
    document.getElementById('modalGenre').innerText = `${prod.genre} | ${prod.type}`;
    document.getElementById('modalDesc').innerText = prod.desc;
    document.getElementById('modalPrice').innerText = `$${prod.price.toFixed(2)}`;

    const mainImg = document.getElementById('modalImg');
    mainImg.src = prod.image;
    mainImg.onclick = () => openFullImage(mainImg.src);

    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';

    if (prod.gallery && prod.gallery.length > 0) {
        prod.gallery.forEach(imgSrc => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = 'gallery-thumb rounded border';
            thumb.onclick = () => {
                mainImg.src = imgSrc;
                mainImg.onclick = () => openFullImage(imgSrc);
            };
            galleryContainer.appendChild(thumb);
        });
    }

    document.getElementById('modalAddBtn').onclick = () => {
        addToCart(prod.id);
        productModalInstance.hide();
    };
    productModalInstance.show();
}

function openFullImage(src) {
    document.getElementById('fullSizeImage').src = src;
    imageModalInstance.show();
}

// --- CARRITO ---
const offcanvasCart = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));

function toggleCart() {
    offcanvasCart.toggle();
}

function addToCart(id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty++; 
    } else {
        const prod = products.find(p => p.id === id);
        cart.push({ ...prod, qty: 1 });
        alert(`¡${prod.title} se ha añadido al carrito!`);
    }
    
    saveCartToStorage(); 
    updateCartUI();
}

function changeQty(index, change) {
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    } else {
        cart.splice(index, 1);
    }
    
    saveCartToStorage(); 
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage(); 
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cartCountBadge');
    if(badge) badge.innerText = totalItems;

    const container = document.getElementById('cartItemsContainer');
    if(!container) return;
    
    container.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center mt-5"><i class="fas fa-shopping-basket fa-3x text-muted mb-3"></i><p class="text-muted">Tu carrito está vacío :(</p></div>';
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.qty;
            total += subtotal;

            const itemRow = document.createElement('div');
            itemRow.className = 'd-flex justify-content-between align-items-center mb-3 border-bottom pb-2';
            itemRow.innerHTML = `
                <div class="d-flex align-items-center" style="flex: 1;">
                    <img src="${item.image}" style="width:50px; height:50px; object-fit:cover; border-radius:8px; margin-right:10px;">
                    <div>
                        <h6 class="m-0 text-dark fw-bold text-truncate" style="max-width: 140px; font-size:0.9rem;">${item.title}</h6>
                        <small class="text-muted">$${item.price.toFixed(2)} c/u</small>
                    </div>
                </div>
                
                <div class="d-flex align-items-center mx-2">
                    <button class="btn btn-sm btn-outline-secondary qty-btn" onclick="changeQty(${index}, -1)">-</button>
                    <span class="mx-2 fw-bold" style="min-width: 20px; text-align: center;">${item.qty}</span>
                    <button class="btn btn-sm btn-outline-secondary qty-btn" onclick="changeQty(${index}, 1)">+</button>
                </div>

                <button onclick="removeFromCart(${index})" class="btn btn-sm text-danger ms-2"><i class="fas fa-trash-alt"></i></button>
            `;
            container.appendChild(itemRow);
        });
    }
    const totalElement = document.getElementById('cartTotal');
    if(totalElement) totalElement.innerText = `$${total.toFixed(2)}`;
}

function checkoutInstagram() {
    if (cart.length === 0) return;

    const instagramUser = "yorus_shop.ec";
    let message = "¡Hola! Quisiera hacer el siguiente pedido:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        message += `▫️ ${item.qty}x ${item.title} (${item.type}) - $${subtotal.toFixed(2)}\n`;
        total += subtotal;
    });

    message += `\nTOTAL A PAGAR: $${total.toFixed(2)}`;
    message += "\n\n¿Quedan disponibles? Entiendo que son bajo pedido, ¿para qué fecha llegarían aproximadamente?";

    navigator.clipboard.writeText(message).then(() => {
        alert("¡Pedido copiado! Te redirigimos al DM de Instagram.");
        window.open(`https://www.instagram.com/${instagramUser}/`, '_blank');
    });
}

function saveCartToStorage() {
    localStorage.setItem('yorusCart', JSON.stringify(cart));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}