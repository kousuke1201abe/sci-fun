## ローカルビルド
0. 初回のみ以下のコマンドで github 上のコードをローカルに落とします(git は各自入れてください)

`git clone git@github.com:kousuke1201abe/sci-fun.git`

1. カレントディレクトリを移動します

`cd sci-fun`

2. ローカルサーバーを立ち上げます

`yarn start`

3. http://localhost:8000 にアクセスします


## 記事の書き方
src/pages/articles 配下に

`〇〇.md` ファイルを追加し、記事を書いてください。

`〇〇` が記事の URL になるので注意してください。

画像を追加する場合は
static/img 配下に画像ファイルを追加してください。

## デプロイ方法

master ブランチから `git co -b 任意の文字列` を叩いてブランチを切って push してください。

## Q & A
Q. ローカルビルドができないんだけど？！

A. `yarn install` をしてから `yarn start` してください。yarn が入ってない場合はインストールしてください。

Q. `yarn install` をしてから `yarn start` したけどローカルビルドができないんだけど？！

A. `yarn clean` をしてから `yarn start` してみてください。

Q. `yarn clean` をしてから `yarn start` したけどローカルビルドができないんだけど？！

A. node_modules というフォルダを消してから `yarn install` & `yarn start` してみてください。

Q. node_modules というフォルダを消してから `yarn install` & `yarn start` したけどローカルビルドができないんだけど？！

A. .....
