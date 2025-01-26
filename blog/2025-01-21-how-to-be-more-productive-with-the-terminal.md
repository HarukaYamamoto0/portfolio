---
slug: how-to-be-more-productive-with-the-terminal
title: Como ter mais produtividade com o terminal
authors: [HarukaYamamoto0]
tags: [articles, javascript]
image: https://imgur.com/VmXS7yS.png
hide_table_of_contents: true
---

Estou aqui novamente depois de quasse 10 meses sem postar algo util, então para me redimir hoje irei ensinar como ter um terminal mais util por assim se dizer, enfim sem enrolação aqui tá o sumario do que vamos fazer:

<!-- truncate -->

- [Instalar o Hyper.js](#instalando-o-hyperjs)
- [Configurar o tema Catppuccin](#configurar-o-tema-catppuccin)
- [Instalar o Zsh](#instalar-o-zsh)
- [Instalar o Oh My Zsh](#instalar-o-oh-my-zsh)
- [Instalando o ZInit](#instalando-o-zinit)
- [Instalando a fonte Fira Code](#instalando-a-fonte-fira-code)
- [Instalando o Spaceship](#instalando-o-spaceship)
- [Preview](#preview)
- [Links Uteis](#links-uteis)

> Para fins informativos o sistema operacional que eu usei para testes é o Zorin OS Core totalmente zerado.

### **Instalando o Hyper.js**

O Hyper.js ou apenas Hyper é um terminal feito em Electron porem o pulo no gato tá em que ele é extensível, bonito, fácil configuração e multiplataforma ou seja a mesma configuração em todos os seus computadores, simplesmente amo.

Para instalar ele é bem simples basta acessar o [site oficial](https://hyper.is/) e clicar em `Download` ou descer mais para baixo e escolher o melhor formato para seu OS:

![Installation Example](https://imgur.com/Erh43IX.png)

Depois de instalado e abrir o Hyper você deve ver ele assim:

![Hyper Default](https://imgur.com/cQUj8Wl.png)

### **Configurar o tema Catppuccin**

O Catppuccin é um tema muito bonito principalmente para pessoas como eu que já se cansou de ficar apenas usando o Dracula, o Catppuccin não é obrigatário para esse tutorial mas eu super recomendo. Inclusive assim como o tema Dracula está em todos os lugares o Catppuccin também tem vários ports você pode ver eles em [Catppuccin Ports](https://catppuccin.com/ports).

Para fazer a instalação dele no Hyper é bem simples basta abrir o arquivo de configuração do Hyper que é o `~/.hyper.js`:

```shell
nano ~/.hyper.js
```

E adicionar o seguinte na parte dos plugins:

```json
{
  "plugins": ["hypurr#latest"]
}
```

Agora vem a parte interessante pois o tema Catppuccin vem com 4 paletas de cores:

- [Latte](https://github.com/catppuccin/catppuccin#-palette)
- [Frappé](https://github.com/catppuccin/catppuccin#-palette)
- [Macchiato](https://github.com/catppuccin/catppuccin#-palette)
- [Mocha](https://github.com/catppuccin/catppuccin#-palette)

Então você escolhe qual é o melhor do seu gosto e adiciona a seguinte linha nas configurações

```js
module.exports = {
  config: {
    catppuccinTheme: "Macchiato", // <===== Add This
    ...
  }
  ...
}
```

Agora esse é ele com o tema Macchiato:

![Catppuccin theme in hyper.js](https://imgur.com/XOQAmjq.png)

### **Instalar o Zsh**

Ok até agora só foi questão de estilo praticamente, mas agora vamos de fato fazer o nosso terminal ficar mais poderoso usando o Zsh para os desavisados o Zsh é um shell voltado para uso interativo, embora também seja uma linguagem de script bastante poderosa. Ele tem varias features presentes no bash e outros shell's, além de trazer diversas inovações próprias.

Para instalar o Zsh é bem simples, basta usar o comando abaixo:

```shell
sudo apt install zsh -y
```

Ok, depois de instalado vamos testar para poder ver se tá funcionando:

```shell
zsh --version
```

A saída desse comando deve ser algo parecido com `zsh 5.8.1 (x86_64-ubuntu-linux-gnu)`

Agora vamos trocar o Bash pelo Zsh, porque atualmente para poder usar o Zsh você tem que usar o comando `zsh` e para trocar basta usar:

```shell
chsh -s /usr/bin/zsh
```

Depois de configurado basta fazer Logout e login novamente para que o sistema peque essa alteração.

Se por algum acaso aparacer esse menu apenas digite 2 e pressione `Enter`:

![message of new users](https://imgur.com/oAXYVgj.png)

## **Instalar o Oh My Zsh**

O Oh My Zsh ou apenas Omz é um framework que nos vai nos permitir configurar mais facilmente o Zsh, inclusive recomendo ler a descrição dele no [site oficial](https://ohmyz.sh/) é bem engraçada 😆

Para poder instalar o Omz primeiramente vamos ter que instalar o `Curl` e o `Git` caso você não tenha ainda:

```shell
sudo apt install curl git -y
```

Certo, depois de ter instalado o essencial vamos de fato instalar o Omz, para isso basta usar o comando:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Já de cara você já percebe que tá mais bonito e agora assim como a tela de boas vindas do Omz fala se você der uma olhada no arquivo `~/.zshrc` você vai perceber que é um arquivo como o `.bash` ou `.profile` então se você assim como eu guarda seus aliases em outro aquivo como o `.profile` basta colocar o comando `source ~/.profile` em qualquer lugar para que o Zsh carregue ele.

## **Instalando o ZInit**

ZInit é um gerenciador de plugins para o Zsh ele é flexível e rápido e nos permitirá que você instale plugins de forma bem simples e para podemos instalar essa maravilha basta usar:

```shell
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

Ele vai te pedir para instalar alguns plugins necessários apenas aceite com `y` e pressione `Enter`.

Agora para instalar os 3 plugins mais uteis que todo mundo usa, basta abrir o arquivo `~/.zshrc` e adicionar o seguinte no final do arquivo e salvar:

```shell
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

Agora para de fato instalar ele feche o terminal e abra novamente que o ZInit vai baixar eles.

## **Instalando a fonte Fira Code**

Fira Code é uma fonte monoespaçada gratuita que oferece ligaduras para combinações de caracteres comuns na programação. Esse é apenas um efeito visual na exibição da fonte, enquanto o código fonte permanece compatível com ASCII. Essa fonte ajuda a tornar a leitura e compreensão do código mais rápida.

No caso vamos usar ela pois no próximo tópico vamos usar o Spaceship e ele precisa dessa fonte para funcionar como esperado. Se quiser ter uma noção melhor sobre o Fira Code basta acessar a pagina do GitHub deles [aqui](https://github.com/tonsky/FiraCode).

Agora para instalar de fato a fonte tem varias formas dependendo do seu OS, você pode olhar aqui [o quia de instalação](https://github.com/tonsky/FiraCode/wiki/Installing), mas no meu caso apenas precisei usar:

```shell
sudo apt install fonts-firacode -y
```

E para que o Hyper use o Fira Code basta acessar `Menu => Edit => Preferences` que ele vai abrir rapidamente o arquivo `~/.hyper.js`, então basta adicionar o Fira Code junto com as fontes que já existe:

```js
module.exports = {
  config: {
    // Add "Fira Code" at the beginning
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    ...
  }
  ...
}
```

## **Instalando o Spaceship**

Como o ele mesmo diz o Spaceship é um prompt Zsh superpoderoso. Prompt é o que você vê quando você digita um comando. Ele pode mostrar muitas dicas úteis, economizando seu tempo e tornando a experiência do usuário suave e agradável.

Ele vai nos permitir deixar o nosso terminal parecido com isso:
![Spaceship Example](https://imgur.com/VmXS7yS.png)

Para instalar o Spaceship nós também podemos usar o ZInit para isso, basta colocar o seguinte no final do arquivo `~/.zshrc` assim como foi feito com os plugins anteriomente:

```shell
zinit light spaceship-prompt/spaceship-prompt
```

Agora vamos configurar o Spaceship colocando o seguinte novamente no final do `~/.zshrc`:

```shell
SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

E agora novamente feche o terminal e abra novamente que o ZInit vai baixar e configurar ele.

## Preview

E por fim depois de muita configuração finalmente temos nosso terminal bem mais bonito e util com autocomplete, syntax highlighting sem falar nos outros 300 plugins que você pode instalar no Omz, ZInit e Spaceship. Nesse tutorial mostrei apenas o básico com muita explicação.

E aqui tá a amostra final de como ficou meu terminal, o Spaceship é bem util para poder te orientar ondem você está, vale lembrar que se você acessar o seu computador usando SSH ele vai funcionar do mesmo jeito no client então sim é muito legal.

![Example](https://imgur.com/2CEqODY.png)

## **Links Uteis**

- [raftheunis87/hyperjs.md](https://gist.github.com/raftheunis87/607682946d0ef041ce1ad28c37456b7d)
- [awesome-hyper](https://bnb.github.io/awesome-hyper/)
- [Oh My Zsh Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/plugins)
