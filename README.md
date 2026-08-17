***

![Grupo Sie7e](https://i.ibb.co/vVHKNpv/logoG7.png)

***

**Idioma / Language:** Español | [English](./README.en.md)

***

## &#x1F37D; Sobre el Proyecto

&nbsp;&nbsp;&nbsp;Grupo Sie7e es un sitio de e-commerce de comida full-stack, pensado para la ciudad de La Rioja, Argentina. Ofrece una variada carta de sánguches — con opciones aptas para veganos, vegetarianos y celíacos — complementada con snacks, postres y bebidas. Los visitantes pueden navegar el catálogo de productos, agregarlos a un carrito de compras y realizar un pedido, mientras que un panel de administración le permite al staff gestionar el inventario de productos. Construimos la plataforma pensando en el público general de La Rioja que busca una buena relación precio/calidad/cantidad al pedir comida online, buscando combinar una experiencia de compra simple (al estilo PedidosYa, Rappi o el sitio de pedidos de McDonald's) con un menú enfocado específicamente en sánguches.

## &#x1F3D7;&#xFE0F; Arquitectura y Stack Tecnológico

&nbsp;&nbsp;&nbsp;El proyecto está dividido en dos partes. El sitio principal es una aplicación web tradicional renderizada del lado del servidor: **Node.js + Express** maneja el ruteo y la lógica de negocio, **EJS** renderiza el HTML en el servidor, y **Sequelize** se comunica con una base de datos **MySQL** para almacenar usuarios, productos y datos de carrito/pedidos. Ahí es donde los clientes navegan el catálogo, se registran e inician sesión (con **sesiones y cookies**, contraseñas hasheadas con **bcrypt**, y validación del lado del servidor), arman un carrito y hacen checkout — y donde los administradores cuentan con un panel simple para crear, editar y eliminar productos, con subida de imágenes manejada por **Multer**.

&nbsp;&nbsp;&nbsp;Junto a eso, hay una pequeña **API JSON interna** que expone datos de la tienda (cantidad de usuarios y productos, desglose por categoría, etc.), construida específicamente para alimentar un **dashboard de administración** separado — una SPA independiente en **React + Vite** con estilos de **Material UI**, con gráficos y paneles para tener una vista rápida y visual de los números de la tienda. Ambas aplicaciones funcionan de forma independiente pero comparten la misma base de datos a través de la API.

## &#x1F3AF; Audiencia Objetivo y Oferta

&nbsp;&nbsp;&nbsp;Nos dirigimos al público en general de la ciudad de La Rioja, Argentina, que busca una buena relación entre precio/calidad/cantidad a la hora de comprar comida online. Para atender a esa audiencia, el sitio ofrece una variedad de sánguches para todos los gustos — apto veganos, apto vegetarianos y apto celíacos — complementada con snacks, postres y bebidas, todo disponible a través de un flujo simple de navegación, carrito y checkout.

## &#x1F310; Comparativa de Sitios Web

&nbsp;&nbsp;&nbsp;Hemos investigado diferentes sitios web similares a nuestra propuesta antes de diseñar la nuestra:

- **[PedidosYa](https://www.pedidosya.com/):** agrega los productos y servicios de todos los restaurantes y locales de comida de La Rioja capital (y funciona también en otras provincias) con delivery, entregando los pedidos con buenos diseños y en el menor tiempo posible.
- **[Parma](https://pedix.app/parmavelezsarsfield/):** el negocio que más se acerca a la idea que tuvimos cuando hablamos de un e-commerce dedicado exactamente a vender sánguches por una aplicación web.
- **[McDonald's](https://www.mcdonalds.com.ar/pedidos):** un ejemplo icónico de cómo una cadena de comida rápida integró exitosamente un sistema de pedidos en línea, eficiente tanto en web como en app móvil.
- **[Rappi](https://www.rappi.com.ar/restaurantes/category/sandwiches):** una aplicación similar a PedidosYa (mismo público objetivo), de origen latinoamericano ("nacida" en Colombia).
- **[La Argentina Panaderías](https://www.clargentina.com.ar/):** vende más que sánguches, pero su funcionalidad (UX/UI) a la hora de hacer pedidos fue una referencia interesante.

## &#x1F465; Quiénes Somos

### `Arias Simone Mariano`
&nbsp;&nbsp;&nbsp;Estudiante de Ingeniería en Sistemas de Información en la UNLaR. Tengo formación en física y docencia. Me dedico a dar clases particulares tanto de física como de matemática. Tengo experiencia programando en algunos lenguajes populares.

### `Avila Braian Emanuel`
&nbsp;&nbsp;&nbsp;Estudiante de Ingeniería en Sistemas de Información en la UNLaR. Trabajo haciendo monitoreo en una empresa de seguridad. Tengo poca experiencia programando más de la que me dan las clases de la facultad o viendo y aprendiendo por videos de YouTube.

### `Biagioli Juan Manuel`
&nbsp;&nbsp;&nbsp;Estudiante en IT desde hace 2 años, comencé en cursos de programación como Argentina Programa y CodoACodo, el año pasado terminé uno de la Universidad de La Punta, sobre Java, y decidí meterme de lleno con programación, planificando entrar el año que viene en Ingeniería de Sistemas o hacer la Tecnicatura.

### `Padula Lugo Jorge`
&nbsp;&nbsp;&nbsp;Soy estudiante de Ingeniería en Sistemas de Información en la Universidad Nacional de La Rioja (UNLaR). A lo largo de mi carrera, he tenido la oportunidad de programar en una variedad de lenguajes y tecnologías, lo que me ha permitido adquirir una visión amplia y general del campo de la programación, aunque no me he especializado en un área específica.

### `Solorzano Garcia Jesus`
&nbsp;&nbsp;&nbsp;Soy estudiante de Licenciatura en Sistemas con experiencia en soporte técnico. Actualmente estoy cursando la carrera de Licenciatura en Sistemas, donde voy adquiriendo conocimientos fundamentales en el desarrollo y mantenimiento de sistemas informáticos. Además, he trabajado como soporte técnico, brindando asistencia y soluciones tecnológicas a los usuarios.

### `Zelaya Daniel`
&nbsp;&nbsp;&nbsp;Soy Ingeniero Electrónico (UTN La Rioja), Especialista en Ingeniería Gerencial. Me dediqué a desarrollar tecnología para las perforaciones de agua subterránea. Hace un año que estoy aprendiendo desarrollo web como Trainee, en un Hospital de niños de mi provincia. Soy docente voluntario y coordinador de un club de robótica y programación llamado Code Club La Rioja.

### `Barros Jorge Esteban`
&nbsp;&nbsp;&nbsp;Me recibí de Lic. en Kinesiología y Fisioterapia en el año 2020, profesión que estoy ejerciendo actualmente pero desde hace un año atrás comencé a introducirme en la programación. Tengo conocimientos básicos de Diseño UX/UI, HTML y CSS por interés propio en distintas plataformas digitales.

## &#x1F4CB; Herramientas del Equipo

&nbsp;&nbsp;&nbsp;Para coordinarnos como equipo, utilizamos:

- **[Un tablero de Trello](https://trello.com/invite/grupo7fraterno/ATTI11a8b99dfb6d72a884e7e984e224c261229A6DF9)** para organizar las tareas a lo largo de los sprints:
    + **[Sprint 1](https://trello.com/invite/b/66566e2e551f321902bd72b9/ATTI55e5693fe2e48b6449e2337919c95b5703F77733/sprint-1)**
    + **[Sprint 2](https://trello.com/invite/b/6669165a4809d65b5f8b5e7b/ATTIc81322b8c191828158beda89b6a3dd480747B988/sprint-2)**
    + **[Sprint 3](https://trello.com/invite/b/6687439ce90482975cade29c/ATTI8ad042de4862568eea55b979f9e900744D7D78EB/sprint-3)**
    + **[Sprint 4](https://trello.com/invite/b/66a2cfd6ce2e45c7592bc826/ATTI78ad0047bf0792107e5ed68508b881d7DF9DB0F3/sprint-4)**
    + **[Sprint 5](https://trello.com/invite/b/66b3959d46dfa8dce1679b54/ATTI8d57ff90f06caf3fb253c509a98925d1F0991419/sprint-5)**
    + **[Sprint 6](https://trello.com/invite/b/66d0fef956084690f599c380/ATTIccd53d16c51e790bcc8fd3dee1f7d40a49B53B84/sprint-6)**
    + **[Sprint 7](https://trello.com/invite/b/66df8c6c3c38b01ff0078928/ATTI8eb26eda8431b0297d2823504201adc70EDEBF1A/sprint-7)**
    + **[Sprint 8](https://trello.com/invite/b/66df8c85df215954c31c9208/ATTIdb78cc3c4b09c3964a12d4b146aad85088BBEB88/sprint-8)**

- **[Figma](https://www.figma.com/team_invite/redeem/Brz2yNVsUCI4XHMNDppA7V)** para el diseño de los wireframes del sitio.

- **Un canal de Discord y un grupo de WhatsApp** para comunicarnos.
