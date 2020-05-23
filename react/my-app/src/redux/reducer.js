const initialState = {
    questions: [
        {
            id: 0,
            date: '2020.05.23',
            tags: ['tag1', 'tage2', 'tag3'],
            title: 'how much is the fish',
            text: "what is the question",
            approved: true,
            user: 'user234'
        }
    ],
    tags: [
        {
            name: 'tag1',
            color: 'red'
        },
        {
            name: 'tag2',
            color: 'blue'
        },
        {
            name: 'tag1',
            color: 'yellor'
        },
    ]
}

export default function(state = initialState, action){
    switch (action.type) {
      case 'add': {
        const otherState = {...state}
          return otherState
      }

  
  
      default: return state
    }
      
    }