(function(){
    let comentario = 0;
    $(document).ready(function() {
        $("#btnmob").click(() =>{
            $('#menu').slideToggle(500);
        });

        $('.cmen').click(function(){
            $('.cmen').removeClass("active-m");
            $(this).addClass("active-m");
        });

        $(".btnv").click(() =>{
            $('#vmais').toggle();
            $('#pontos').toggle();
            $('#menos').toggle();
            $('#mais').toggle();
        });

        $("#criart").click(() =>{
            $('#segtela').toggle();
            $('#pritela').toggle();
        });

        $("#btnnewt").click(() =>{
            chamarSegundaTela();
            $("#enviarComentario").attr('edit', 0);
        });

        $("#btndesc").click(() =>{
            $('#pritela').toggle();
            $('#terctela').toggle();
        });

        $(".neg").click(() =>{
            $('.neg').toggleClass('conftext');
        });

        $(".ita").click(() =>{
            $('.ita').toggleClass('conftext');
        });

        $("#nres").click(() =>{
            $('#respostas').slideToggle(350);
        });

        function mudarTelaEnvio() {
            $('#terctela').toggle();
            $('#segtela').toggle();
        }
        function adicionaHTML(assunto, pergunta){
            $("#conteudoPerguntas").prepend(`
            <div id="edittop" class="editopicos" dataComentario=${comentario}>
            <div class="perguntas">
                <div class="feeds text-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1671 7.33594C20.3494 7.51823 20.4406 7.73958 20.4406 8C20.4406 8.26042 20.3494 8.48177 20.1671 8.66406L8.60461 20.2266C8.42232 20.4089 8.20097 20.5 7.94055 20.5C7.68014 20.5 7.45878 20.4089 7.27649 20.2266L0.713989 13.6641C0.531698 13.4818 0.440552 13.2604 0.440552 13C0.440552 12.7396 0.531698 12.5182 0.713989 12.3359L2.27649 10.7734C2.45878 10.5911 2.68014 10.5 2.94055 10.5C3.20097 10.5 3.42232 10.5911 3.60461 10.7734L7.94055 15.1484L17.3156 5.77344C17.4718 5.59115 17.6801 5.5 17.9406 5.5C18.201 5.5 18.4223 5.59115 18.6046 5.77344L20.1671 7.33594ZM7.51086 11.4766L3.13586 7.10156C2.82336 6.78906 2.82336 6.48958 3.13586 6.20312L4.89368 4.44531C5.02389 4.3151 5.16711 4.25 5.32336 4.25C5.50566 4.25 5.66191 4.3151 5.79211 4.44531L7.94055 6.59375L13.8781 0.695312C13.9822 0.565104 14.1124 0.5 14.2687 0.5C14.451 0.5 14.6072 0.565104 14.7374 0.695312L16.4952 2.45312C16.8077 2.73958 16.8077 3.03906 16.4952 3.35156L8.37024 11.4766C8.26607 11.6068 8.12284 11.6719 7.94055 11.6719C7.75826 11.6719 7.61503 11.6068 7.51086 11.4766Z" fill="#707070"/>
                        </svg>
                        <p>Aguardando feedback dos autores</p>
                        <p class="cp c-laranja btned" onClick="editarTopico(${comentario})">Editar tópico</p>
                    </div>
                <div class="cont-perg">
                    <div class="padass">
                        <div class="assunto">
                            <h2 class="c-laranja conteudoAssunto">${assunto}</h2>
                            <p class="c-cinzamedio mbold">Carlos Henrique Santos</p>
                        </div>
                        <div class="pergunta conteudoPergunta">
                            <p>${pergunta}</p>
                        </div>
                        <div class="fpergunta d-flex align-items-center">
                            <div class="maisinf">
                                <svg class="cp" width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="2.02435" cy="16" rx="2.00195" ry="2" fill="#ED7839"/>
                                    <ellipse cx="2.02435" cy="9" rx="2.00195" ry="2" fill="#ED7839"/>
                                    <ellipse cx="2.02435" cy="2" rx="2.00195" ry="2" fill="#ED7839"/>
                                    </svg>
                            </div>
                            <div class="favorita">
                                <svg class="cp" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd_316_609)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04083 2C2.93626 2 2.04083 2.89543 2.04083 4V19C2.04083 20.1046 2.93626 21 4.04083 21H27.0671C28.1717 21 29.0671 20.1046 29.0671 19V4C29.0671 2.89543 28.1717 2 27.0671 2H4.04083Z" fill="#ED7839"/>
                                    </g>
                                    <path d="M15.0466 17.4414L14.1989 16.6758C13.2328 15.8008 12.5309 15.1536 12.0934 14.7344C11.6559 14.3151 11.1638 13.7956 10.6169 13.1758C10.0882 12.556 9.72365 12 9.52313 11.5078C9.32261 10.9974 9.22235 10.4779 9.22235 9.94922C9.22235 9.05599 9.52313 8.29948 10.1247 7.67969C10.7445 7.0599 11.5101 6.75 12.4216 6.75C13.4789 6.75 14.3539 7.16016 15.0466 7.98047C15.7393 7.16016 16.6143 6.75 17.6716 6.75C18.583 6.75 19.3395 7.0599 19.9411 7.67969C20.5609 8.29948 20.8708 9.05599 20.8708 9.94922C20.8708 10.6602 20.6338 11.3984 20.1599 12.1641C19.6859 12.9297 19.1664 13.5951 18.6013 14.1602C18.0544 14.7253 17.152 15.5729 15.8942 16.7031L15.0466 17.4414Z" fill="white"/>
                                    <defs>
                                    <filter id="filter0_dd_316_609" x="0.0408325" y="0" width="31.0263" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_316_609"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_316_609" result="effect2_dropShadow_316_609"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_316_609" result="shape"/>
                                    </filter>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="like">
                                <p class="c-cinzinha mb-0 cp hliresp">0 likes</p>
                            </div>
                            <div class="resposta">
                                <p class="c-cinzinha mb-0 cp hliresp">0 resposta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
            `)
        }
        $('#enviarComentario').submit(function (e) { 
            e.preventDefault();
            comentario++;
            let edit = parseInt($(this).attr('edit'));
            let assunto = $(this).find('#assunto').val();
            let pergunta = $(this).find('#pergunta').val();
            let valorComentario = $(this).attr('valorComentario');
            if(edit){
                let divComentario = $(`.editopicos[dataComentario = '${valorComentario}']`);
                $(divComentario).find('.conteudoAssunto').html(assunto);
                $(divComentario).find('.conteudoPergunta').html(pergunta);
                $("#enviarComentario").attr('edit', 0);
            }
            else{
                mudarTelaEnvio();
                adicionaHTML(assunto, pergunta);
            }
            $(this)[0].reset();
        });
    });
})()

function chamarSegundaTela() {
    $('#terctela').toggle();
    $('#segtela').toggle();
}


function editarTopico(valorComentario){
    let divComentario = ($(`.editopicos[dataComentario = '${valorComentario}']`));
    let assunto = $(divComentario).find('.conteudoAssunto').html();
    let pergunta = jQuery($(divComentario).find('.conteudoPergunta').html()).text();
    $("#assunto").val(assunto);
    $("#pergunta").val(pergunta);
    chamarSegundaTela();
    $("#enviarComentario").attr('edit', 1);
    $("#enviarComentario").attr('valorComentario', valorComentario);
}