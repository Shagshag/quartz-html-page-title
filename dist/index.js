import { jsx } from "preact/jsx-runtime"

/**
 * Same as the page-title plugin, but the `html` option is injected as raw HTML,
 * so the title can contain markup such as `<span class="desktop-only">`.
 * Falls back to the (escaped) `pageTitle` from the site configuration.
 * The `html` value comes from quartz.config.yaml, never from user content.
 */
export const HtmlPageTitle = (opts) => {
  const Component = ({ fileData, cfg, displayClass }) => {
    const depth = fileData.slug.split("/").length - 1
    const baseDir = depth === 0 ? "." : Array(depth).fill("..").join("/")
    const classes = [displayClass, "page-title"].filter(Boolean).join(" ")
    const link = opts?.html
      ? jsx("a", { href: baseDir, dangerouslySetInnerHTML: { __html: opts.html } })
      : jsx("a", { href: baseDir, children: cfg.pageTitle })
    return jsx("h2", { class: classes, children: link })
  }

  Component.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`
  return Component
}

export default HtmlPageTitle
