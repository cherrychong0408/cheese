const resume = {
  firstName: 'Cherry',
  lastName: 'Chong',
  jobTitle: 'Student from CDSJ5',
  city: 'Macau',
  postalCode: '',
  phone: '+85363118828',
  email: 'cherrychong0408@gmail.com',
  education: [
    {
      school: 'Fundación de Educación Superior San José',
      
    }
  ],
  links: [
    
    {
      label: 'CV',
      link: 'https://docs.google.com/document/d/1HUN8disBrrFZ7EEHtHj5bej3Oc3Dp2lU/edit?usp=sharing&ouid=104268299847117947108&rtpof=true&sd=true'
    }
  ],
  skills: [
    'Piano',
    'Violin',
    'Fencing',
    'long-distance running',
    'Cantonese and Mandarin （Flurent）',
    'Portuguese（Basic）',
    'Proficient using Instagram, Facebook, Wechat, E-mail, Gmail',
    'Volleyball',
    'Boxing',
    'ink sketching',
    'Basketball',
  ],
  languages: ['Cantonese and Mandarin (Fluent)', 'English (Intermediate)',"Portuguese (Basic)"],
professionalSummary: ` Hi, my name is Cherry Chong and I’m a 17 years old student in St.Joseph secondary school 5. I’m interested in long-distance running, playing the piano and violin, and I’m also passionate about chemistry. In my free time, I enjoy play several sports such as playing the 
billiard, boxing, swimming etc.
`,
  employmentHistory: [
    {
      jobTitle: 'Academic Awards and Achievements',
      employer: 'Macau',
      city: 'China',
      achievements: [
         "2016:Olympic All-Australian Mathematics Competition Silver Award",             
 "2015:Olympic All-Australian Mathematics Competition Silver Award",              
 "2014:Olympic All-Australian Mathematics Competition Bronze Award" ,
      ]
    },
    {
      jobTitle: "Non-academic awards and achievements",
      employer: 'Macau',
      city: 'China',
      achievements: [
         "2016:Macao Student Music Competition Violin (Second place)",                 "2017:Macau Youth Music Competition Piano (Bronze)",                                "2017:The 4th Hong Kong International Youth Performing Arts Festival Macau Division Piano (Bronze)",                                                                                        
"2020:Long-distance running league third leg (5th)",                                                 
"2020:Long-distance running league fourth leg (8th)",                                        
"2020:The 42nd Academic Cross-country Running Competition ranked (7th)",         
"2021:Jinsha China Macau International Tenkm Long-distance Race (Second place)",   
"2021:Galaxy Entertainment Macau International Marathon (4th)",              "2021:The 43rd Academic Cross-country Running Competition (10th)",              
"2021:Macau Spring Open 4*400 (third place)",                                 
"2021:Macau Spring Open 800 (third place)",                                   
"2021:Long-distance running league second leg (5th)",
"2023:Microsoft Excel (Office 2019)",
"2023:Microsoft Word (Office 2019)"     
        ,
      ]
    },
    {
      jobTitle: 'Community involvement',
      
      employer: 'Macau',
      city: 'China',
      achievements: [
        'Leadership Student: Recycling team leader, 2020-2024',
"Flag-raising team, 2020-2022"

        ,
      ]
    },
    
    {
      jobTitle: 'Work Experience',
      employer: 'Macau',
      city: 'China',
      achievements: [
        "Xiaoming and Xiaoji tutoring platform: part-time tutor, 2021-2022",
"Galaxy Entertainment Marathon: stuff, 2021",
  ]
      },
  ],
  photo: 'https://imgur.com/a/00nCbPJ',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()