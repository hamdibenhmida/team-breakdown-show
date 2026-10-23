// Seven connected decisions, four defensible choices each. One best decision under the stated constraints.
// Keys are visible in this client-side prototype: suitable for a classroom game, not a proctored exam.
window.SHOW = {
  name:'THE TEAM BREAKDOWN',
  brand:'THE ULTIMATE SOFT SKILLS SHOW',
  intro:'A two-million-euro deal. A divided team. Fifteen minutes to rebuild trust.',
  questions:[
    {
      act:'01 / 07',time:'09:45',title:'The Argument',slug:'THE ARGUMENT',kind:'video',points:10,duration:75,
      photo:'assets/conflict.jpg',skill:'Leadership · Active listening · Prioritization',
      setup:'Olivia wants to promise a 35% improvement. Ethan says that figure is not representative. The two refuse to share the same stage. The client arrives in fifteen minutes. You are the project lead, with authority to coordinate—but not to falsify results.',
      prompt:'What is your first move?',
      answers:[
        {id:'A',text:'Meet each leader separately, then combine the strongest parts of both proposals.',why:'This may reduce emotion, but there is too little time for two separate negotiations and “combining” incompatible claims does not verify the facts.'},
        {id:'B',text:'Run a 90-second joint huddle: name the shared objective, define the disputed fact, and assign one verification owner.',why:'This creates a common objective, narrows the dispute to a testable question, and avoids choosing sides before checking evidence.'},
        {id:'C',text:'Ask the CEO to decide which leader has final authority over the slide deck.',why:'Clear authority can break a deadlock, but it does not solve the accuracy problem or restore the working relationship.'},
        {id:'D',text:'Give Ethan responsibility for technical questions while Olivia keeps ownership of the sales slides.',why:'Role clarity is useful, but this arrangement leaves the potentially misleading claim in the presentation.'}
      ],correct:'B',
      good:'The room agrees on one objective: protect the client relationship with evidence. Nina is asked to verify the disputed figure.',
      bad:'The argument pauses, but nobody has agreed how to evaluate the evidence. The team remains divided.',
      insight:'Leadership under pressure is about creating a shared decision process—not simply exercising authority.'
    },
    {
      act:'02 / 07',time:'09:47',title:'The Blame Game',slug:'THE BLAME GAME',kind:'audio-olivia',points:15,duration:80,
      photo:'assets/olivia.jpg',skill:'Conflict resolution · Emotional regulation · Psychological safety',
      setup:'Olivia says Ethan sabotaged the deal by waiting until the last minute. Ethan says Olivia ignored earlier warnings. Their teammates stop contributing. You have only four minutes before the first investor preparation call.',
      prompt:'Which intervention best reduces blame without avoiding accountability?',
      answers:[
        {id:'A',text:'Ask both leaders to apologize publicly, then continue with the original agenda.',why:'An apology may repair tone, but forced apologies can be superficial and do not establish what actually happened.'},
        {id:'B',text:'Move the discussion to a private chat, leaving the wider team to finalize the slides.',why:'Privacy may prevent escalation, but the wider team still lacks a verified direction and an accountable owner.'},
        {id:'C',text:'Separate observed facts from interpretations, hear each side briefly, and agree on one evidence-based action with named owners.',why:'This addresses emotions without rewarding accusations, clarifies the task, and makes accountability specific and fair.'},
        {id:'D',text:'Put both leaders on the same task and require them to reach agreement before the client call.',why:'Joint ownership may help, but an open-ended mandate risks another deadlock when a decision and evidence are urgently needed.'}
      ],correct:'C',
      good:'Blame becomes a solvable issue. The team agrees to examine Nina’s report before changing client-facing claims.',
      bad:'The team complies outwardly, but the accusation remains unresolved and people grow more cautious about speaking up.',
      insight:'Healthy conflict resolution separates evidence, emotion and responsibility.'
    },
    {
      act:'03 / 07',time:'09:49',title:'The Hidden Evidence',slug:'THE HIDDEN EVIDENCE',kind:'evidence',points:15,duration:90,
      photo:'assets/screen_evidence.jpg',skill:'Critical thinking · Ethical communication · Data literacy',
      setup:'Nina sends two verified reports. A controlled test of 20 scripted workflows shows a 35% speed improvement. A separate real-world pilot of 400 workflows shows an 8% median improvement. The client wants to know what performance to expect in normal operations.',
      prompt:'How should the results appear in the pitch?',
      answers:[
        {id:'A',text:'Lead with +35%, label it clearly as a controlled-test result, and move the pilot figures into an appendix.',why:'The label is accurate, but the emphasis does not match the client’s question about normal operations and risks anchoring expectations too high.'},
        {id:'B',text:'Present an 8–35% improvement range and explain that performance depends on the environment.',why:'The numbers describe different methods and statistics; treating them as a single expected range is not justified.'},
        {id:'C',text:'Lead with the 8% pilot median, explain its limits, and separately show 35% as a controlled-test result rather than a promise.',why:'The pilot is more relevant to normal operating conditions. Distinguishing its median from the controlled figure keeps both findings in context.'},
        {id:'D',text:'Remove both figures and focus on qualitative product benefits until more research is completed.',why:'Further validation may be warranted, but discarding available, properly qualified evidence is unnecessarily evasive.'}
      ],correct:'C',
      good:'The numbers stop fighting each other. The team agrees to say what the evidence actually supports.',
      bad:'The client narrative remains confusing. A higher headline figure threatens to overshadow the more relevant pilot evidence.',
      insight:'Critical thinking is not choosing the most impressive number—it is choosing evidence fit for the question.'
    },
    {
      act:'04 / 07',time:'09:51',title:'The Unheard Voice',slug:'THE UNHEARD VOICE',kind:'audio-nina',points:15,duration:75,
      photo:'assets/nina.jpg',skill:'Empathy · Active listening · Inclusive leadership',
      setup:'Nina reveals that she emailed the updated report on Friday, but the thread received no reply. She also tried to raise it yesterday and was interrupted. Olivia now feels publicly blamed. Ethan wants the email used as proof that he was right.',
      prompt:'How should you handle Nina’s disclosure?',
      answers:[
        {id:'A',text:'Thank Nina privately, then tell the CEO to review the communication failure after the client meeting.',why:'A private thanks recognizes Nina, but the team still needs to act on the verified evidence and establish a fair immediate process.'},
        {id:'B',text:'Show the email timestamps to the team, identify who missed the warning, and demand immediate accountability.',why:'The timeline matters, but a public fault-finding exercise risks turning a corrective moment into punishment before causes are understood.'},
        {id:'C',text:'Ask Nina to present the findings herself, making her the visible owner of the revised claim.',why:'This gives her a voice but unfairly transfers responsibility for the group’s decisions onto a junior employee.'},
        {id:'D',text:'Thank Nina openly, verify the message history without blame, give her a defined role in the revision, and commit to a post-meeting process review.',why:'This validates the contribution, protects psychological safety, uses the information immediately and preserves appropriate accountability.'}
      ],correct:'D',
      good:'Nina helps update the slide. Olivia hears a non-accusatory explanation and agrees to revise the headline.',
      bad:'Nina’s disclosure increases tension. The team starts focusing on who is guilty rather than how to communicate accurately.',
      insight:'Inclusive leadership turns difficult information into learning without turning people into scapegoats.'
    },
    {
      act:'05 / 07',time:'09:53',title:'The Impossible Compromise',slug:'THE IMPOSSIBLE COMPROMISE',kind:'revision',points:15,duration:80,
      photo:'assets/conference.jpg',skill:'Negotiation · Collaboration · Creative problem-solving',
      setup:'The claim is corrected, but Olivia worries the less dramatic result will weaken the pitch. Ethan worries any future guarantee will repeat the mistake. Both agree the demo can be shown today, but a signed performance commitment would be premature.',
      prompt:'What agreement should you ask the team to build?',
      answers:[
        {id:'A',text:'Keep the ambitious 35% headline, but add a small-print note that results may vary.',why:'A disclaimer does not solve the mismatch between a best-case controlled test and what the client is being invited to expect.'},
        {id:'B',text:'Present the verified pilot result, demonstrate real workflows, and offer a jointly defined validation phase before any performance commitment.',why:'It creates commercial value without overpromising, gives Ethan technical credibility and Olivia a constructive path to a deal.'},
        {id:'C',text:'Reduce the sales target to an 8% guaranteed improvement and ask Ethan to sign off.',why:'The pilot median is not a guarantee for a new client. Converting it into one creates a fresh overpromise.'},
        {id:'D',text:'Split the presentation evenly: Olivia presents upside potential; Ethan independently presents all limitations.',why:'This sounds balanced, but a divided narrative can confuse the client and leave the team visibly unaligned.'}
      ],correct:'B',
      good:'The team builds a single story: verified outcomes now, measurable validation next, and shared ownership of the proposal.',
      bad:'The revised deck still sends mixed signals. Olivia and Ethan remain uneasy about what will be promised.',
      insight:'Good negotiation expands the options instead of forcing one person to surrender.'
    },
    {
      act:'06 / 07',time:'09:55',title:'The Client Calls',slug:'THE CLIENT CALLS',kind:'audio-client',points:15,duration:80,
      photo:'assets/conference.jpg',skill:'Transparent communication · Confidence · Stakeholder management',
      setup:'ASTER Retail calls early. Its procurement director asks whether the 35% claim applies to their operations. The CEO wants you to sound confident but says not to disclose internal conflict. The client expects a concrete answer now.',
      prompt:'Which response best maintains credibility?',
      answers:[
        {id:'A',text:'Explain the 35% figure came from controlled tests; share the 8% pilot median and propose a client-specific validation plan with clear next steps.',why:'This directly answers the question with evidence, distinguishes methods and offers an actionable path without exposing irrelevant internal disputes.'},
        {id:'B',text:'Say 35% is possible under ideal conditions, and promise to share detailed methodology after the meeting.',why:'It avoids a literal falsehood, but does not answer the client’s expectation for normal operations and risks cherry-picking.'},
        {id:'C',text:'Say the original presentation was preliminary and offer to move the meeting until all figures have been rechecked.',why:'Extra verification can be prudent, but the two studies have already been checked; postponing without a clear need sacrifices a valuable opportunity.'},
        {id:'D',text:'Ask the client to focus on the product demo and keep statistical performance questions for a later technical session.',why:'The client asked a material question. Deflecting it can undermine trust even if the demo itself is strong.'}
      ],correct:'A',
      good:'The client respects the candor and agrees to hear the revised proposal. The relationship stays constructive.',
      bad:'The client grows more skeptical and asks the CEO why the messaging changed so late.',
      insight:'Confidence is strongest when supported by transparent, relevant information.'
    },
    {
      act:'07 / 07',time:'09:58',title:'The Final Decision',slug:'THE FINAL DECISION',kind:'final',points:15,duration:80,
      photo:'assets/screen_final.jpg',skill:'Ethical judgment · Strategic decision-making · Team alignment',
      setup:'Two minutes remain. The CEO can keep the original deck to protect a dramatic pitch, use the revised deck with validation milestones, or postpone. Ethan will present only what is evidenced; Olivia wants a credible path to the €2M contract. ASTER is ready to join.',
      prompt:'What final instruction best balances the deal, the evidence and the team?',
      answers:[
        {id:'A',text:'Approve the original deck and let the CEO handle difficult questions if clients challenge the headline number.',why:'Senior authority cannot make a misleading claim more reliable, and it revives the conflict.'},
        {id:'B',text:'Postpone the meeting by one week to rebuild team alignment and fully eliminate uncertainty.',why:'A pause may be justified if the material is unsafe or unverified. Here a truthful revised pitch and validation plan are ready, so blanket postponement is disproportionate.'},
        {id:'C',text:'Use the revised deck but allow Olivia to promise a larger result informally if the client seems unconvinced.',why:'An informal verbal commitment can mislead a client just as much as a written headline.'},
        {id:'D',text:'Approve the revised evidence-led pitch, assign complementary speaking roles, and propose clear pilot milestones before any performance guarantee.',why:'This aligns commercial and technical voices, tells the truth, and gives the client a concrete path to trust and decision.'}
      ],correct:'D',
      good:'The team enters as one. The client agrees to a scoped validation phase, and negotiations continue on a credible basis.',
      bad:'The final pitch exposes the unresolved disagreement. ASTER asks for a written clarification before taking the deal further.',
      insight:'The best leaders protect both the outcome and the standards used to achieve it.'
    }
  ]
};
