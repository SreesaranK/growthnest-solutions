*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    line-height:1.6;
    color:#333;
}

/* Navbar */

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0f172a;
    color:white;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo{
    font-size:1.5rem;
    font-weight:bold;
}

.nav-links{
    display:flex;
    list-style:none;
    gap:25px;
}

.nav-links a{
    color:white;
    text-decoration:none;
    transition:0.3s;
}

.nav-links a:hover{
    opacity:0.8;
}

.menu-toggle{
    display:none;
    font-size:28px;
    cursor:pointer;
}

/* Hero */

.hero{
    min-height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:linear-gradient(135deg,#2563eb,#1e293b);
    color:white;
    padding:20px;
}

.hero h1{
    font-size:3rem;
    margin-bottom:20px;
}

.hero p{
    max-width:600px;
    margin:auto;
    margin-bottom:25px;
}

.btn{
    display:inline-block;
    padding:12px 24px;
    background:white;
    color:#2563eb;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;
}

/* Services */

.services{
    padding:80px 8%;
    text-align:center;
}

.services h2{
    margin-bottom:40px;
}

.service-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:25px;
}

.card{
    background:#f5f5f5;
    padding:25px;
    border-radius:10px;
    transition:0.3s;
}

.card:hover{
    transform:translateY(-5px);
}

/* About */

.about{
    padding:80px 8%;
    background:#f8fafc;
    text-align:center;
}

.about p{
    max-width:700px;
    margin:auto;
    margin-top:20px;
}

/* Contact */

.contact{
    padding:80px 8%;
    text-align:center;
}

.contact form{
    max-width:600px;
    margin:auto;
}

.contact input,
.contact textarea{
    width:100%;
    padding:12px;
    margin:10px 0;
    border:1px solid #ccc;
    border-radius:5px;
}

.contact button{
    width:100%;
    padding:12px;
    border:none;
    background:#2563eb;
    color:white;
    border-radius:5px;
    cursor:pointer;
}

#successMessage{
    margin-top:15px;
    color:green;
}

/* Footer */

footer{
    background:#0f172a;
    color:white;
    text-align:center;
    padding:20px;
}

/* Responsive */

@media(max-width:768px){

    .menu-toggle{
        display:block;
    }

    .nav-links{
        position:absolute;
        top:70px;
        right:0;
        width:100%;
        background:#0f172a;
        flex-direction:column;
        align-items:center;
        display:none;
        padding:20px 0;
    }

    .nav-links.active{
        display:flex;
    }

    .service-grid{
        grid-template-columns:1fr;
    }

    .hero h1{
        font-size:2rem;
    }
}