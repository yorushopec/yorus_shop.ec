// --- ESTADO ---
let cart = []; // Ahora guardará objetos con propiedad 'qty'
let productModalInstance;
let imageModalInstance;

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    productModalInstance = new bootstrap.Modal(document.getElementById('productModal'));
    imageModalInstance = new bootstrap.Modal(document.getElementById('imageModal'));

    renderFeatured();
    filterCatalog('all', document.querySelector('.active-filter'));

    document.getElementById('searchInput').addEventListener('keyup', (e) => {
        const text = e.target.value.toLowerCase();
        filterCatalog('search', null, text);
    });
});

// --- SISTEMA DE VISTAS ---
/*function showView(viewName, filterCategory = 'all') {
    const homeView = document.getElementById('home-view');
    const catalogView = document.getElementById('catalog-view');
    const navLinks = document.querySelectorAll('.nav-link');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navLinks.forEach(link => link.classList.remove('active'));

    if (viewName === 'home') {
        homeView.classList.remove('d-none');
        catalogView.classList.add('d-none');
        document.querySelector('.nav-link[onclick="showView(\'home\')"]').classList.add('active');
    } else if (viewName === 'catalog') {
        homeView.classList.add('d-none');
        catalogView.classList.remove('d-none');

        if (filterCategory !== 'all') {
            const btn = Array.from(document.querySelectorAll('#catalog-view button'))
                .find(b => b.textContent.toLowerCase().includes(filterCategory));
            filterCatalog(filterCategory, btn);
        } else {
            const btnAll = document.querySelector('#catalog-view button');
            filterCatalog('all', btnAll);
        }
    }
}*/

// --- SISTEMA DE VISTAS (CORREGIDO) ---
function showView(viewName, filterCategory = 'all') {
    const homeView = document.getElementById('home-view');
    const catalogView = document.getElementById('catalog-view');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll arriba suave
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Actualizar menú activo del navbar
    navLinks.forEach(link => link.classList.remove('active'));

    if (viewName === 'home') {
        homeView.classList.remove('d-none');
        catalogView.classList.add('d-none');
        // Marcar enlace de Inicio como activo
        const homeLink = document.querySelector('.nav-link[onclick*="home"]');
        if(homeLink) homeLink.classList.add('active');

    } else if (viewName === 'catalog') {
        homeView.classList.add('d-none');
        catalogView.classList.remove('d-none');
        
        // --- AQUÍ ESTABA EL ERROR ---
        if(filterCategory !== 'all') {
            // Caso 1: Clic en "Mangas", "Merch", etc.
            const btn = Array.from(document.querySelectorAll('#catalog-view button'))
                .find(b => b.textContent.toLowerCase().includes(filterCategory));
            filterCatalog(filterCategory, btn);
        } else {
            // Caso 2: Clic en "Catálogo" (Todo)
            // CORRECCIÓN: Buscamos específicamente el botón que dice "Todo"
            // (Antes buscábamos el primero y agarraba el de Filtros por error)
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

// --- FILTRAR CATÁLOGO ---
function filterCatalog(category, btnElement, filterValue = '') {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = '';

    if (category === 'all' && !btnElement) {
        btnElement = Array.from(document.querySelectorAll('#catalog-view button'))
            .find(b => b.textContent.trim() === 'Todo');
    }

    if (btnElement) {
        const container = btnElement.parentElement;
        const allButtons = container.querySelectorAll('button');

        allButtons.forEach(btn => {
            btn.classList.remove('active-filter', 'btn-dark');
            btn.classList.add('btn-outline-dark');
        });

        // Activamos SOLO el que se presionó
        btnElement.classList.remove('btn-outline-dark');
        btnElement.classList.add('btn-dark', 'active-filter');
    }

    // 2. FILTRADO DE DATOS
    let filtered = products;

    if (category === 'search') {
        // Filtro por Buscador
        filtered = products.filter(p => p.title.toLowerCase().includes(filterValue));
    } 
    else if (category === 'et_filt') {
        // Filtro por Dropdown (usando et_filt)
        filtered = products.filter(p => p.et_filt && p.et_filt.toLowerCase().includes(filterValue.toLowerCase()));
    } 
    else if (category !== 'all') {
        // Filtro por Categoría Principal
        filtered = products.filter(p => p.category === category);
    }

    // 3. RENDERIZADO
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No encontramos resultados para tu búsqueda :(</h3></div>';
    } else {
        filtered.forEach(prod => {
            grid.appendChild(createProductCard(prod));
        });
    }
}

/*function createProductCard(prod) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    col.innerHTML = `
        <div class="product-item position-relative bg-light d-flex flex-column text-center h-100 shadow-sm rounded-3 overflow-hidden">
            <div class="product-img-wrap" onclick="openModal(${prod.id})" style="cursor: pointer;">
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
                <button class="btn btn-outline-dark rounded-pill mt-3 w-100" onclick="addToCart(${prod.id})">
                    <i class="fas fa-plus me-1"></i> Añadir
                </button>
            </div>
        </div>
    `;
    return col;
}*/

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

// --- LÓGICA DEL CARRITO (NUEVA: CANTIDADES) ---

const offcanvasCart = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));

function toggleCart() {
    offcanvasCart.toggle();
}

function addToCart(id) {
    // Verificar si el producto ya existe en el carrito
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty++; // Si existe, aumentamos cantidad
        // No mostramos alerta para no ser molestos al sumar
    } else {
        const prod = products.find(p => p.id === id);
        // Agregamos al carrito con cantidad inicial 1
        // Usamos {...prod} para crear una copia y no modificar el original
        cart.push({ ...prod, qty: 1 });
        alert(`¡${prod.title} se ha añadido al carrito!`);
    }
    updateCartUI();
}

// Nueva función para cambiar cantidades desde el carrito (+/-)
function changeQty(index, change) {
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    } else {
        // Si baja a 0, preguntamos o eliminamos directo. Aquí eliminamos.
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    // Actualizar badge (suma de todas las cantidades)
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCountBadge').innerText = totalItems;

    const container = document.getElementById('cartItemsContainer');
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
    document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
}

function checkoutInstagram() {
    if (cart.length === 0) return;

    const instagramUser = "yorus_shop.ec";
    let message = "¡Hola! Quisiera hacer el siguiente pedido:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        // Formato: 2x Titulo (Tipo) - $Subtotal
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
