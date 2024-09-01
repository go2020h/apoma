'use client'
import React, { useState, useRef, useEffect } from 'react'

function MainComponent() {
  const [activeFeature, setActiveFeature] = React.useState(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(0)

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }, [children])

    return (
      <div className="border-b border-gray-300">
        <button
          className="flex justify-between items-center w-full py-4 px-6 text-left transition-all duration-300 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xl font-semibold">{title}</span>
          <i
            className={`fas fa-chevron-${isOpen ? 'up' : 'down'} transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          ></i>
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
        >
          <div ref={contentRef} className="py-4 px-6 text-gray-600">
            {children}
          </div>
        </div>
      </div>
    )
  }

  const handleVideoContextMenu = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white font-roboto">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto py-4 px-4 md:px-0 flex justify-between items-center">
          <a href="" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            Apoma
          </a>
          <nav
            className={`md:flex items-center ${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-gray-900 md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mr-0 md:mr-6 p-4 md:p-0">
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-300 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#manual" className="hover:text-gray-300 transition-colors">
                  Manual
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-gray-300 transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=788urgem"
              target="_blank"
              className="bg-gray-700 text-white hover:bg-gray-600 transition-colors px-4 py-2 rounded-full mt-4 md:mt-0"
            >
              Get Started
            </a>
          </nav>
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.6.0/css/all.css"></link>
        <link rel="icon" href="/apoma.jpg"></link>
      </header>
      <main className="pt-20">
        <section
          className="h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/apomadrive.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Apoma - Save to Drive</h1>
            <p className="text-xl md:text-2xl mb-10 animate-fade-in-up">
              LINEファイルの"消える"を"残る"に。Google Driveで、大切なデータを永遠に。
            </p>
            <div className="flex flex-col items-center space-y-10">
              <a
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=788urgem"
                target="_blank"
                className="bg-gray-700 text-white hover:bg-gray-600 transition-all transform hover:scale-105 px-6 py-3 rounded-full font-bold inline-flex items-center justify-center mx-auto animate-pulse max-w-[250px]"
              >
                Get Started <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href=".."
                target="_self"
                className="bg-blue-700 text-white hover:bg-blue-600 transition-all transform hover:scale-105 px-6 py-3 rounded-full font-bold inline-flex items-center justify-center mx-auto animate-pulse max-w-[250px]"
              >
                Apoma - Voice to TXT <i className="fas fa-repeat ml-2"></i>
              </a>
              <div className="bg-[#ffcccc] text-[#ff0000] p-4 rounded-lg mt-4 max-w-[300px] w-full">
                <p className="text-sm">※本機能はアポマ公式LINEアカウントではお使いいただけません。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">新機能誕生！LINEとGoogle Driveをseamlessに連携</h2>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <p className="text-xl leading-relaxed">
                もう二度とLINEのファイルダウンロード期限切れに悩まされることはありません。
              </p>
              <p className="text-xl leading-relaxed">LINEで受け取ったファイルを自動的にGoogle Driveに保存。</p>
              <p className="text-xl mb-8 leading-relaxed">大切なデータを常に手元に。</p>
              <p className="text-xl leading-relaxed">アポマで、更なる新しい可能性を開きましょう。</p>
            </div>
          </div>
        </section>
        <section id="features" className="py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <i className="fas fa-people-group text-gray-400 text-4xl"></i>,
                  title: 'グループ同期機能',
                  desc: 'LINEグループに送信されたファイルを、グループ内でアポマを友だち追加しているメンバー全員の設定したGoogle Driveに自動保存。情報共有と同期が一度の操作で完了し、チームワークを大幅に効率化します。'
                },
                {
                  icon: <i className="fas fa-shield-halved text-gray-400 text-4xl"></i>,
                  title: '自動保存＆期限切れ防止',
                  desc: 'LINEで受信したファイルを自動検知。ダウンロード期限が切れる前に、自動的にGoogle Driveへ保存します。もう大切なファイルを見逃す心配はありません。'
                },
                {
                  icon: <i className="fas fa-network-wired text-gray-400 text-4xl"></i>,
                  title: 'システム間seamless連携',
                  desc: 'LINEとGoogle Drive間のファイル転送を自動化。ファイル管理が驚くほど簡単に。効率的な情報整理をサポートします。対応可能ファイル種別や詳細な仕様については、下記をご確認ください。'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 transition-all duration-300 transform hover:scale-105 ${
                    activeFeature === index ? 'ring-2 ring-gray-600' : ''
                  } p-8 rounded-lg flex flex-col items-center text-center cursor-pointer hover:shadow-lg`}
                  onClick={() => setActiveFeature(index)}
                >
                  {feature.icon}
                  <h3 className="text-2xl font-semibold my-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="manual" className="py-32 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">How to Start</h2>
            <div className="max-w-5xl mx-auto">
              {[
                {
                  title: 'Step 1 - アポマを友達追加する',
                  desc: 'LINEでアポマを友達追加するだけで、すぐに利用開始できます。\n※既に追加済みの場合はそのままお使いいただけます。'
                },
                {
                  title: 'Step 2 - Google Driveのフォルダのアクセス権を設定する',
                  desc:
                    'Google Driveの保存先フォルダを開き、下記の手順を実施します。\n' +
                    '1.「i」の詳細ボタンをクリックする。\n' +
                    '2.「アクセスを管理」ボタンをクリックする。\n' +
                    '3.「一般的なアクセス」欄の「制限付き」を「リンクを知っている全員」に変更する。\n' +
                    '4.「閲覧者」を「編集者」に変更し、「完了」ボタンをクリックする。\n' +
                    '5.「アクセスできるユーザー」欄でリンクを知っている全員が編集可能になっていることを確認する。',
                  video: '/169demo.mp4'
                },
                {
                  title: 'Step 3 - Google Driveのフォルダの共有リンクをアポマに連携する',
                  desc:
                    'Google Driveの保存先フォルダを開き、下記の手順を実施します。\n' +
                    '1.フォルダ名をクリックし、「共有」>「リンクをコピー」をクリックする。\n' +
                    '2.アポマを開き、「ドライブ→」と入力し、続けてコピーしたリンクを貼り付けて送信する。\n' +
                    '※動画のLINE画面はアポマを導入いただいている-AMUSEMENT CASINO- ROCK様のトーク画面となります。\n' +
                    '3.数秒以内に「Google Drive設定完了」のチャットが届くことを確認する。',
                  video: '/169demo2.mp4'
                },
                {
                  title: 'Step 4 - 任意のファイルを送信する',
                  desc:
                    'アポマの個別トークまたは、アポマを招待したグループで任意のファイルを送信する。\n' +
                    '数秒以内に設定したフォルダへファイルが保存されます。\n' +
                    '※ファイルサイズが大きすぎると数分かかる可能性があります。\n' +
                    '※対応可能ファイル：画像、PDF、動画、その他Office系ファイル等\n' +
                    '※画像ファイルは「.jpg」、動画ファイルは「.mp4」として保存されます。'
                }
              ].map((step, index) => (
                <AccordionItem key={index} title={step.title}>
                  {step.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {step.video && (
                    <div className="mt-4">
                      <video
                        src={step.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg shadow-md"
                        onContextMenu={handleVideoContextMenu}
                        style={{
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          MozUserSelect: 'none',
                          msUserSelect: 'none',
                          pointerEvents: 'none'
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>
        <section id="cases" className="py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: 'プロジェクト管理の円滑化',
                  desc: 'LINEグループを活用し、アポマでファイル共有を自動化。プロジェクト関連ドキュメントが全メンバーのドライブに即時同期。トーク履歴を遡って資料探しをする時間が削減され、プロジェクト完了までの期間が平均15%短縮。'
                },
                {
                  title: '情報を集約し、24時間アクセス可能に',
                  desc: '企業の各拠点の報告や提案が自動的に同一フォルダに保存され、本社での情報アクセスが24時間可能に。意思決定のスピードが向上し、部門間の連携が強化。'
                },
                {
                  title: '家族の思い出を保存',
                  desc: '祖父母が孫の成長記録を頻繁に共有しており、共有された写真や動画が自動的にGoogle Driveに保存されるようになりました。大切な思い出が期限切れで消えてしまう心配がなくなった。'
                },
                {
                  title: '学習資料の管理が容易に',
                  desc: '友人たちと勉強会用のLINEグループを作っていて、共有されたレジュメやノートが自動的に各自のGoogle Driveに保存されるようになり、試験前の復習が効率的になりました。グループ全体の成績が向上した。'
                }
              ].map((case_, index) => (
                <div
                  key={index}
                  className="bg-gray-700 transition-all duration-300 transform hover:scale-105 p-8 rounded-lg shadow-xl hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-white">{case_.title}</h3>
                  <p className="text-gray-300">{case_.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-700 py-32">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-8 text-white">Start Your Innovation Journey Today</h2>
            <p className="text-2xl mb-12 text-gray-300">
              革新的なAIソリューションを体験し、ビジネスの未来を形作りましょう。
            </p>
            <a
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=788urgem"
              target="_blank"
              className="bg-gray-900 text-white hover:bg-gray-800 transition-all transform hover:scale-105 px-6 py-3 rounded-full font-bold inline-flex items-center justify-center mx-auto max-w-[300px]"
            >
              Get Started <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </section>

        <section id="contact" className="py-10 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
            <div className="text-center">
              <p className="text-xl">お問い合わせは下記までお願いします。 </p>
              <p className="text-xl">info@hidane.org</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto text-center px-4 md:px-0">
          <p className="text-gray-400">&copy; 2024 Apoma. All rights reserved.</p>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default MainComponent
