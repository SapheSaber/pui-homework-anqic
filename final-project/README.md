# **FP4 \- Final Project Writeup**

## Part 1: Website Description

### What is the purpose of your website?
The purpose of the Personal Finance Dashboard is to help users manage their financial records effectively. The website allows users to log their spending and savings, visualize their financial data using charts, and learn about financial concepts through an interactive learning section.

### Who is the target audience?
The primary target audience includes students, young professionals, and individuals looking for an intuitive tool to manage their personal finances without relying on complex financial software.

### What information do you convey with your website?
The website conveys personal financial information such as:
- A breakdown of spending categories (e.g., Food, Housing, Education).
- Savings progress toward a defined goal.
- A timeline of savings and spending trends for weekly, monthly, and yearly views.
- Educational content to enhance financial literacy.

### How is it interesting and engaging?
The website integrates dynamic data visualizations powered by charts, an accessible and responsive design, and interactive features like editable savings goals, adding new records for saving and spending, learning section to watch videos. These elements engage users and make financial management easy and enjoyable.

## Part 2: User Interaction

How a user would interact with your website? 

### View Spending Chart:
Interaction Type: Click the year dropdown in the “Spending” section to filter data.
How to Reproduce: Click the dropdown on the Spending card and select a year.

### View Savings Progress:
Interaction Type: Modify the savings goal using the edit icon.
How to Reproduce: Click the pencil icon in the Savings card, input a new goal, and press Enter on keyboard or click outside the input field.

### Switch Timeframes:
Interaction Type: Click buttons to switch between “This Week,” “This Month,” and “This Year” for the savings timeline.
How to Reproduce: Click the respective buttons above the savings line chart to see different timeline of saving.

### Add Records:
Interaction Type: Fill out the form to log a new spending or saving record from the "Add a Record" section.
How to Reproduce: Navigate to the "Add Record" page, fill out the form, and submit.

### View Records:
Interaction Type: Go to the Records page to see the added records, and click on the two arrows to view the added records from different months of this year.
How to Reproduce: Navigate to the "View Records" page.

### Watch Videos:
Interaction Type: click on the video play icon to play the specific video, and using the arrow for each section to expand and collapse the content.
How to Reproduce: Navigate to the "Learning" page.

## Part 3: External Tool

### 1. Tool 1: Chart.js
- Why did you choose it?
  Chart.js offers a simple, responsive, and customizable way to implement data visualizations. It is lightweight and suitable for creating interactive pie and line charts.
- How you used it?
  Chart.js was used to render the pie chart for spending categories, donut chart for saving goal, and the line chart for the savings timeline.
- What does it add to your website?
  It enhances the website by providing users with clear, interactive, and aesthetically pleasing data visualizations.

### 2. Tool 2: Font Awesome
- Why did you choose it?
  Font Awesome provides a comprehensive library of icons for the webite, which is easy to implement and highly customizable.
- How do you use it?
Used for navigation icons (e.g., Dashboard, Add Record) and UI elements like the savings goal edit icon.
- What does it add to your website?
  It improves visual clarity and makes the interface more intuitive.

## Part 4: Design Iteration

Initially, the prototype was basic and lacked responsiveness. So during the development, I added responsive layouts for iPad Pro screen sizes to ensure usability across devices. Then, I replaced text buttons with icons for the navigation bar to enhance usability. I also use the tool WAVE to evaluate if my website meets the standard accessibility requirement. I noticed the errors like the lack of labels and headers for my page based on the evaluation from WAVE. I then fixed these issues. I improved contrast and accessibility by refining color choices and ensuring all images/icons had proper alt text.

## Part 5: Implementation Challenge

Adjusting Styling to Meet WAVE Accessibility Standards: Ensuring accessibility compliance required adjustments to the color palette for sufficient contrast and the addition of headers and alt-text, making the process meticulous and tedious.

Implementing JavaScript Features for Listing and Filtering Dates: Building dynamic filtering for report cards involved handling date objects, addressing edge cases, and debugging complex logic, which was essential but challenging to implement accurately.

## Part 6: Generative AI Use and Reflection

### Tools Used:
Used extensively for coding assistance, debugging JavaScript logic, and understanding complex implementations like date-based filtering and chart updates.

### Usage Experiences by Project Aspects

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used/did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Tool1 | Usage | No | No | No | Yes | Yes |
| Tool1 | Productivity | 1 | 1 | 1 | 5 | 6 |


### Usage Reflection

> Impact on your design and plan 
- **It matched my expectations and plan in FP2 in that**:
  - **ChatGPT**: Provided effective JavaScript filtering methods(functions) for “This Week,” “This Month,” and “This Year,” aligning with my plan to implement chart filters and organize records by month. 
  - **ChatGPT**: Met expectations for debugging by interpreting console errors and suggesting solutions, such as checking element existence before invoking methods, the chart not displaying correct data etc.

- **It did not match my expectations and plan in FP2 in that**:
  - **ChatGPT**: the overall website design, styling, and layout of the components. 

- **GenAI tool did influence my final design and implementation plan because**:
  - **ChatGPT**: Streamlined the development of date-based filtering and debugging, shaping my approach and reducing development time. 
  - **ChatGPT**: Helped identify and resolve DOM-related and asynchronous code issues.

> Use patterns
* I accepted the generations when:
  1. ChatGPT: This tool once suggested adding a check for whether the HTML elements exist before accessing their IDs or calling related functions. For example, when my console.log showed errors due to calling functions on null elements (because the user wasn’t on the record page yet), ChatGPT recommended using the document.addEventListener('DOMContentLoaded', function () { ... }) method or a conditional check like if (document.getElementById('recordPageElement')) { ... }. I adjusted my code to include this suggestion because it helped prevent runtime errors and improved the app's stability.

  2. ChatGPT: Provided clear examples of how to refactor stored dates (e.g., "11-12-2024") to align with specific time-based filters like “This Week” or “This Month.” For instance, it suggested using JavaScript’s Date object methods, such as setDate and getDay, to calculate the start and end dates for the week dynamically. I accepted this approach because it streamlined my date filtering logic, allowing the chart’s data to adapt seamlessly to the user’s selected time frame.
    
* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: Once suggested an overly simplistic approach to handling date filtering for charts, which assumed all records would neatly fall into distinct timeframes without overlapping. While this worked for straightforward cases, it didn’t handle edge cases like records spanning two months or weeks. I modified the suggested logic by adding additional checks to account for these scenarios, ensuring accurate filtering for complex datasets.
  
  2. ChatGPT: Suggested using specific methods for manipulating dates, like directly parsing strings using Date.parse(). While the approach worked initially, I noticed inconsistencies with certain date formats in my JSON data. I rejected the suggestion and replaced it with a safer alternative using new Date() with a custom parsing function to ensure consistent handling of all date formats across the app.

> Pros and cons of using GenAI tools
* Pros:

1. ChatGPT: Accelerated debugging by helping me understand console errors and resolve them faster.
2. ChatGPT: Simplified the implementation of advanced features like filtering and dynamic chart updates.
3. ChatGPT: Enhanced my understanding of JavaScript libraries and methods, acting as a tutor outside the classroom.
* Cons:

1. ChatGPT: Generated code often required adjustments to match my specific project needs, demanding additional effort to refine and integrate.
2. ChatGPT: Couldn’t provide end-to-end solutions, requiring manual coding and design decisions for seamless integration.


### Usage Log

Prompts:

Prompt: How can I ensure my dashboard charts update correctly after a new record is added?

Prompt: How do I listen for changes in localStorage to update the chart dynamically?

Prompt: I  realize that if I let's say add a new record to the existing card, but the Dashboard chart is not updating this feature: for example, I recorded Nov 14th spending -10 for food. Then later I recorded another one on Nov 14th clothing -33 but the dashboard is not displaying this feature. I think maybe the function forgot to load all the data from the localStorage ? or maybe a way to detect changes made to the exiting card

Prompt: I want to implement a feature that fetches the current date. Then it filters the data based on the data that aligns with the current week of the current date, and the same for the month: so if my current date is Nov 20 then I filter the week of only displaying those data aligned with that week where Nov 20 is and also filter the month with current month Nov.

1. [ChatGPT]([https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq](https://chatgpt.com/share/674497e0-e060-800a-bab8-659b5f9cd811)) 


# **FP3 \- Final Project Check-in**

# FP2 - Evaluation of the Final project
## Project Description
The personal finance website is designed to help users track and manage their savings, spending, and net worth with ease. It includes interactive tools to visualize financial data and offers educational resources on fundamental personal finance concepts such as budgeting, saving, and credit. My goal is to empower users to make informed financial decisions and cultivate healthy financial habits. The platform is optimized for both desktops and iPads, making it accessible and user-friendly for a wide audience.


## High-Fi Prototypes

### *Prototype 1*
![Dashboard Page](imgs/dashboard.png)
*Description:*
The Dashboard Overview provides a clean, organized view of users’ financial data, including summaries of spending, savings, and net worth. Users can quickly assess their financial health using color-coded indicators and easy-to-read charts.

### *Prototype 2*
![Record Saving and Spending page](imgs/record.png)
![Record Saving and Spending page2](imgs/record2.png)
*Description:*
This prototype focuses on the Add New Record feature, enabling users to log their financial transactions with options to categorize each entry and set dates. The interface is streamlined to support quick and accurate data entry.

## Usability Test
The type of testing I conducted is the Thinking-Outloud Testing, where users need to verbalize their thoughts while completing tasks, providing insights into usability and immediate reactions. During the usability testing, I received valuable feedback on functionality and user experience.  Users appreciated the simple, clean layout of the dashboard, with its visually engaging and accessible design. They specifically liked how the Add Record feature was easy to find and navigate. Based on their feedback, I removed the redundant “Choose Date” button to simplify the interaction, enabling direct date selection through the date field.

A key suggestion was to add a net worth indicator on each record card, which I redesigned to provide immediate visual feedback on whether the net worth is positive or negative. This color-coded indicator helps users quickly assess their financial status per transaction, enhancing usability. Additionally, users suggested a custom category option for both savings and spending. While I found this feature beneficial, it would add complexity to the database structure and the backend, so I decided to place it in a “nice-to-have” list for future updates.

Other feedback included ideas for adding a “currency” tab to change and convert the recorded currency and a login page for each user. This wasn’t part of my initial plan, but it was a good feature to have to give users more freedom to customize the webpage. I am considering those two feedbacks for future iterations, but for now due to the time constrain and the complexity in implementing these, I put those two features in the "nice to have" list. 

## Updated Designs
![Record Saving and Spending page2](imgs/update1.png)
Record Cars Enhancements: Integrated a color-coded net worth indicator on each record card, offering users a quick visual summary of positive or negative net worth.
![Record Saving and Spending page2](imgs/update2.png)
![Record Saving and Spending page for calendar](imgs/update_calendar.png)
Streamlined Date Selection: Removed the redundant “Choose Date” button, simplifying date input by enabling users to click directly on the date field, and also providing the "Type" selection for Savings.

## Feedback Summary

During the lab session, I received valuable feedback on ways to improve the usability and clarity of my personal finance website. One of the primary suggestions was to remove the dots on the calendar if they lack a clear function, as users found them visually confusing without an explanation. Additionally, users suggested changing the term “Saving” to “Income” for greater clarity in labeling, making it more intuitive for users to understand the sources of their financial entries. But I decided not to change the "Saving" title because I am planning to allow user to choose types of "saving" which could be cover alot of types user save money. 

For the Record Card feature, users emphasized the need for better visual hierarchy to distinguish between the title and details of each record. They recommended a more dramatic visual presentation of the Record Card, especially by making the final daily record or summary more prominent and visible. This feedback also included suggestions to add indicators beyond just color to signify positive or negative net worth changes. For instance, adding a background color to the net change section would help draw attention, while renaming “net worth” to “net change” or consolidating it into a single large number with a +/- sign would make it more intuitive and visible to users at a glance.

Another small but helpful suggestion was to change “Datepicker” to simply “Date” to simplify the language and avoid potential confusion. By implementing these changes, I aim to create a clearer and more visually engaging interface that better serves the needs of users. This feedback highlighted the importance of consistent language, visual hierarchy, and intuitive labeling in designing an effective personal finance tool.

## Milestones

This plan outlines the weekly milestones for implementing and refining the personal finance website project, with a target completion date of Dec 6.

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Complete the basic structure for the remaining three pages, ensuring all menu items are functional and the navigation is seamless.

- [ ] Week 11 Nov 11 \- Nov 15:
  - [ ]  Implement the Record page interface, focusing on the layout and general structure.
  - [ ]  Begin setting up form fields for user input on the Record page, allowing the entry of financial data.
      
- [ ] Week 12 Nov 18 \- Nov 22:
  - [ ] Finalize the Record page, including the second-page form interface.
  - [ ] Ensure Record page functionality works as expected, allowing users to fill in forms for both spending and saving categories.
  - [ ] Display submitted records on the main Record page for a user-friendly summary of their entries.
          
- [ ] Week 13 Nov 25 \- Nov 29:
- [ ] implemented different charts for the dahsboard page
- [ ] collect information that will be displayed on the "Learning" page & complete the Leanring page
- [ ] Thanksgiving (adjust schedule as needed for holiday)
        
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due - Incorporate all updates, finalize the project report, and document the results of the final user testing.

### *Libraries and Other Components*

- Chart.js: To create interactive charts for financial data visualization.
- Moment.js: For easy handling and formatting of date data in transaction records.
- jQuery: For simplified DOM manipulation, particularly in form elements.


## Generative AI Use Plan

To enhance implementation, I plan to use Generative AI tools such as ChatGPT to support various aspects of the project. ChatGPT will be particularly useful for understanding and implementing the JavaScript libraries I’ve chosen, especially Chart.js for data visualizations. ChatGPT can provide code snippets, explain complex concepts, and troubleshoot common issues with library integration, which will be helpful when trying to make the charts respond to user-inputted data.

Additionally, I will use ChatGPT for crafting user-friendly error messages and refining the language on instructional sections of the Learning page. For instance, it can help with phrasing tips on budgeting or saving, ensuring the language is clear and accessible.

To maintain transparency and responsible AI use, I will add comments to the code to cite lines or segments generated by ChatGPT or other Generative AI tools. This will indicate which parts of the code are AI-assisted, ensuring clear documentation for future reference and accountability.

### *Tool Use*
*ChatGPT*
- I will use it for understanding and integrating libraries (e.g., Chart.js) by asking for example snippets or troubleshooting integration issues. It will also assist with crafting accessible instructional text for the Learning page.
- I will not use it for creating the HTML and CSS structure of the pages or implementing foundational JavaScript features like adding notes and user input forms, as these aspects are intended to demonstrate my understanding of lecture material.

### *Responsible Use*
I will  cite lines of code generated by ChatGPT with comments in my files to indicate AI assistance, providing transparency and clear documentation. For content, AI-generated instructional text will be edited for clarity, accuracy, and suitability for the intended user base.

# **FP1 \- Proposal for Critique**
## **Idea 1: Personal Website**
![Sketch 1](imgs/idea1_sketch.jpg)
### Purpose
The goal of the personal website is to create an engaging online portfolio that showcases my skills, projects, and interests. It will serve as a digital introduction to potential employers or anyone interested in learning more about me, providing easy access to my resume, portfolio, and contact information.

### How the Design Will Be Interactive and Engaging:
* Scroll Animations: Smooth transitions and animations engage users as they explore different sections.
* Project Portfolio: Users can click on project cards to see more details.
* Light/Dark Mode Toggle: Allows users to switch between light and dark themes.

### How the Design Will Be Accessible:
* High Contrast Theme Options: Improves readability for all users, with a light/dark mode toggle.
* Keyboard Accessible Navigation: Allows users to navigate the site using only a keyboard.
* Alt Text for Project Images: Provides descriptions for all visual elements in the portfolio.

### Information & Content:
* Home Page: Brief introduction with animations for an engaging first impression.
* About Me: A section about your background, skills, and personal interests.
* Project Detail & Project Section: Includes project cards with descriptions, images, and demo links.
* Resume Download: A downloadable resume for employers or collaborators.



## **Idea 2: Personal Finance Website**
![Sketch 2](imgs/idea2_sketch.jpg)
### Purpose
The goal of the personal finance website is to help users track and manage their savings and spending through interactive tools. It will also offer beginner-friendly educational resources on essential personal finance concepts, such as budgeting, saving, and credit, empowering users to make better financial decisions and build healthy financial habits.

### How the Design Will Be Interactive and Engaging:
* Dashboard with Charts: Use D3.js or Chart.js to visualize spending, savings, and goals.
Input Forms for Spending and Saving: Users can log their transactions with categories (like food, rent, income).
* Savings Tracker: A dynamic progress bar shows how close users are to reaching their savings goals.
* Expandable Learning Cards: Dropdowns provide users with more information on key finance concepts (like budgeting or credit scores).

### How the Design Will Be Accessible:
* Responsive Layouts: Ensure usability on both desktop and mobile devices.
* Alt Text for Icons and Graphs: Supports users with visual impairments.
* Form Labels: Forms will include semantic HTML for accessibility.

### Information & Content:
* Dashboard: Displays savings and spending overviews with visual charts.
* Record Section: Input forms for tracking income, savings, and spending.
* Learning Section: Offers educational resources about budgeting, saving, investing, and credit scores.



## **Idea 3: Ice Cream in Pittsburgh Website**
![Sketch 3](imgs/idea3_sketch.jpg)
### Purpose
The goal of the Ice Cream in Pittsburgh website is to provide users with a comprehensive guide to the best ice cream shops in the city. It will feature shop locations, descriptions, and user-friendly ratings based on Google reviews, helping visitors and locals discover new places to enjoy ice cream in Pittsburgh. It also provides receipts on how to make ice-cream at home. 

### How the Design Will Be Interactive and Engaging:
* Google Maps Integration: An embedded map shows the location of ice cream shops in Pittsburgh.
* Dynamic Content: Clicking on shop cards navigates to detail pages with more information about each shop (like reviews and location).
* Rating System: Incorporate star ratings pulled from Google Reviews or display mock ratings.
* Change Ice-cream feature: A fun interactive part that allows users to change the image displayed on the home page, making the website fun.

### How the Design Will Be Accessible:
* High Contrast Text: Ensures readability for all users.
* Alt Text for Images: Provides context for visually impaired users.
* Text Alternatives for Maps: Lists the shops and their locations alongside the map view for accessibility.

### Information & Content
* Home Page: Overview of top ice cream shops with interactive cards.
* Shop Pages: Includes name, description, images or videos, and embedded Google Maps for directions.
* Make Your Own Ice Cream: A step-by-step guide to making ice cream at home.
* User Reviews Section: Display ratings and reviews from users or Google.
* Responsive Layouts: having the website accessible on both desktop and iPad screen sizes.

## Feedback Summary
The portfolio site was praised for its dynamic feature of text appearing as the user scrolls, and the addition of a light and dark mode was recognized as a good way to showcase coding skills. For the personal finance site, peers appreciated the sidebar for its navigation and organizational clarity. They also suggested incorporating video tutorials to enhance its educational value and highlighted that the use of visuals would make complex information more digestible. For the ice-cream shop site, the interactive homepage feature, which changes images based on flavors, was well-received. However, peers noted that including recipes seemed somewhat out of place. They also recommended embedding Google reviews for each shop and suggested adding a tracker to show which pages the user has visited.

## Feedback Digestion
After reviewing the feedback, I have decided to proceed with the personal finance website, as it aligns most closely with my interests and goals. The positive feedback on the sidebar navigation reinforced the idea of maintaining a clear information structure, which will remain a key design element. I will also incorporate video tutorials, as suggested by my peers, to make the site more educational and engaging for users. Additionally, I’ll also consider the feedback of focusing on using visuals to present financial information in a more accessible and less overwhelming way.


