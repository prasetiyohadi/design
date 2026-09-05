CodeBlock — wraps every code sample on the blog. Distinct near-black background from the surrounding warm surfaces, for clear figure/ground separation.

```jsx
<CodeBlock filename="reconcile.sh" language="bash">
{`kubectl apply -f manifests/ --context prod-apse1`}
</CodeBlock>
```

Omit `filename` for a bare snippet (no header bar). Syntax colors come from the `--code-*` tokens — apply spans manually or via a highlighter that maps to them.
