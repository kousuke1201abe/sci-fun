import React from 'react';
import Layout from '../../components/Layout';

export const aboutSyFy = () => (
  <Layout>
    <div className="container" style={{ paddingTop: '50px' }}>
      <div className="section" style={{ margin: '10px' }}>
        <div className="columns">
          <div className="is-paddingless column is-10 is-offset-1">
            <div className="content">
              <div className="column is-12">
                <div style={{ marginBottom: '30px' }}>
                  <h1 className="headline has-text-weight-bold">ABOUT SY_FY:lab</h1>
                  <h3 className="sub-headline" style={{margin: "10px 0 10px 0", lineHeight: "2rem", color: "#cf74a2"}}>SY_FY:labは「SF」を切り口に、カルチャーやビジネスまで幅広く発信するメディアです。</h3>
                  <p style={{marginTop: "20px"}}>21世紀現在、SFはもはや「映画」や「小説」といったフィクションの世界に止まらず、ビジネスなどの現実世界にまで影響を及ぼすようになっています。
                  SY_FY:labでは、そんな「SF」を広い意味で解釈し、多岐にわたる分野の情報を発信します。</p>
                </div>
                <div>
                  <h1 className="headline has-text-weight-bold">OUR VISION</h1>
                  <h3 className="sub-headline" style={{margin: "10px 0 10px 0", lineHeight: "2rem", color: "#cf74a2"}}>スキマ時間に、発見を。</h3>
                  <p style={{marginTop: "20px"}}>いま、インターネットにはあまりにも多くの情報が溢れています。
                  気がつけば長い時間ネットサーフィンをしていて、結局何も残らなかった、そんな経験はありませんか？
                  SY_FY:labは「SF」という切り口を起点として、ムダな時間を少しでも減らしたい。
                  通勤・通学などのスキマ時間や、ベッドの上でスマホをぼうっと眺める時間を、
                  未来を想像してワクワクしたり、新たに熱中できるモノ・コトを発見したりする時間に変えたい。
                  スキマ時間に発見がある毎日を。それが、私たちの目指す未来です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
