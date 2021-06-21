// Boton de atras
s_('#back').addEventListener('click', () => {
    try {
        i = i - 1;
        audio.src = musicas[i].src;
        root_.setProperty('--img', `url(../../${musicas[i].img})`);

        s_('.name').textContent = "";
        s_('.nameMusic').textContent = "";
        s_('.name').textContent = musicas[i].artist;
        s_('.nameMusic').textContent = musicas[i].name;
    } catch {
        i = i + 1;
         alert('No hay mas musicas :C')
    }
});

// Boton de adelante
s_('#next').addEventListener('click', () => {
    try {
        i = i + 1;
        audio.src = musicas[i].src;
        root_.setProperty('--img', `url(../../${musicas[i].img})`);
        
        s_('.name').textContent = "";
        s_('.nameMusic').textContent = "";
        s_('.name').textContent = musicas[i].artist;
        s_('.nameMusic').textContent = musicas[i].name;
        s_('#upload').files[0] = "";
    } catch {
        i = i - 1;
         alert('No hay mas musicas :C')
    }
});


// Cargar musica
s_('#upload').addEventListener('change', (e)=> {
	let reader = new FileReader();
	reader.readAsDataURL(e.target.files[0]);
		reader.addEventListener('load', ()=> {
			let musica = reader.result;
			audio.autoplay = "";

        	root_.setProperty('--img', `url(https://picsum.photos/500/500)`);


			audio.src = musica;

			s_('#pause').setAttribute('style', "none");
			s_('#play').setAttribute('style', "inline-flex");

			// Añadiendo nombres a la musica
			audio.addEventListener('loadedmetadata', (e)=> {
				let name = s_("#upload").files[0].name;
				let namecortado = name.split(" ")[0];
				let name2 = name.split(" ")[1];
				let name3 = name.split(" ")[2];
				let name4 = name.split(" ")[3];

				let nameMusic = namecortado + " " + name2;

				s_('.name').textContent = "";
				s_('.nameMusic').textContent = "";

				s_('.name').textContent += nameMusic;
				s_('.nameMusic').textContent += name3 + " " + name4;				
			})
		})
});