import Head from 'next/head'
import styles from '../styles/Stats.module.css'
import Link from 'next/link'
import { VictoryBoxPlot } from 'victory'
import React from 'react'

function Boxplot({values}) {
    return (
        <VictoryBoxPlot 
        horizontal
        labels={true}
        data={values}
        animate={{
        duration: 500,
        onLoad: { duration: 1000 }
        }}
        />
    )
}

export default function Statistics() {

  var quantitativeValues = ""
  var quantitativeValuesArray = []

  return (
    <div className={styles.container}>
      <Head>
        <title>Math Symbols</title>
        <meta name="description" content="Web app to copy math symbols." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Statistics for <a href="https://tcu.edu">Frogs</a>
        </h1>

        <br /><br />

        <Link href="/">
          <a>&larr;</a>
        </Link>

        <br /><br />
        
        <div>
            <h2>Quantitative</h2>
            <div className={styles.section}>
              <input id='quantitativeTB' type="text" placeholder="Enter values separated by commas" />
              <button onClick={
                  () => {
                      quantitativeValues = document.getElementById("quantitativeTB").value
                      quantitativeValuesArray = quantitativeValues.split(",")
                      for (let i = 0; i < quantitativeValuesArray.length; i++) {
                          quantitativeValuesArray[i] = parseFloat(quantitativeValuesArray[i])
                      }
                      quantitativeValuesArray = [ {x : 1, y : quantitativeValuesArray} ]
                      React.useState(quantitativeValuesArray)
                  }
              }>Submit</button>
                <Boxplot values={quantitativeValuesArray} />
            </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>This application is not owned or funded by TCU</p>
      </footer>
    </div>
  )
}
