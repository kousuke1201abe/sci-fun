import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="container"
          style={{
            paddingTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <section
            className="section"
            style={{ margin: '30px' }}
          >
            <h2
              className="has-text-weight-bold is-size-5"
              style={{ marginBottom: '20px' }}
            >
              プライバシーポリシー
            </h2>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                個人情報の取得
              </h5>
              <p>
                当サイト「SY_FY:lab」では、Googleが提供している分析ツール「Google
                Analytics」を利用して、訪問者の行動を分析しています。
                また、Google
                Analyticsはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすることでデータ収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。{' '}
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                個人情報の利用
              </h5>
              <p>
                当サイトでは、お問い合わせの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
                これらの個人情報は、質問に対する回答や必要な情報を電子メール等でご連絡する場合に利用させていただくものあり、個人情報をご提供いただく際の目的以外では利用いたしません。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                個人情報の保管
              </h5>
              <p>
                お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                個人情報の第三者への開示
              </h5>
              <p>
                次の場合を除いて、お客様からいただいた個人情報を、第三者に開示することはありません。
                <li>提供者の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>
                  不正行為やその他の違法行為を防ぐために個人情報の開示が必要となった場
                </li>
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                個人情報のお客様への開示
              </h5>
              <p>
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                広告の配信について
              </h5>
              <p>
                当サイトは第三者配信の広告サービス「Google
                Adsense」を利用しています。
                広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
                Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は
                <a href="https://policies.google.com/technologies/ads?gl=jp">
                  広告 – ポリシーと規約 – Google
                </a>
                をご覧ください。
                第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。
                また、当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                免責事項
              </h5>
              <p>
                当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
                当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
                当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                著作権について
              </h5>
              <p>
                当サイトに掲載されている情報についての著作権は放棄しておりません。当サイト記事からの引用に関しましては「引用元の明示」によって無償で引用頂けます。ただし、全文転載はお断りいたしております。引用許可範囲についても、事前予告なくこれを変更する事があります。また、当サイトのRSSを利用し、コンテンツをそのまま盗用することも禁止しています。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                プライバシーポリシーの変更について
              </h5>
              <p>
                当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                修正された最新のプライバシーポリシーは常に本ページにて開示されます。
              </p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <h5
                className="has-text-weight-semibold"
                style={{ marginBottom: '10px' }}
              >
                お問い合せ
              </h5>
              <p>
                当サイトの個人情報の取扱に関するお問い合せは
                <Link to="/contact">こちら</Link>
                までご連絡ください。
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
