---
title: Проект DESK. Часть II
description: Проект desk
footer: © 2020 Дмитрий Дмитриенко
---


# Проект desk. Часть II

В этой статье рассмотрим дополнительные сущности, которые цепляются к заявке DESK.

## Документооборот

Документооборот это сущность для добавления каких-то файлов у которых можно обозначить тип документа,
дата получения, дата подтверждения, комментарий.

![Список документов DESK заявки](/desk1/desk-docmanager.png)

Для отображения списка используется обычный компонент grid'а для Битрикс24.

![Добавление документа DESK заявки](/desk1/desk-docmanager-add.png)

При добавлении уже подставляется дата создания и автор добавляемого документа.
Файлов можно добавлять сколько угодно. Все файлы складываются на диск Битрикс24.
Как видите для добавления используется side panel из Битрикс24.
После добавления страница не перезагружается, а таблица обновляется по ajax.

Детальная страница тоже представлена side panel Битрикс24.

## Таможенные декларации

![Список там.деклараций](/desk/desk-declaration-list.png)

Для списка там.деклараций используется тоже стандартный grid Битрикс24.
Для создания тоже используется side panel из Битрикс24.
Из интересного используется импорт там.деклараций из excel файла. 

## Задачи

![Список задач](/desk/desk-task.png)

Как заметили тут снова стандартный grid Битрикс24.

