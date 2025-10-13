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
}

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
  }



  {
"category": "AP",
"name": "Nondiscrimation",
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
    }

{
"category": "AP",
"name": "Sustainability",
"definition": Meeting present needs without the reliance of future generations while balancing environmental, social, and economical viability.",
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
    }
    
];
