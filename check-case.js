import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'

const srcDir = './src' // cambia si tienes otra carpeta base

// Función para obtener todos los archivos js, jsx, ts, tsx
const files = fg.sync([`${srcDir}/**/*.{js,jsx,ts,tsx}`], { dot: true })

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')

  // Busca imports con @/
  const regex = /from\s+['"](@\/[^'"]+)['"]/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1].replace('@/', '')
    const fullPath = path.join(srcDir, importPath)

    // Detecta archivo o carpeta
    if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.js') && !fs.existsSync(fullPath + '.jsx')) {
      console.warn(
        `⚠️  Posible problema de mayúsculas en import:
  Archivo: ${file}
  Import: ${match[1]}`
      )
    }
  }
})

console.log('✅ Revisión terminada')
