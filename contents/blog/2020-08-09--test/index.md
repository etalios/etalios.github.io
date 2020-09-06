---
title: スタイルチェック用記事
tags: ["Markdown", "テスト記事"]
createdAt: 2020-08-23
updatedAt: 2020-08-23
draft: false
---

スタイルチェック用の記事です。

## h2

### h3

#### h4

##### h5

- 1 つ
- 2 つ
- 3 つ

間にテキストを入れる。

1. 1 つ
2. 2 つ
3. 3 つ

下にテキストを配置。

> このテキストは引用です。  
> 複数行の引用もできます。

コードのシンタックスハイライト。

```js{numberLines: true}
console.log("Hello, World!")
```

タイトルも付けられる。

```js:title=hello.js
console.log("Hello, World!")
```

インラインの `code` のスタイルテスト。

```javascript{numberLines: 5}{1,5-9}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]
```
