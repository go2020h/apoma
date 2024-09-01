'use client'
import React from 'react'

function MainComponent() {
  const [activeFeature, setActiveFeature] = React.useState(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [newsItems] = React.useState([
    {
      image: '/rock.jpg',
      title: '-AMUSEMENT CASINO- ROCK様のLINEアカウントに導入されました。',
      description: '渋谷駅徒歩3分。初心者にも優しいアミューズメントカジノ',
      url: 'https://www.rock-casino.com/'
    },
    {
      image: '/apomadrive.png',
      title: '新機能誕生！Apoma -  Save to Drive',
      description: 'LINEファイルの"消える"を"残る"に。Google Driveで、大切なデータを永遠に。',
      url: '/drive'
    }
  ])

  const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false)
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
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 px-6 text-gray-600">{children}</div>
        </div>
      </div>
    )
  }

  const getNewsGridColumns = () => {
    if (newsItems.length === 1) return 'grid-cols-1'
    if (newsItems.length === 2) return 'grid-cols-1 md:grid-cols-2'
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
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
                <a href="#news" className="hover:text-gray-300 transition-colors">
                  News
                </a>
              </li>
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
          style={{ backgroundImage: "url('/apoma.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto text-center relative z-10 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Apoma - Voice to TXT</h1>
            <p className="text-xl md:text-2xl mb-10 animate-fade-in-up">
              声から文字へ、アイデアを形に。LINEで広がる創造の世界。
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
                href="/drive"
                target="_self"
                className="bg-blue-700 text-white hover:bg-blue-600 transition-all transform hover:scale-105 px-6 py-3 rounded-full font-bold inline-flex items-center justify-center mx-auto animate-pulse max-w-[250px]"
              >
                Apoma - Save to Drive <i className="fas fa-repeat ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="news" className="py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">News</h2>
            <div className={`grid ${getNewsGridColumns()} gap-8 justify-center`}>
              {newsItems.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  key={index}
                  className="block hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">About Apoma</h2>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <p className="text-xl leading-relaxed">
                アポマとは、音声メッセージを瞬時にテキストに変換する革新的なLINE Botです。
              </p>
              <p className="text-xl leading-relaxed">最新のAI技術を駆使し、長時間の音声も正確に文字起こしします。</p>
              <p className="text-xl leading-relaxed">
                アポマがあれば、音声をテキストに変換する作業が驚くほど簡単になります。
              </p>
              <p className="text-xl mb-8 leading-relaxed">
                あなたのコミュニケーションを、よりスムーズに、より効率的に。
              </p>
              <p className="text-xl leading-relaxed">アポマで、新しい可能性を開きましょう。</p>
            </div>
          </div>
        </section>
        <section id="features" className="py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <i className="fas fa-bolt text-gray-400 text-4xl"></i>,
                  title: '即時利用可能',
                  desc: 'LINEで友だち追加して音声メッセージを送信するだけ。面倒な設定は一切不要で、すぐにアポマをお使いいただけます。'
                },
                {
                  icon: <i className="fas fa-users text-gray-400 text-4xl"></i>,
                  title: 'ノイズ除去機能',
                  desc: '最新のAI技術を駆使し、「あー」「えー」などのフィラー音声を効果的に取り除きます。その結果、クリアで読みやすい文字起こしを実現します。'
                },
                {
                  icon: <i className="fas fa-chart-bar text-gray-400 text-4xl"></i>,
                  title: '長文の自動要約',
                  desc: '長時間の音声データも自動で要約し、重要なポイントを簡潔にまとめます。効率的な情報整理をサポートします。詳細な制限事項については、下記をご確認ください。'
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
            <div className="max-w-3xl mx-auto">
              {[
                {
                  title: 'Step 1 - アポマを友達追加する',
                  desc: 'LINEでアポマを友達追加するだけで、すぐに利用開始できます。'
                },
                {
                  title: 'Step 2 - 音声メッセージを送信する',
                  desc:
                    'LINEの音声メッセージ機能を使って、文字起こししたい音声を送信します。\n' +
                    '※個別トークでもアポマを招待したグループでも利用可能です。\n' +
                    '※音声メッセージ制限：25分（25MB）以内、文字起こし後の文字数：5000字以内まで可能'
                },
                {
                  title: 'Step 3 - テキストを受信する',
                  desc:
                    '数秒以内に、高精度AIによって文字起こしされたテキストが届きます。\n' +
                    '長い音声メッセージの場合は要約を追加します。'
                }
              ].map((step, index) => (
                <AccordionItem key={index} title={step.title}>
                  {step.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
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
                  title: '移動時間を有効活用',
                  desc: '車での移動中にアイデアを音声で録音し、アポマで即座に文字起こし。チームとリアルタイムで情報共有することで、会議準備時間を大幅に短縮。'
                },
                {
                  title: '顧客対応の質と量を同時に改善',
                  desc: '顧客との電話対応をアポマで文字起こしすることで、タイピング時間を90%削減。1日あたりの対応件数が30%増加し、同時に顧客満足度も向上させることに成功。'
                },
                {
                  title: 'アイデア整理',
                  desc: 'アイデアをアポマで文字起こし。自動要約機能を使ってキーポイントを抽出し、整理時間を75%削減。スピードが大幅に向上。'
                },
                {
                  title: 'LINEで完結、新たなツール導入の手間を省く',
                  desc: '既に使い慣れているLINEでアポマが利用できることで、追加のツール導入が不要に。導入コストと学習時間を削減。'
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
      <footer className="bg-gray-900 py-10">
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
