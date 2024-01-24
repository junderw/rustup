# Rustup

Unofficial rustup installer

```
$ npx rustup
```

```
yarn add --dev rustup

cat <<EOF > rust-toolchain
[toolchain]
channel = "nightly"
components = [ "rustfmt", "clippy" ]
targets = [ "wasm32-wasi", "wasm32-unknown-unknown" ]
profile = "minimal"
EOF

yarn cargo build
```
