module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended', // 리액트 추천 룰셋
        'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
        'plugin:prettier/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // 최신 문법 지원
        sourceType:  'module',  // 모듈 시스템 사용시
        ecmaFeatures:  {
            jsx:  true,  // 리액트의 JSX 파싱을 위해서
        },
    },
    rules:  {
        'semi': 'off',
        'no-console': 'off',
        'react/react-in-jsx-scope': 'off',
        'quotes': ['error', 'single'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'react/prop-types': 'off',
        'react/no-array-index-key': 0,
        'react/jsx-one-expression-per-line': 0,
        'react-hooks/exhaustive-deps': 0,
        'no-unused-vars': 1, //  0 = off, 1 = warn, 2 = error
        'no-mixed-spaces-and-tabs': 0,
        'jsx-a11y/alt-text': [0],
        'jsx-a11y/img-redundant-alt': 0,
        'array-callback-return': 0,
        'jsx-a11y/anchor-is-valid': 0,
    },
    settings:  {
        react:  {
            version:  'detect',  // eslint-plugin-react가 자동 리액트버전탐지
        },
    }
};