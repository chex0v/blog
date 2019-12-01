---
title: Старт блога на vuepress
description: Что нужно знать перед началом создания сайта-блога на vuepress
footer: © 2019 Дмитрий Дмитриенко
---

## Старт блога на vuepress


[Куда класть картинки ?](./vuepress-start.html#картинки)

[Что лучше yarn или npm ?](./vuepress-start.html#yarn-или-npm)

[Как изменить стандартную тему ?](./vuepress-start.html#изменение-стандартной-темы)

[Как подключить другие vue компоненты ?](./vuepress-start.html#подкnючение-других-vue-компонентов)

[Как изменить стили стандартной темы ?](./vuepress-start.html#изменение-стиnей-стандартной-темы)

### Картинки

Все основные свои настройки, файлы и скрипты лежат в папке .vuepress, в корне сайта. Все картинки на которые вы ссылаетесь на сайте должны лежать в папке 

```
.vuepress/public/
```

### Yarn или npm

Большой разницы нет по сути. Yarn чуть быстрее npm при сборке и скачивании пакетов. Сам пользуюсь yarn, так как в основном в документации все примеры для yarn.


### Изменение стандартной темы

Стандартная тема конечно хороша, на первое время, но хочется как-то её поменять.

Есть настройки основные с которыми можно поиграться: [https://vuepress.vuejs.org/theme/default-theme-config.html](https://vuepress.vuejs.org/theme/default-theme-config.html#homepage)

Но их всё равно мало, хочется как-то изменить в первую очередь главную страницу.

Для начала нужно создать папку 

```
.vuepress/theme/
```

В ней файл **index.js** с таким кодом

``` js
module.exports = {
    extend: '@vuepress/theme-default'
};
  
```

Который говорит, что мы хотим расширить тему по-умолчанию.

Далее нам нужно переопределить стандартный layout. 
Это vue компонент который является основным шаблоном для каждой страницы. 

Создаём его по пути

```
.vuepress/theme/layouts/Layout.vue
```

Код в компоненте можно написать свой или взять отсюда например: [https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/layouts/Layout.vue](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/layouts/Layout.vue)


### Подключение других vue компонентов


Итак мы как-то изменили главную страницу или просто общий шаблон нашего сайта, но теперь мы хотим использовать другие пакеты на vue на нашем сайте. Как это сделать?

Во-первых не все модули подойдут, т.к. вам придётся собирать свой сайт для отправки на какой-то сервер, а собрать он может не всегда без ошибок.

Создаём файл

```
.vuepress/enhanceApp.js
```

И в нём подключаем нужные нам компоненты или зависимости, таким образом

``` js
import VueTypedJs from 'vue-typed-js'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

export default ({
    Vue,
    options, 
    router, 
    siteData
}) => {
    Vue.use(VueTypedJs)

    Vue.component('parallax-container', ParallaxContainer)
    Vue.component('parallax-element', ParallaxElement)
}
```

Всегда проверяйте build, т.к. могут быть ошибки.

### Изменение стилей стандартной темы

Если мы хотим как-то поменять стили нашего сайт, мы можем их описать например в общем layout'е. Но в общем layout'е используются переменные для некоторых частей нашего сайта, чаще для цвета. 

Как их переопределить?

Создаём файл

```
.vuepress/styles/palette.styl
```

В котором например можем переопределить основной цвет текста на сайте

``` styl
$textColor = #1f272f
```

Продолжение следует...