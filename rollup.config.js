module.exports = {
  input: 'app.js',
  output: {
    dir: 'dist/',
	format: 'esm',
	sourcemap: true,
	entryFileNames: '[name]-[hash].js'
  }
};
