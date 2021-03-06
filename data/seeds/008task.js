exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          title: "polish hammers",
          assignedTo: "uidstring0",
          groupId: 1,
          description:
            "dust particles tend to turn into glass when struck, really hard to remove later (if they don't fly off and hit you in the eye)",
          dueDate: "2100-05-05",
         
        },
        {
          title: "insulate beds",
          assignedTo: "uidstring3",
          groupId: 1,
          description: "he tosses and strikes when he's dreaming",
          dueDate: "2100-05-05",
          
        },
        {
          title: "rake the leaves",
          assignedTo: "uidstring1",
          groupId: 2,
          description: "keep it clean",
          dueDate: "2100-05-05",
          
        },
        {
          title: "pick up leftover beers",
          assignedTo: "uidstring2",
          groupId: 2,
          description: "big party yesterday, they don't stay in control",
          dueDate: "2100-05-05",
          
        },
        {
          title: "remove lightning-struck trees",
          assignedTo: "uidstring0",
          groupId: 2,
          description: "too many beers -_-",
          dueDate: "2100-05-05",
          
        },
        {
          title: "refuel jet packs",
          assignedTo: "uidstring1",
          groupId: 3,
          description: "almost didn't make it last time",
          dueDate: "2100-05-05",
          
        },
        {
          title: "grease gears on iron suit",
          assignedTo: "uidstring3",
          groupId: 3,
          description: "the suit is making funny noises when switching states",
          dueDate: "2100-05-05",
         
        },
        {
          title: "prepare speech for Mr. America",
          assignedTo: "uidstring3",
          groupId: 4,
          description: 'this time, don\'t begin with "I have a dream" ',
          dueDate: "2100-05-05",
          
        },
        {
          title: "polish shield",
          assignedTo: "uidstring2",
          groupId: 4,
          description: "gotta lookd good for the people",
          dueDate: "2100-05-05",
          
        },
        {
          title: "iron Mr America's suit",
          assignedTo: "uidstring3",
          groupId: 4,
          description: "it's been in the suitcase for too long",
          dueDate: "2100-05-05",
          
        }
      ]);
    });
};
