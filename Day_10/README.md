What I learnt on 03-May-23

# SET
<p>Set is a collection of elements. Set can only contains unique elemens, Let's see how to create a set in the section below.</p>

## Creating an empty set

     const companies = new Set()
     console.log(companies);

     Set(0) {}

## Creating set from array

     const languages = [
       'English',
       'Finnish',
       'English',
       'French',
       'Spanish',
       'English',
       'French',
     ]

     const setOfLanguages = new Set(languages)
     console.log(setOfLanguages)

     Set(4) {"English", "Finnish", "French", "Spanish"}

<p>Set is an iterable object and we can iterate through each elements.</p>

      const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
     ]

     const setOfLanguages = new Set(languages)

     for (const language of setOfLanguages) {
             console.log(language)
     }

       English
       Finnish
       French
       Spanish

## Adding an element to a set

     const companies = new Set() // creating an empty set
     console.log(companies.size) // 0

     companies.add('Google') // add element to the set
     companies.add('Facebook')
     companies.add('Amazon')
     companies.add('Oracle')
     companies.add('Microsoft')
     console.log(companies.size) // 5 elements in the set
     console.log(companies)

     Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

<p>We can also use loop to add element to a set.</p>

       const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
       setOfCompanies = new Set()
       for (const company of companies) {
         setOfCompanies.add(company)
     }

     Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

## Deleting an element a set
<p>We can delete an element from a set using a delete method.</p>

     console.log(companies.delete('Google'))
     console.log(companies.size) // 4 elements left in the set

## Checking an element in the set
<p>The has method can help to know if a certain element exists in a set.</p>

     console.log(companies.has('Apple')) // false
     console.log(companies.has('Facebook')) // true

## Clearing the set
<p>It removes all the elements from a set.</p>

     companies.clear()
     console.log(companies)

     Set(0) {}

# See the example below to learn how to use set.

     const languages = [
       'English',
       'Finnish',
       'English',
       'French',
       'Spanish',
       'English',
       'French',
     ]
     const langSet = new Set(languages)
     console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
     console.log(langSet.size) // 4

     const counts = []
     const count = {}

     for (const l of langSet) {
       const filteredLang = languages.filter((lng) => lng === l)
       console.log(filteredLang) // ["English", "English", "English"]
       counts.push({ lang: l, count: filteredLang.length })
     }
     console.log(counts)


     [
       { lang: 'English', count: 3 },
       { lang: 'Finnish', count: 1 },
       { lang: 'French', count: 2 },
       { lang: 'Spanish', count: 1 },
     ]  

<p>Other use case of set. For instance to count unique item in an array.</p>

     const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
     const setOfNumbers = new Set(numbers)

     console.log(setOfNumbers)

     Set(5) {5, 3, 2, 9, 4}