## Lazy Load Vtex

## Sobre
Uma versão melhorada do script [vtex-lazyloading](https://github.com/mauriciodarocha/vtex-lazyloading) trabalhando em conjunto com o [Lozad.js](https://apoorv.pro/lozad.js/) para criar um sistema de lazy load funcional para vtex.

> Funciona tanto para prateleiras, quanto para qualquer imagem.
> Atualmente só ativa automaticamente em prateleiras.
> Caso queira adicionar em outro local ou em banners, você deve fazer outra configuração que explicaremos abaixo.

## Requisitos
- Jquery

## Como usar?
- Modifique sua prateleira
- Insira o JS
- Insira o CSS

#### Modificando a prateleira
O plugin irá procurar pelo caminho da imagem dentro da tag `<noscript>`.
A tag `<noscript>` renderiza seu contéudo apenas se o javascript estiver desativado. Funcionando como alternativa se algum navegador estiver com o javascript desabilitado. Neste caso, o código do "lazy load" não será executado.

Troque o componente que chama a imagem na prateleira para o exemplo abaixo:
```html
    <div class="shelf-image-container">
      <noscript>$product.GetImageTag(29)</noscript>
    </div>
```

Após, salve e vamos para o próximo.

## Inserindo o JavaScript
Faça o clone deste projeto, e use suba no seu gerenciar de arquivos js o arquivo `vtex_lazyloading.js`

Recomendamos inserir dentro do seu template do footer, após a instancia da cdn do jquery, caso utilize uma diferente da vtex.

Código:
```html
    <script src="/arquivos/vtex_lazyloading.js" type="text/javascript"></script>
```

Salve e vamos para o próximo...

## Inserindo o CSS
Este css nada mais é que um complemento que mostra um efeito de fade quando o usuário está navegando e o script está executando suas funções.

> Você pode inserir onde quiser, tanto na sua folha de estilo css, quanto do seu template de header.

```css
.fadein {
    animation-name: fadein;
    animation-duration: 2s;
}
   
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```

Feito isso, salve seu template e aguarde o cache, e veja se está tudo ok :)

---
### Como usar em banners ou imagens
Para usar em banners e imagens é bem simples, tudo que precisa fazer é remover a imagem do `src` e inserir dentro de um `data-src` e inserir a classe `lozad`, que deve ficar mais ou menos assim:

```html
    <img class="lozad" data-src="nome-pasta/imagem.jpg" alt="Imagem" />
```

Caso queira utilizar em background a imagem para carregar Lazy Loading, o HTML ficaria assim:

```html
<div class="lozad" data-background-image="nome-pasta/imagem.png">
</div>
```
> OBS: NÃ NÃO FOI TESTADO

### Suporte para navegadores antigos
Para dar suporte a navegadores mais antigos, basta utilizar o Polyfill, antes de chamar o script lozad.js

```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
```

> OBS: NÃ NÃO FOI TESTADO

Dessa forma, você consegue utilizar em navegadores que não dão suporte **API Intersection Observer**.

Essa é uma ótima alternativa se você deseja aumentar a velocidade do carregamento da página, principalmente se ela possui muitas imagens.

---


## License

SEI LÁ, NÃO ENTENDO MUITO DE LICENÇA

**Espero que tenha lhe ajudado!!**

**Se ajudou, deixa a estrelinha :)**
