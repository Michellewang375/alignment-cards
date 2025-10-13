export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];

export const cards = [
  {
    "category": "AP",
    "name": "Transparency",
    "definition": "To explain instructions, process, and decisions in a way that can be understood.",
    "human": "Being honest about motives, objectives, and operations.",
    "organizational": "Sharing information, plan, and decisions with those of given access and stakeholders.",
    "professional": "Documenting work, process, methods, conclusions, and findings openly.",
    "machine": "Output system reasoning and its process in an interpretable way to humans.",
    "failureModes": {
      "human": "Someone hiding information to another person that put the other person in a state of disadvantage.",
      "organizational": "A company using certain data or algorithm that is manipulated without notice.",
      "professional": "An expert uses models, algorithms, or data without being able to explain what it is and what it does.",
      "machine": "A machine generates code or methods that humans cannot interpret."
    }
  },
  {
    "category": "AP",
    "name": "Privacy",
    "definition": "To protect one’s information and data secure and safe.",
    "human": "Respecting boundaries and personal information of each other.",
    "organizational": "Keeping data for customers in a safe space only if consented.",
    "professional": "Encoding or creating a space where data can be kept safely.",
    "machine": "Securing information in the system and erase information in its cloud if prompted.",
    "failureModes": {
      "human": "Sharing information of another person without consent.",
      "organizational": "Selling or sharing user information without consent or acknowledgement.",
      "professional": "Failing to encrypt or keep a database safe.",
      "machine": "A machine leaks or uses data (training) without human permission."
    }
  },
  {
    "category": "AP",
    "name": "Nondiscrimination",
    "definition": "Ensuring all is treated equally without bias of any kind.",
    "human": "Treating another person different because of their background, culture, or identity.",
    "organizational": "Creating policies that prevent discrimination in the work environment.",
    "professional": "Establishing guidelines in mitigating bias.",
    "machine": "Ensuring inclusivity when training, testing, and deploying the machine.",
    "failureModes": {
      "human": "Judging a person based on their skin color or gender.",
      "organizational": "Charging a certain group of people a higher price because of their area code.",
      "professional": "Ignoring known biases in databases or guidelines.",
      "machine": "A machine cannot identify a certain minority group."
    }
  },
  {
    "category": "AP",
    "name": "Sustainability",
    "definition": "Meeting present needs without the reliance of future generations while balancing environmental, social, and economical viability.",
    "human": "Making choices that benefit the environment.",
    "organizational": "Making choices that benefit the environment and economy and saving current resources.",
    "professional": "Creating solutions that are conscious of the surrounding and setting.",
    "machine": "Minimizing computational energy usage, waste, and resources to reduce environmental impact.",
    "failureModes": {
      "human": "Wasting large amounts of unexpired food.",
      "organizational": "Exploiting a market and its stocks.",
      "professional": "Building a system that prioritizes speed through large amount of resources.",
      "machine": "A machine uses large amounts of energy to operate with proper optimization."
    }
  },
  {
    "category": "AP",
    "name": "Human Oversight",
    "definition": "Keeping something in check through supervision.",
    "human": "Seeking advice or double checking each other’s work.",
    "organizational": "Creating review systems to check work.",
    "professional": "Having human approval in an expert setting.",
    "machine": "Allowing human override and maintain a tool instead of replacement.",
    "failureModes": {
      "human": "Executing a task alone without notifying others.",
      "organizational": "Executing a task purely using machine and no human supervision.",
      "professional": "Letting a system run without testing.",
      "machine": "Causing harmful actions by ignoring human intervention."
    }
  },
  {
    "category": "AP",
    "name": "Responsibility",
    "definition": "The act of taking accountability in one's actions and owning up to the consequences it might bring.",
    "human": "Owning up to consequences and learning from mistakes.",
    "organizational": "Taking and applying feedback and take liability for their products.",
    "professional": "Maintaining integrity for their work.",
    "machine": "Following decisions, understanding and learning the harm it creates if created.",
    "failureModes": {
      "human": "Blaming one another for mistakes.",
      "organizational": "Pushing fault to the user for an accident.",
      "professional": "Ignoring misuse.",
      "machine": "Creating harm with no explanation of how and what it did in creating the damage."
    }
  },









  


  {
  "category": "AB",
  "name": "Team based work setting",
  "definition": "Hoped for: setting challenging and stretching objectives in team settings, we expect to be rewarded with equal payment or recognition. Instead, we are rewarded by achieving goals, making/hitting numbers, and rewarded for individuality.",
 "reversePrinciple": A rule could be to pay by quality of work, but this would require a measurement of what quality looks like.",
  "human": "People are expected to collaborate in overcoming barriers, but many times are instead rewarded through competition or rated based off self performance.",
  "organizational": "Organization often emphasizes on collaboration, but rewards on self performance or status instead.",
  "professional": "Professionals bring integrity and responsibility, but are often rewarded for efficiency and profitability.",
  "machine": "Hope to perform and execute through one way but instead achieves the same objective through a distorted method.",
  "failureModes": {
    "human": "People learn to say things, do, an act in a way that will only result in rewards.",
    "organizational": "Workers slowing down quality and quantity of their work since they are getting paid by hours.",
    "professional": "Standards erode as professionals chase for recognition and fame.",
    "machine": "Machines fail to learn the objective since it now focuses on the rewards and efficiency."
  }
},

{
  "category": "AB",
  "name": "Universities and education",
  "definition": "A system that hopes to help people transition themselves from students to the real world, or for new discoveries, rewarding new knowledge and experience. But much of the time, we are rewarded based on performance on standardized tests over curiosity and mastery.",
  "reversePrinciple": "Reward authentic learning by establishing more hands on and real world applicable courses than timed tests.",
  "human": "Student view test scores as success instead of their understanding.",
  "organizational": "Schools prioritize funding in over investment on education.",
  "professional": "Teachers and professors are forced to teach based on the materials on the exam instead of what student should actually learn to apply their knowledge.",
  "machine": "Algorithms aiming for results instead of the learning progress.",
  "failureModes": {
    "human": "Student lose motivation to learn as they are constantly being measured by a standard.",
    "organizational": "Limiting learning due to exam restrictions and discourages creativity.",
    "professional": "Educators become facilitators instead of inspiration.",
    "machine": "Only rewarding those that align with the standard of a system and learnings."
  }
},

{
  "category": "AB",
  "name": "Military and war",
  "definition": "A system that punishes and suppresses errors by rewarding with peace or agreement of some sort. However, these rewards are often harmful, resulting in mass damage and agreements can be forced.",
  "reversePrinciple": "Design systems that reward responsibility, taking into consideration the consequences before initiating an activity.",
  "human": "Learning to follow military rules and ethical guidelines ensures safety.",
  "organizational": "Creating structures and orders over impulsive decisions.",
  "professional": "Listening to the rest of the people and avoid strategic boldness.",
  "machine": "Performing and ensuring rules are followed and work is accurate rather than effectiveness.",
  "failureModes": {
    "human": "Acting without order and separating from the group.",
    "organizational": "Skipping small errors or misalignment to focus on the greater goal.",
    "professional": "Passing an act because of their personal goals that harms the rest of the people.",
    "machine": "Program overwrites itself to achieve a larger goal."
  }
}

];
