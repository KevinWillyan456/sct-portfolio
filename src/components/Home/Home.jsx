import ProgressBar from 'react-bootstrap/ProgressBar';

function Home() {
    return (
        <>
            <section className="container mt-5 d-flex gap-5 w-100">
                <div className="d-flex justify-content-center mt-5">
                    <img src="/perfil.png" alt="perfil" />
                </div>

                <div className="conteudo mt-5">
                    <h2>Olá, Meu nome é João</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas doloremque expedita at nihil enim tenetur
                        hic error amet recusandae deleniti fuga delectus iusto
                        veritatis animi vel, voluptatibus ipsam ad dignissimos?
                    </p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Formação Acadêmica</button>

                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Formação Acadêmica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul>
                                <li>TADS - IFMS</li>
                                <ul>2021 - Cursando</ul>
                                <li>Técnico em Informática</li>
                                <ul>2016 - 2018</ul>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Front-end</h5>
                        <ProgressBar animated now={60} variant="success" />
                    </div>
                    <div className="mt-3">
                        <h5>Back-end</h5>
                        <ProgressBar animated now={30} variant="warning" />
                    </div>
                    <div className="mt-3">
                        <h5>Mobile</h5>
                        <ProgressBar animated now={10} variant="danger" />
                    </div>
                </div>

            </section>
        </>
    );
}

export default Home;
