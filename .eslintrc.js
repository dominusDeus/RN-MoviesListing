module.exports = {
  root: true,
  'eslint.workingDirectories': [
    {directory: './client/', changeProcessCWD: true},
    {directory: './server/', changeProcessCWD: true},
  ],
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
