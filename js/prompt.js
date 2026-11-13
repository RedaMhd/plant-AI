You are an experienced Senior Project Manager and Agile Coach specialized in software development.
Your mission is to analyze the project brief below and transform it into a detailed, realistic and well-organized development plan.
PROJECT INFORMATION:
Project Name: [plant AI]
Project Duration: [9] days
Team Size: [1] developer(s)
Technologies: [HTML JS CSS Tailwind]
Difficulty Level: [Medium]
Project Description: [éditeur d'outils de productivité pour les équipes de développement]
Project Brief:
[Pages et contenu
Dashboard (index.html)
Header : logo PLANIT AI, navigation (Dashboard, Nouveau projet) et accès aux Paramètres IA (saisie de la clé API).
Liste des projets sous forme de cartes : nom, description, nombre total de tâches, tâches terminées, tâches restantes, pourcentage d'avancement (barre de progression).
Bouton « Nouveau projet » et accès au Task Board d'un projet.
Suppression d'un projet avec confirmation. État vide : « Aucun projet pour le moment, créez-en un pour générer votre premier plan. »
Création de projet (new-project.html)
Formulaire : nom du projet, description, brief complet (textarea), durée (en jours), nombre de développeurs, technologies, niveau de difficulté (select : Beginner / Intermediate / Advanced).
Validation en temps réel (événements input et submit, expressions régulières) : champs obligatoires, durée et nombre de développeurs entiers ≥ 1, une message d'erreur s'affiche sous chaque champ, (le bouton d'envoie doit rester désactivé tant que le formulaire est invalide).
Bouton « Générer le plan de développement » : construit le prompt, l'envoie à l'API et lance la génération.
Panneau d'état de la génération : idle (prêt), loading (spinner + bouton désactivé pour éviter les doubles envois), success (redirection vers le Task Board), error (message clair + bouton « Réessayer »). L'application ne doit jamais rester bloquée.
Task Board (project.html?id=...)
Résumé du projet : nom, durée, équipe, heures estimées / capacité, progression.
Tableau Kanban en trois colonnes : To Do / In Progress / Done.
Carte de tâche : ID, titre, badge de priorité, badge de taille, temps estimé, deadline, dépendances.
Clic sur une carte : ouverture du détail.
Détail et gestion d'une tâche (modal)
Consultation : description, user stories, critères d'acceptation, priorité, importance, taille, temps estimé, deadline, statut, dépendances.
Modification : titre, description, priorité, taille, deadline, statut. Suppression avec confirmation.
Paramètres IA (modal accessible depuis le header)
Champ de saisie de la clé API (type password), enregistrée dans sessionStorage uniquement.
Bouton « Mode démo » : charge data/sample-plan.json avec Fetch (GET) pour travailler sans appeler l'IA.
⚙️ Règles de gestion

La progression d'un projet = tâches Done / total des tâches, calculée à partir des statuts uniquement.
Une tâche ne peut pas passer à Done si l'une de ses dépendances n'est pas Done : un message l'explique.
Supprimer une tâche la retire aussi des dépendances des autres tâches.
Le plan reçu de l'IA n'est jamais affiché tel quel : il est d'abord parsé puis validé (champs obligatoires, valeurs autorisées, dépendances existantes, deadlines dans la durée du projet).
Les modifications manuelles d'une tâche sont conservées après rechargement de la page.
Modèle de données d'une tâche
id : identifiant unique dans le projet (TASK-001, TASK-002...)
title : titre clair et précis
description : explication détaillée du travail à réaliser
userStories : tableau de besoins du point de vue de l'utilisateur
acceptanceCriteria : tableau de conditions testables permettant de valider la tâche
priority : Low, Medium, High, Critical
importance : Low, Medium, High
size : XS, S, M, L, XL
estimatedTime : temps estimé en heures (nombre)
deadline : jour prévu pour terminer la tâche (Day 1, Day 2...)
status : To Do, In Progress, Done
dependencies : tableau des IDs des tâches à terminer avant celle-ci (vide s'il n'y en a pas)
Exemple de tâche :

{

  "id": "TASK-001",

  "title": "Create the task board interface",

  "description": "Build the three-column board (To Do, In Progress, Done) and the task cards.",

  "userStories": ["As a user, I want to see my tasks in a board so that I can follow the progress of my project."],

  "acceptanceCriteria": ["The three columns are displayed.", "Each card shows the title, priority, size and deadline.", "The layout is usable on mobile."],

  "priority": "High",

  "importance": "High",

  "size": "M",

  "estimatedTime": 6,

  "deadline": "Day 2",

  "status": "To Do",

  "dependencies": []

}

Prompt obligatoire à envoyer à l'IA
Le prompt dans ressources doit être intégré dans prompt.js, sous la forme d'une fonction buildPrompt(project) qui utilise un template literal. Les informations entre crochets sont remplacées dynamiquement par les valeurs du formulaire avant l'envoi. Vous ne modifiez pas le contenu du prompt : votre travail est de l'envoyer correctement et d'exploiter la réponse.

Modularisation du code JavaScript avec les modules ES6
Appliquer cette organisation à PLANIT AI en séparant l'affichage, l'état de l'application, la communication avec l'API, la persistance et les fonctions utilitaires. Un fichier = une responsabilité.

Charger le point d'entrée avec <script type="module" src="js/main.js"></script> dans chaque page HTML (un seul script par page).
Utiliser export (exports nommés) et import pour partager les fonctions entre les fichiers. Aucune variable globale partagée, aucun onclick dans le HTML.
Seul ui.js manipule le DOM 
Modalités pédagogiques
Vous disposez de 9 jours en autonomie pour réaliser le brief en utilisant les technologies appropriées.

Date limite de soumission : 20/11/2026 à 11h59]
YOUR TASK:
Analyze the project carefully and break it down into actionable development tasks. For each task, generate the following information:
id: Unique task identifier (TASK-001, TASK-002...).title: Short, clear and descriptive title.description: Detailed explanation of what needs to be implemented.userStories: At least one user story following the format "As a [user], I want [feature] so that [benefit]."acceptanceCriteria: Clear and testable conditions that define when the task is completed.priority: Low, Medium, High or Critical.importance: Low, Medium or High.size: XS, S, M, L or XL.estimatedTime: Estimated effort in hours (a number).deadline: Expected completion day, expressed as Day 1, Day 2, etc.status: Always "To Do".dependencies: IDs of tasks that must be completed before this task. Use an empty array if there are none.
SIZE AND WORKLOAD RULES:
Size guide: XS = 2 hours or less, S = 3-4 hours, M = 5-6 hours, L = 7-8 hours, XL = more than 8 hours (avoid XL: split the task instead).The estimatedTime of a task must match its size.Assume 6 productive hours per developer per day.The sum of all estimatedTime values must not exceed: Project Duration x Team Size x 6 hours.Adapt the granularity and the complexity of the tasks to the Difficulty Level (Beginner = simpler and smaller tasks, Advanced = more technical tasks).
PLANNING RULES:
Break large features into smaller, actionable tasks.Avoid vague tasks such as "Develop the website".Each task must have a clear and achievable goal.Include setup, design, implementation, integration, testing, deployment and documentation tasks when relevant.Start with setup tasks and finish with final testing, deployment and documentation tasks.Prioritize essential features before optional ones.Do not generate tasks unrelated to the project and do not duplicate tasks.Acceptance criteria must be testable.Dependencies must only reference existing task IDs and must never be circular.A task's deadline must not be earlier than the deadline of any task it depends on.Every deadline must fit within the project duration (never later than Day [NUMBER OF DAYS]).Distribute the workload realistically across the available days and avoid impossible deadlines.
OUTPUT REQUIREMENTS:
Return ONLY a valid JSON object, with no markdown, no code fences and no text before or after it, using exactly this structure:
{
  "projectName": "string",
  "totalEstimatedHours": number,
  "tasks": [
    {
      "id": "TASK-001",
      "title": "string",
      "description": "string",
      "userStories": ["string"],
      "acceptanceCriteria": ["string"],
      "priority": "Low | Medium | High | Critical",
      "importance": "Low | Medium | High",
      "size": "XS | S | M | L | XL",
      "estimatedTime": number,
      "deadline": "Day N",
      "status": "To Do",
      "dependencies": ["TASK-001"]
    }
  ]
}
Property names and allowed values must be written exactly as shown above.estimatedTime and totalEstimatedHours must be numbers, not strings.totalEstimatedHours must equal the sum of all estimatedTime values.Generate between 8 and 40 tasks, depending on the project duration, the team size and the difficulty level.
