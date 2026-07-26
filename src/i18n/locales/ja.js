const ja = {
  header: {
    logoSub: 'フルスタック · 日本',
    nav: ['ホーム', '自己紹介', '学歴', 'サービス', '制作実績', 'スキル', 'お問い合わせ'],
    available: '対応可能',
    cta: '相談する',
    menuOpen: 'メニューを開く',
    menuClose: 'メニューを閉じる',
  },
  hero: {
    eyebrow: 'フルスタック開発者 · 日本',
    titleLines: ['役に立つ', 'デジタル体験を', '目的を持ってつくる。'],
    serifLineIndex: 1,
    name: 'John Gabriel Caganda Bagacina',
    stack: 'React · Node.js · MongoDB',
    explore: '制作実績を見る',
    imageAlt: 'John Gabriel Caganda Bagacina',
    badgeAvailable: '対応可能',
    portraitLabel: 'ポートレート',
    codeCurious: 'curious',
  },
  about: {
    eyebrow: '01 / 自己紹介',
    headingBefore: '複雑なものを、',
    headingEm: 'シンプル',
    headingAfter: 'に感じさせる開発が好きです。',
    paragraphs: [
      '日本在住のフルスタック開発者、John です。レスポンシブでアクセシブルな Web アプリケーションと RESTful API を、実用的なユーザー体験を軸に構築しています。',
      '開発実務に加え、チームワークと英語・日本語でのコミュニケーションも強みです。',
    ],
    link: '一緒に仕事をしましょう ↗',
    facts: [
      ['8+', '主要技術'],
      ['3', '使用言語'],
      ['5', '掲載プロジェクト'],
      ['日本', '拠点'],
    ],
  },
  education: {
    eyebrow: '02 / 学歴・受賞',
    headingLine1: '学び続け、',
    headingEm: 'つくり続ける。',
    items: [
      {
        period: '2024 - 2026',
        title: '情報処理学科',
        school: 'フォーラム情報アカデミー · 新潟県',
        note: '2026年3月卒業',
      },
      {
        period: '2022 - 2024',
        title: '日本語プログラム',
        school: '横浜国際教育アカデミー · 横浜',
        note: '修了',
      },
      {
        period: '2011 - 2015',
        title: '高等学校卒業',
        school: 'Rinconada National Technical Vocational School · フィリピン',
        note: '修了',
      },
    ],
    awardsLabel: '主な受賞・資格',
    awards: [
      '日本語スピーチコンテスト 最優秀賞',
      'JLPT N4 合格 · JLPT N2 受験予定（2026年7月）',
    ],
  },
  services: {
    eyebrow: '03 / お手伝いできること',
    items: [
      {
        title: 'フロントエンド\n開発',
        copy:
          'React、TypeScript、JavaScript、HTML5、CSS3、Tailwind CSS、Bootstrap を用いた、レスポンシブで洗練された UI を構築します。',
      },
      {
        title: 'バックエンド\n開発',
        copy:
          'Node.js、Express.js、Python による RESTful API とアプリケーションロジック、データベース連携を実装します。',
      },
      {
        title: 'フルスタック\n開発',
        copy:
          'データモデル設計から外部連携、アクセシブルで直感的な UI まで、一貫したプロダクト開発を行います。',
      },
    ],
  },
  portfolio: {
    eyebrow: '04 / 制作実績',
    headingLine1: '意図のある',
    headingEm: 'プロジェクト。',
    visitLink: '公開サイトを見る',
    moreLabel: 'もっと見る',
    moreHeading: '制作の背景も知りたいですか？',
    links: [
      { href: 'https://new-porfolio-rosy.vercel.app/', label: '公開ポートフォリオ' },
      { href: 'https://github.com/JohnGabriel1998', label: 'GitHub' },
      { href: 'https://linkedin.com/in/johngabrielbagacina', label: 'LinkedIn' },
      { href: 'https://youtu.be/bevnAtDiPUQ?si=uhKGvl3dFoUggTIG', label: 'スピーチ受賞' },
    ],
    projects: [
      {
        type: 'portal',
        date: '01 · 2025-2026',
        title: '次世代アカデミックポータル',
        copy:
          'インターンシップで開発した、学生・学校向け情報管理システム。React によるレスポンシブ UI とデータベース連携機能を実装。',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: null,
      },
      {
        type: 'portfolio-card',
        date: '02 · 2024-現在',
        title: '個人ポートフォリオサイト',
        copy:
          '日英対応、ライト/ダークモード、モバイルファーストのレスポンシブ構成のポートフォリオ。',
        tags: ['React', 'TypeScript', 'Tailwind'],
        link: 'https://new-porfolio-rosy.vercel.app/',
      },
      {
        type: 'tasks',
        date: '03 · 2025',
        title: 'タスク管理アプリ',
        copy:
          '3言語対応の生産性アプリ。タスクの作成・編集・ステータス管理と RESTful API 連携。',
        tags: ['React', 'Express', 'MongoDB'],
        link: 'https://task-management-app-iota-seven.vercel.app/',
      },
      {
        type: 'timer',
        date: '04 · 2025',
        title: 'ポモドーロ学習タイマー',
        copy: '集中・短休憩・長休憩モードを備えた、シンプルで集中できるタイマー。',
        tags: ['JavaScript', 'Responsive UI'],
        link: 'https://pomodoro-study-timer-kappa.vercel.app/',
      },
      {
        type: 'apparel',
        date: '05 · 2025',
        title: 'Seven Apparel',
        copy: 'アパレル商品の閲覧・購入フローを備えたレスポンシブ EC 体験。',
        tags: ['React', 'JavaScript', 'E-commerce'],
        link: 'https://seven-apparel-slve.vercel.app/',
      },
    ],
  },
  skills: {
    eyebrow: '05 / スキル・ツール',
    groups: [
      {
        heading: 'フロントエンド',
        lines: ['React', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS / Bootstrap'],
      },
      {
        heading: 'バックエンド',
        lines: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'],
      },
      {
        heading: 'データ・ツール',
        lines: ['MongoDB', 'MySQL', 'Git / GitHub', 'VS Code / Cursor', 'Jira'],
      },
      {
        heading: '言語',
        lines: [
          'タガログ語 — 母語',
          '英語 — 流利',
          '日本語 — JLPT N4',
          { small: 'JLPT N2 受験予定' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: '06 / お問い合わせ',
    headingLine1: '一緒に',
    headingLine2Before: '',
    headingLine2Em: '素晴らしいものをつくりましょう。',
    github: 'GitHub ↗',
    linkedin: 'LinkedIn ↗',
    footerLeft: '© 2026 JGCB',
    footerRight: '目的を持って設計・開発',
    form: {
      lead: 'メッセージを送ると、受信トレイに届きます。',
      name: 'お名前',
      namePlaceholder: 'お名前',
      email: 'メールアドレス',
      emailPlaceholder: 'you@example.com',
      message: 'メッセージ',
      messagePlaceholder: 'プロジェクトやご相談内容を入力してください…',
      submit: '送信する',
      sending: '送信中…',
      success: '送信しました。折り返しご連絡します。',
      error: '送信に失敗しました。もう一度お試しいただくか、下記メールへご連絡ください。',
      configError:
        '.env に EmailJS または VITE_WEB3FORMS_ACCESS_KEY を設定し、npm run dev を再起動してください。または下記メールへ。',
      directLabel: 'メールで連絡:',
    },
    modal: {
      successEyebrow: '送信完了',
      successTitle: 'メッセージを送信しました',
      errorEyebrow: 'エラー',
      errorTitle: '送信できませんでした',
      configEyebrow: '設定が必要です',
      configTitle: 'フォームが未設定です',
      close: 'ダイアログを閉じる',
      done: '閉じる',
      tryAgain: 'もう一度試す',
      mailDirect: 'メールで連絡する',
    },
  },
  resume: {
    label: '履歴書を見る',
    ariaLabel: '履歴書のPDFを新しいタブで開く',
    href: '/resumes/Jon_Resume_JA.pdf',
  },
};

export default ja;
