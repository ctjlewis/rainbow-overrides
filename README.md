# 🌈 Rainbow: Token Overrides
This repo contains token metadata overrides for Rainbow.

### Contributing
There is one JSON file in `tokens/` for each token with overrides set, e.g.
`tokens/eth.json`. To suggest a change, just edit the relevant data and send in
a pull request.

### Use
The raw Token Overrides at `rainbow-overrides.json` are kept up-to-date. You can
import it via:

```ts
import rainbowOverrides from 'rainbow-overrides/rainbow-overrides.json'
```