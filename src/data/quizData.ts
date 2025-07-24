import { QuizQuestion } from '../types/quiz';

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Which tectonic plate dance movement led to the formation of the Himalayas?",
    image: "/images/Question 1.png",
    options: [
        "Divergent",
        "Convergent",
        "Transverse",
        "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Mountains often rise at the zone of impact where two continents collide. The Himalayan range formed when the Indian and the Eurasian plates crashed into each other 50 million years ago, and it still grows a half inch a year.",
    referenceUrl: "https://www.newindianexpress.com/xplore/2024/Jun/26/the-shifting-plates"
  },
  {
    id: 2,
    question: "Most of the Indonesian volcanoes are fed by which plate interaction?",
    image: "/images/Question 2.png",
    options: [
        "Divergent",
        "Convergent",
        "Transverse",
        "None of the above"
    ],
    correctAnswer: 1,
    explanation: `
Subduction occurs when a denser oceanic plate slides beneath a less dense continental plate. This process creates deep ocean trenches, volcanic mountain ranges, and can trigger earthquakes. The subducted oceanic crust eventually melts in the mantle, completing the rock cycle and affecting ocean chemistry.

This tectonic interaction is the driving force behind Indonesia’s intense volcanic activity, especially along the Sunda Arc.

<div style="overflow-x: auto; width: 100%;">
  <table style="min-width: 600px;">
    <thead style="background-color: #f3f4f6;">
      <tr>
        <th style="border: 1px solid #ccc; padding: 8px;">Characteristics</th>
        <th style="border: 1px solid #ccc; padding: 8px;">Continental Plate</th>
        <th style="border: 1px solid #ccc; padding: 8px;">Oceanic Plate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">Formation</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Formed from sediments and melting of rocks, often at convergent boundaries</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Formed at mid-ocean ridges through volcanic activity and sea-floor spreading</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">Composition</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Primarily granite (felsic)</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Primarily basalt (mafic)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">Thickness</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Less dense (2.7 g/cm³)</td>
        <td style="border: 1px solid #ccc; padding: 8px;">More dense (3 g/cm³)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">Age</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Generally older</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Generally younger</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;">Location</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Under landmasses</td>
        <td style="border: 1px solid #ccc; padding: 8px;">Under ocean</td>
      </tr>
    </tbody>
  </table>
</div>


`,
    referenceUrl: "https://communities.springernature.com/posts/indonesia-s-fiery-volcanoes-hold-information-about-earth-s-mantle"
  },
  {
    id: 3,
    question: "The Hawaii island volcanoes are a result of?",
    image: "/images/Question 3.png",
    options: [
        "Divergent",
        "Convergent",
        "Transverse",
        "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Not all earthquakes and volcanoes occur at plate boundaries. Hawaii island volcanoes are the result of a hot spot (localized areas of intense heat within the mantle that cause magma to rise to the surface independent of plate boundaries) deep in Earth’s mantle, which drives magma upward through the oceanic crust.",
    referenceUrl: "https://communities.springernature.com/posts/indonesia-s-fiery-volcanoes-hold-information-about-earth-s-mantle"
  },
  {
    id: 4,
    question: "The Sumatra Andaman 2004 Tsunami was due to which plate movement interaction?",
    image: "/images/Question 4.gif",
    options: [
        "Divergent",
        "Convergent",
        "Transverse",
        "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Stress builds when two plates move against each other. As one gives way, the resulting fault or crack triggers earthquakes. In Sumatra-Andaman 2004 earthquake, a 1450 kilometer long (900 miles) fault due to plate interaction between the India plate and Burma micro-plate, part of the larger Sunda plate unleashed a deadly magnitude 9.1 earthquake and tsunami.",
   
  }
];
