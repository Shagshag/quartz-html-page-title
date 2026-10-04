# html-page-title

Quartz v5 component plugin: same as `page-title`, but the `html` option is rendered as raw HTML (e.g. a shorter title on small screens).

```yaml
- source: github:Shagshag/quartz-html-page-title
  enabled: true
  options:
    html: 🐢<span class="desktop-only"> Shagshag</span>
  layout:
    position: left
    priority: 10
```

Without `html`, falls back to `pageTitle`. Disable the stock `page-title` plugin. The `html` value is injected unescaped: only put trusted config there.
