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
