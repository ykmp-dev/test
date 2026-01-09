# EVM Wallet Generator

EVMウォレットを大量生成し、アドレスと秘密鍵をCSVファイルに保存するツールです。

## 機能

- Ethers.jsを使用してEVMウォレットを生成
- 1000個のウォレットを自動生成
- アドレスと秘密鍵をCSV形式で保存

## 使用方法

### 依存関係のインストール

```bash
npm install
```

### ウォレット生成

```bash
npm run generate
```

または

```bash
node generate-wallets.js
```

## 出力

- `evm_wallets.csv`: 生成されたウォレットのアドレスと秘密鍵を含むCSVファイル
  - Index: ウォレット番号 (1-1000)
  - Address: ウォレットアドレス
  - PrivateKey: 秘密鍵

## セキュリティ上の注意

⚠️ **重要**: 生成された秘密鍵は厳重に管理してください。
- CSVファイルは機密情報を含むため、安全に保管してください
- 本番環境での使用前に、セキュリティ要件を確認してください
- Git管理から除外されています(.gitignoreに設定済み)

## 技術仕様

- Node.js
- ethers.js v6.9.0
