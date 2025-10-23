        async function cargarPerro() {
            const content = document.getElementById('content');
            content.innerHTML = '<p class="loading">Cargando...</p>';
            
            try {
                const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
                const datos = await respuesta.json();
                
                content.innerHTML = `<img src="${datos.message}" alt="Perro aleatorio">`;
            } catch (error) {
                content.innerHTML = '<p style="color: red;">Error al cargar la imagen</p>';
            }
        }


        cargarPerro();