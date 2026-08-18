***

![Grupo Sie7e](https://i.ibb.co/vVHKNpv/logoG7.png)

***

**Language / Idioma:** [Español](./README.md) | English

***

## &#x1F37D; About the Project

&nbsp;&nbsp;&nbsp;Grupo Sie7e is a full-stack food e-commerce website built for the city of La Rioja, Argentina. It offers a varied sandwich menu — with vegan, vegetarian, and celiac-friendly options — along with snacks, desserts, and drinks. Visitors can browse the product catalog, add items to a shopping cart, and place an order, while an admin panel lets staff manage the product inventory. We built the platform for the general public in La Rioja looking for a good price/quality/quantity balance when ordering food online, aiming to combine an easy ordering experience (à la PedidosYa, Rappi, or McDonald's own ordering site) with a menu tailored specifically to sandwiches.

## &#x1F3D7;&#xFE0F; Architecture & Tech Stack

&nbsp;&nbsp;&nbsp;The project is split into two parts. The main site is a traditional server-rendered web app: **Node.js + Express** handles routing and business logic, **EJS** renders the HTML on the server, and **Sequelize** talks to a **MySQL** database to store users, products, and cart/order data. This is where customers browse the catalog, register and log in (with **sessions and cookies**, hashed passwords via **bcrypt**, and server-side validation), build a cart, and check out — and where admins get a simple panel to create, edit, and delete products, with image uploads handled by **Multer**.

&nbsp;&nbsp;&nbsp;Alongside that, there's a small **internal JSON API** exposing store data (user and product counts, category breakdowns, etc.), built specifically to feed a separate **admin dashboard** — a standalone **React + Vite** single-page app styled with **Material UI**, with charts and panels for a quick, visual overview of the store's numbers. The two apps run independently but share the same underlying database through the API.

&nbsp;&nbsp;&nbsp;On the visual design side of the main site, we followed an **adaptive/responsive (mobile-first)** approach, designed first for mobile screens and then adapted for tablets and desktops using **hand-written media queries**. We also used **Bootstrap via CDN** to support some components and layout utilities.

## &#x1F680; Deployment

&nbsp;&nbsp;&nbsp;The main site is deployed on Railway and can be visited at **[gruposie7e-production.up.railway.app](https://gruposie7e-production.up.railway.app/)**.

&nbsp;&nbsp;&nbsp;To try out the admin panel's features, you can log in with the following test credentials:

- **Username:** `mateodiaz@example.com`
- **Password:** `password123`

&nbsp;&nbsp;&nbsp;The admin dashboard (React + Vite) is also deployed on Railway, as a separate service within the same project, and can be visited at **[dashboard-production-d081.up.railway.app](https://dashboard-production-d081.up.railway.app/)**. It's read-only and doesn't require logging in: just open the link to see a real-time visual overview of the store's users and products (category charts, latest registered user, product listing, etc.), pulling from the same data exposed by the main site's internal API.

## &#x1F3AF; Target Audience & Offer

&nbsp;&nbsp;&nbsp;We're building for the general public of La Rioja, Argentina looking for a good balance of price, quality, and quantity when ordering food online. To serve that audience, the site offers a varied sandwich menu with options for every diet — vegan, vegetarian, and celiac-friendly — complemented by snacks, desserts, and drinks, all orderable through a simple browse-cart-checkout flow.

## &#x1F310; Competitive Landscape

&nbsp;&nbsp;&nbsp;We researched similar websites before designing our own:

- **[PedidosYa](https://www.pedidosya.com/):** aggregates restaurants and food businesses across La Rioja (and other provinces) with delivery, well-designed order tracking, and fast turnaround.
- **[Parma](https://pedix.app/parmavelezsarsfield/):** the closest match to our own concept — an e-commerce app dedicated specifically to selling sandwiches.
- **[McDonald's Argentina](https://www.mcdonalds.com.ar/pedidos):** a well-known example of a fast-food chain with a smooth, efficient online ordering system across web and mobile.
- **[Rappi](https://www.rappi.com.ar/restaurantes/category/sandwiches):** a Latin American (Colombia-born) delivery app targeting a similar audience to PedidosYa.
- **[La Argentina Panaderías](https://www.clargentina.com.ar/):** sells more than just sandwiches, but its ordering UX/UI stood out as a reference.

## &#x1F465; Who We Are

### `Arias Simone Mariano`
&nbsp;&nbsp;&nbsp;Information Systems Engineering student at UNLaR, with a background in physics and teaching. Tutors physics and math, with some prior experience programming in a few popular languages.

### `Avila Braian Emanuel`
&nbsp;&nbsp;&nbsp;Information Systems Engineering student at UNLaR. Works in monitoring at a security company, with programming experience mostly from coursework and self-taught online learning.

### `Biagioli Juan Manuel`
&nbsp;&nbsp;&nbsp;IT student for 2 years, starting out with programming courses like Argentina Programa and CodoACodo, and recently completed a Java-focused program at Universidad de La Punta, planning to pursue Systems Engineering next.

### `Padula Lugo Jorge`
&nbsp;&nbsp;&nbsp;Information Systems Engineering student at Universidad Nacional de La Rioja (UNLaR), with exposure to a variety of programming languages and technologies throughout the degree.

### `Solorzano Garcia Jesus`
&nbsp;&nbsp;&nbsp;Systems degree student with technical support experience, currently building foundational knowledge in software development and systems maintenance.

### `Zelaya Daniel`
&nbsp;&nbsp;&nbsp;Electronic Engineer (UTN La Rioja) and Management Engineering specialist, formerly developing groundwater drilling technology. Currently a web development trainee at a children's hospital, and volunteer coordinator of Code Club La Rioja, a robotics and programming club.

### `Barros Jorge Esteban`
&nbsp;&nbsp;&nbsp;Licensed Kinesiologist and Physiotherapist (since 2020), currently practicing while learning programming for about a year, with basic UX/UI, HTML, and CSS knowledge picked up independently.

## &#x1F4CB; Team Tools

&nbsp;&nbsp;&nbsp;To coordinate as a team, we relied on:

- **[A Trello board](https://trello.com/invite/grupo7fraterno/ATTI11a8b99dfb6d72a884e7e984e224c261229A6DF9)** to organize tasks across sprints:
    + **[Sprint 1](https://trello.com/invite/b/66566e2e551f321902bd72b9/ATTI55e5693fe2e48b6449e2337919c95b5703F77733/sprint-1)**
    + **[Sprint 2](https://trello.com/invite/b/6669165a4809d65b5f8b5e7b/ATTIc81322b8c191828158beda89b6a3dd480747B988/sprint-2)**
    + **[Sprint 3](https://trello.com/invite/b/6687439ce90482975cade29c/ATTI8ad042de4862568eea55b979f9e900744D7D78EB/sprint-3)**
    + **[Sprint 4](https://trello.com/invite/b/66a2cfd6ce2e45c7592bc826/ATTI78ad0047bf0792107e5ed68508b881d7DF9DB0F3/sprint-4)**
    + **[Sprint 5](https://trello.com/invite/b/66b3959d46dfa8dce1679b54/ATTI8d57ff90f06caf3fb253c509a98925d1F0991419/sprint-5)**
    + **[Sprint 6](https://trello.com/invite/b/66d0fef956084690f599c380/ATTIccd53d16c51e790bcc8fd3dee1f7d40a49B53B84/sprint-6)**
    + **[Sprint 7](https://trello.com/invite/b/66df8c6c3c38b01ff0078928/ATTI8eb26eda8431b0297d2823504201adc70EDEBF1A/sprint-7)**
    + **[Sprint 8](https://trello.com/invite/b/66df8c85df215954c31c9208/ATTIdb78cc3c4b09c3964a12d4b146aad85088BBEB88/sprint-8)**

- **[Figma](https://www.figma.com/team_invite/redeem/Brz2yNVsUCI4XHMNDppA7V)** for wireframing the site.

- **Discord and WhatsApp** for team communication.
