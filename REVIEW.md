# Review for Kati's malagasy app

_If you have any questions regarding the review, please come see me._

To explain the grading for each individual component, please see comments in those files.
General Issues:

1. Refactoring should replace the old code, not be alongside it
2. creating the whole component as children and often duplicating it.
   - I know we said that having controlled components is desirable but this takes it a step too far, because now the components don't do anything anymore. You have to find a balance.
3. No console logs in production code
4. Use of Storybook: Storybook is designed to show the component you built elsewhere in isolation, to test it, show different variants and so on. It is not designed to be where you write the component.

## Components

- Next button 4/5
- Action button 2/5 When you want to refactor (as in improve) code, replace the old version with the better one instead of having the old version plus the refactored one. Two reasons for that: We don't want doplicate code and we especially don't want obslete code in our codebase. Refactoring is good, but should not leave any waste. Naming the component RefactoringX is also very confusing (Is it still being refactored? Should I still use the old one?). For the next time, whenever you refactor something, just replace the old stuff with the new one in the same file.
- Tool buttons 3/5
- Language Switcher 0/5 not implemented
- Section Heading 0/5 I can't give you any points because you built the wrong component, the section heading is the text on top of the lists, not a list item (If this misunderstanding was due to our instructions, please tell me)
- List item 3/5 The component itself is fine but neither is its story using it nor does it show the correct thing, instead it shows the whole list, rather than one list item.
- List 4/5 Component is good, see general issue 4
- Textarea 5/5 correct use of component and storybook, minor design issues. This is a good template that you can use to build storybook in the future.
- User stories: N/A
- Github workflow 9/10 pull request follow correct structure, descriptions should be longer/ more telling.
- No spelling mistakes: 5/5
- Clickup workflow: 3/3
- Use of screen navigation 0/5 N/A
- React Context: 5/5
- Reducer 5/5
- Clean Code: 3/10 Should have removed storybook examples; see general issues.

Total 50/123 => 41%

I noticed that time and a better understanding of how storybook should be used were major limitations for you during this project. The first one will certainly get better with practice, so don't worry about that one :)
To improve understanding, this project shows how important asking questions is. If there is something left unclear, ask, even in a graded project. It will always be worth it. Ask, ask, ask questions, I promise everything under <100 questions a day will not annoy anybody. I hppe this feedback will be helpful for you!
