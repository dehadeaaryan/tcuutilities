import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Row({sym}) {
  let symbol = sym[0]
  let symbolName = sym[1]
  return (
    <div className={styles.row} onClick={() => {navigator.clipboard.writeText(symbol); alert("Symbol Copied: " + symbol)
    }}>
      <p>{symbol + " -> " + symbolName}</p>
    </div>
  )
}

export default function MathSymbols() {

  let symbolsList = [
    ["∅", "Empty"],
    ["∈", "Element of"],
    ["∉", "Not An Element Of"],
    ["∩", "Intersection"],
    ["∪", "Union"],
    [" ⊆", "Subset"],
    ["⊂", "Proper Subset"],
    ["⊄", "Not a Subset"],
    ["≠", "Not Equal"],
    ["≈", "Approximate"],
    ["≥", "Greater or Equal"],
    ["≤", "Lesser or Equal"],
    ["±", "Plus Minus"],
    ["√", "Root"],
    ["∠", "Angle"],
    ["π", "Pi"],
    ["⌊x⌋", "Floor Brackets"],
    ["∘", "Composition"],
    ["∑", "Sigma"],
    ["∏", "Product"],
    ["μ", "Mean"],
    ["σ", "Standard Deviation"],

  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Math Symbols</title>
        <meta name="description" content="Web app to copy math symbols." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Math Symbols for <a href="https://tcu.edu">Frogs</a>
        </h1>

        <br /><br />

        <Link href="/">
          <a>&larr;</a>
        </Link>

        <br /><br />

        <div className={styles.table}>
          {
            symbolsList.map((symbol) => (
              <Row sym = {symbol} />
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>This application is not owned or funded by TCU</p>
      </footer>
    </div>
  )
}
