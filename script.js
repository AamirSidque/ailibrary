  // Enhanced Tool Data with Pricing Information
        const toolsData = [
    {
    id: 'dall-e',
    name: 'DALL-E',
    category: 'image',
    description: 'OpenAI's advanced image generation model for creating realistic images and art from text descriptions.',
    longDescription: 'DALL-E uses advanced AI to create, edit, and modify images based on natural language descriptions.',
    url: 'https://openai.com/dall-e-3',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        free: 'Limited free credits',
        paid: 'Pay-per-generation'
    },
    tags: ['image generation', 'art', 'design'],
    rating: 4.7,
    usersCount: '10M+'
},
{
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'image',
    description: 'Open-source AI model for generating high-quality images from text descriptions.',
    longDescription: 'A powerful open-source image generation model with various implementations and customization options.',
    url: 'https://stability.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Open-source version',
        paid: 'Hosted solutions available'
    },
    tags: ['image generation', 'art', 'open-source'],
    rating: 4.6,
    usersCount: '8M+'
},
{
    id: 'jasper',
    name: 'Jasper',
    category: 'text',
    description: 'AI writing assistant for marketing and content creation.',
    longDescription: 'Advanced AI writing tool specializing in marketing copy, blog posts, and social media content.',
    url: 'https://www.jasper.ai',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $39/month'
    },
    tags: ['writing', 'marketing', 'content'],
    rating: 4.5,
    usersCount: '500K+'
},
{
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'text',
    description: 'AI copywriting tool for marketing and content creation.',
    longDescription: 'Generates marketing copy, social media posts, and various types of content using AI.',
    url: 'https://www.copy.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: '2000 words/month',
        paid: 'Starting at $36/month'
    },
    tags: ['copywriting', 'marketing', 'content'],
    rating: 4.4,
    usersCount: '400K+'
},
{
    id: 'synthesia',
    name: 'Synthesia',
    category: 'video',
    description: 'AI video creation platform with virtual presenters.',
    longDescription: 'Create professional videos using AI avatars in multiple languages.',
    url: 'https://www.synthesia.io',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $30/month'
    },
    tags: ['video creation', 'avatars', 'presentations'],
    rating: 4.6,
    usersCount: '300K+'
},
{
    id: 'descript',
    name: 'Descript',
    category: 'video',
    description: 'AI-powered video and audio editing platform.',
    longDescription: 'Edit videos and audio by editing text, with powerful AI features.',
    url: 'https://www.descript.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $12/month'
    },
    tags: ['video editing', 'audio editing', 'transcription'],
    rating: 4.7,
    usersCount: '1M+'
},
{
    id: 'runway',
    name: 'Runway',
    category: 'video',
    description: 'AI-powered video editing and generation platform.',
    longDescription: 'Professional video editing and generation tools using AI.',
    url: 'https://runway.ml',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Limited features',
        paid: 'Starting at $15/month'
    },
    tags: ['video editing', 'visual effects', 'generation'],
    rating: 4.5,
    usersCount: '500K+'
},
{
    id: 'murf',
    name: 'Murf AI',
    category: 'audio',
    description: 'AI voice generator with natural-sounding voices.',
    longDescription: 'Create voiceovers in multiple languages with AI-powered voices.',
    url: 'https://murf.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Limited minutes',
        paid: 'Starting at $29/month'
    },
    tags: ['voice generation', 'text-to-speech', 'voiceover'],
    rating: 4.5,
    usersCount: '200K+'
},
{
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'audio',
    description: 'AI voice cloning and generation platform.',
    longDescription: 'Create realistic AI voices and clone voices with high accuracy.',
    url: 'https://elevenlabs.io',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Limited characters',
        paid: 'Starting at $5/month'
    },
    tags: ['voice cloning', 'text-to-speech', 'audio'],
    rating: 4.8,
    usersCount: '300K+'
},
{
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    category: 'presentation',
    description: 'AI-powered presentation software.',
    longDescription: 'Create professional presentations automatically with AI design assistance.',
    url: 'https://www.beautiful.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $12/month'
    },
    tags: ['presentations', 'design', 'slides'],
    rating: 4.4,
    usersCount: '200K+'
},

{
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'productivity',
    description: 'AI-powered writing and organization within Notion workspace.',
    longDescription: 'Integrated AI features for writing, summarizing, and organizing content in Notion.',
    url: 'https://notion.so',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic Notion features',
        paid: '$10/month for AI features'
    },
    tags: ['productivity', 'writing', 'organization'],
    rating: 4.6,
    usersCount: '3M+'
},
{
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'coding',
    description: 'AI pair programmer that helps write better code faster.',
    longDescription: 'AI-powered code completion and suggestion tool integrated with popular IDEs.',
    url: 'https://github.com/features/copilot',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: '$10/month, free for students'
    },
    tags: ['coding', 'programming', 'development'],
    rating: 4.7,
    usersCount: '2M+'
},
{
    id: 'grammarly',
    name: 'Grammarly AI',
    category: 'text',
    description: 'AI writing assistant for grammar and style improvement.',
    longDescription: 'Advanced writing assistance with grammar checking, style suggestions, and tone adjustments.',
    url: 'https://www.grammarly.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic grammar checking',
        paid: 'Starting at $12/month'
    },
    tags: ['writing', 'grammar', 'editing'],
    rating: 4.7,
    usersCount: '30M+'
},
{
    id: 'firefly',
    name: 'Adobe Firefly',
    category: 'image',
    description: 'AI creative tools integrated with Adobe Creative Cloud.',
    longDescription: 'Generate and edit images, textures, and designs using AI within Adobe products.',
    url: 'https://www.adobe.com/products/firefly',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Limited generations',
        paid: 'Part of Creative Cloud subscription'
    },
    tags: ['design', 'creative', 'image generation'],
    rating: 4.5,
    usersCount: '1M+'
},
{
    id: 'tome',
    name: 'Tome',
    category: 'presentation',
    description: 'AI-powered storytelling and presentation platform.',
    longDescription: 'Create engaging presentations with AI-generated content and designs.',
    url: 'https://tome.app',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: '$10/month for premium'
    },
    tags: ['presentations', 'storytelling', 'design'],
    rating: 4.5,
    usersCount: '300K+'
},
{
    id: 'otter-ai',
    name: 'Otter.ai',
    category: 'audio',
    description: 'AI meeting transcription and note-taking assistant.',
    longDescription: 'Real-time transcription and summarization of meetings and conversations.',
    url: 'https://otter.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: '300 minutes/month',
        paid: 'Starting at $10/month'
    },
    tags: ['transcription', 'meetings', 'notes'],
    rating: 4.6,
    usersCount: '500K+'
},
{
    id: 'gamma',
    name: 'Gamma',
    category: 'presentation',
    description: 'AI-powered presentation and document creation.',
    longDescription: 'Create beautiful presentations and documents with AI assistance.',
    url: 'https://gamma.app',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: '$10/month for premium'
    },
    tags: ['presentations', 'documents', 'design'],
    rating: 4.4,
    usersCount: '200K+'
},
{
    id: 'writesonic',
    name: 'Writesonic',
    category: 'text',
    description: 'AI writing tool for marketing and content creation.',
    longDescription: 'Generate high-quality content for blogs, ads, and marketing materials.',
    url: 'https://writesonic.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Trial credits',
        paid: 'Starting at $15/month'
    },
    tags: ['writing', 'marketing', 'content'],
    rating: 4.4,
    usersCount: '400K+'
},
{
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    category: 'image',
    description: 'AI image generation platform for gaming and creative assets.',
    longDescription: 'Create custom AI-generated assets with style consistency.',
    url: 'https://leonardo.ai',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: '150 images/month',
        paid: 'Starting at $10/month'
    },
    tags: ['image generation', 'gaming', 'assets'],
    rating: 4.5,
    usersCount: '500K+'
},
{
    id: 'deepl',
    name: 'DeepL',
    category: 'text',
    description: 'AI-powered language translation with high accuracy.',
    longDescription: 'Professional-quality translations with context understanding.',
    url: 'https://www.deepl.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic translation',
        paid: 'Starting at $7/month'
    },
    tags: ['translation', 'language', 'writing'],
    rating: 4.8,
    usersCount: '20M+'
},

// VIDEO AI TOOLS
{
    id: 'kapwing',
    name: 'Kapwing',
    category: 'video',
    description: 'Online video editor with AI-powered features.',
    longDescription: 'Create and edit videos with AI tools for subtitles, transcription, and effects.',
    url: 'https://www.kapwing.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features with watermark',
        paid: '$20/month for pro'
    },
    tags: ['video editing', 'content creation', 'social media'],
    rating: 4.4,
    usersCount: '3M+'
},
{
    id: 'pictory',
    name: 'Pictory',
    category: 'video',
    description: 'AI video creation from long-form content.',
    longDescription: 'Automatically create short videos from long articles and videos.',
    url: 'https://pictory.ai',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $19/month'
    },
    tags: ['video creation', 'content repurposing', 'automation'],
    rating: 4.3,
    usersCount: '100K+'
},

// IMAGE AI TOOLS
{
    id: 'remove-bg',
    name: 'remove.bg',
    category: 'image',
    description: 'AI-powered background removal tool.',
    longDescription: 'Automatically remove backgrounds from images with high accuracy.',
    url: 'https://www.remove.bg',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic resolution',
        paid: 'Credits-based system'
    },
    tags: ['image editing', 'background removal', 'design'],
    rating: 4.8,
    usersCount: '30M+'
},
{
    id: 'photoroom',
    name: 'PhotoRoom',
    category: 'image',
    description: 'AI photo editing and background removal.',
    longDescription: 'Edit photos, remove backgrounds, and create product images with AI.',
    url: 'https://www.photoroom.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: '$9.99/month for pro'
    },
    tags: ['photo editing', 'ecommerce', 'design'],
    rating: 4.7,
    usersCount: '5M+'
},

// AUDIO AI TOOLS
{
    id: 'soundraw',
    name: 'Soundraw',
    category: 'audio',
    description: 'AI music generation platform.',
    longDescription: 'Create custom music tracks using AI composition.',
    url: 'https://soundraw.io',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $16.99/month'
    },
    tags: ['music', 'composition', 'soundtrack'],
    rating: 4.6,
    usersCount: '200K+'
},
{
    id: 'podcastle',
    name: 'Podcastle',
    category: 'audio',
    description: 'AI-powered podcast recording and editing.',
    longDescription: 'Professional podcast creation with AI enhancement features.',
    url: 'https://podcastle.ai',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $11.99/month'
    },
    tags: ['podcast', 'audio editing', 'voice'],
    rating: 4.5,
    usersCount: '300K+'
},

// BUSINESS AI TOOLS
{
    id: 'salesforce-einstein',
    name: 'Salesforce Einstein',
    category: 'business',
    description: 'AI-powered CRM and business intelligence.',
    longDescription: 'AI tools for sales predictions, customer insights, and automation.',
    url: 'https://www.salesforce.com/products/einstein/overview',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Contact for pricing'
    },
    tags: ['CRM', 'sales', 'analytics'],
    rating: 4.6,
    usersCount: '2M+'
},
{
    id: 'gong-io',
    name: 'Gong.io',
    category: 'business',
    description: 'AI-powered revenue intelligence platform.',
    longDescription: 'Analyze sales calls and meetings for insights and coaching.',
    url: 'https://www.gong.io',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom pricing'
    },
    tags: ['sales', 'analytics', 'coaching'],
    rating: 4.7,
    usersCount: '1M+'
},

// RESEARCH & EDUCATION AI TOOLS
{
    id: 'elicit',
    name: 'Elicit',
    category: 'research',
    description: 'AI research assistant for academic papers.',
    longDescription: 'Find, analyze, and summarize research papers using AI.',
    url: 'https://elicit.org',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Contact for pricing'
    },
    tags: ['research', 'academic', 'analysis'],
    rating: 4.5,
    usersCount: '100K+'
},
{
    id: 'scholarai',
    name: 'Scholar AI',
    category: 'research',
    description: 'AI-powered academic research assistant.',
    longDescription: 'Streamline research with AI paper summaries and insights.',
    url: 'https://scholarai.io',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic search',
        paid: '$15/month for premium'
    },
    tags: ['research', 'academic', 'papers'],
    rating: 4.4,
    usersCount: '50K+'
},

// MARKETING AI TOOLS
{
    id: 'semrush-ai',
    name: 'Semrush AI Writing',
    category: 'marketing',
    description: 'AI-powered SEO and content marketing tools.',
    longDescription: 'Create SEO-optimized content with AI assistance.',
    url: 'https://www.semrush.com',
    isNew: true,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $119.95/month'
    },
    tags: ['SEO', 'content marketing', 'analytics'],
    rating: 4.7,
    usersCount: '1M+'
},
{
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'marketing',
    description: 'AI-driven SEO optimization platform.',
    longDescription: 'Optimize content for search engines using AI analysis.',
    url: 'https://surferseo.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $59/month'
    },
    tags: ['SEO', 'content optimization', 'marketing'],
    rating: 4.6,
    usersCount: '300K+'
},

// HEALTHCARE AI TOOLS
{
    id: 'ada-health',
    name: 'Ada Health',
    category: 'healthcare',
    description: 'AI-powered symptom assessment and health guide.',
    longDescription: 'Personal health companion using AI to help understand symptoms and conditions.',
    url: 'https://ada.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic assessment',
        paid: 'Enterprise solutions'
    },
    tags: ['health', 'diagnosis', 'medical'],
    rating: 4.7,
    usersCount: '10M+'
},
{
    id: 'babylon-health',
    name: 'Babylon Health',
    category: 'healthcare',
    description: 'AI healthcare platform for consultations and monitoring.',
    longDescription: 'Digital healthcare service combining AI with medical expertise.',
    url: 'https://www.babylonhealth.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Subscription-based'
    },
    tags: ['healthcare', 'telemedicine', 'monitoring'],
    rating: 4.5,
    usersCount: '5M+'
},

// DESIGN AI TOOLS
{
    id: 'uizard',
    name: 'Uizard',
    category: 'design',
    description: 'AI-powered UI/UX design platform.',
    longDescription: 'Transform sketches and ideas into UI designs using AI.',
    url: 'https://uizard.io',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $12/month'
    },
    tags: ['UI design', 'prototyping', 'wireframing'],
    rating: 4.6,
    usersCount: '500K+'
},
{
    id: 'sketch2code',
    name: 'Sketch2Code',
    category: 'design',
    description: 'Convert hand-drawn designs to HTML/CSS code.',
    longDescription: 'Microsoft AI tool that transforms sketches into working HTML.',
    url: 'https://sketch2code.azurewebsites.net',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'All features'
    },
    tags: ['web design', 'code generation', 'prototyping'],
    rating: 4.3,
    usersCount: '200K+'
},

// 3D & ANIMATION AI TOOLS
{
    id: 'mixamo',
    name: 'Mixamo',
    category: '3d',
    description: 'AI-powered 3D character animation.',
    longDescription: 'Automatically rig and animate 3D characters.',
    url: 'https://www.mixamo.com',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'Adobe account required'
    },
    tags: ['3D animation', 'character rigging', 'motion'],
    rating: 4.7,
    usersCount: '1M+'
},
{
    id: 'plask',
    name: 'Plask',
    category: '3d',
    description: 'AI motion capture and animation tool.',
    longDescription: 'Convert video to 3D animation using AI motion capture.',
    url: 'https://plask.ai',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $20/month'
    },
    tags: ['motion capture', 'animation', '3D'],
    rating: 4.4,
    usersCount: '100K+'
},

// EDUCATION AI TOOLS
{
    id: 'duolingo-ai',
    name: 'Duolingo AI',
    category: 'education',
    description: 'AI-powered language learning platform.',
    longDescription: 'Personalized language learning with adaptive AI technology.',
    url: 'https://www.duolingo.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic lessons',
        paid: '$6.99/month for Plus'
    },
    tags: ['language learning', 'education', 'mobile'],
    rating: 4.8,
    usersCount: '50M+'
},
{
    id: 'gradescope',
    name: 'Gradescope',
    category: 'education',
    description: 'AI-assisted grading and feedback platform.',
    longDescription: 'Streamline grading process with AI for educators.',
    url: 'https://www.gradescope.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Institution-based pricing'
    },
    tags: ['education', 'grading', 'assessment'],
    rating: 4.6,
    usersCount: '1M+'
},

// LEGAL AI TOOLS
{
    id: 'casetext',
    name: 'Casetext',
    category: 'legal',
    description: 'AI-powered legal research assistant.',
    longDescription: 'Advanced legal research and analysis using AI technology.',
    url: 'https://casetext.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Starting at $65/month'
    },
    tags: ['legal research', 'law', 'analysis'],
    rating: 4.7,
    usersCount: '500K+'
},
{
    id: 'harvey-ai',
    name: 'Harvey AI',
    category: 'legal',
    description: 'AI legal assistant for document analysis.',
    longDescription: 'Analyze legal documents and contracts using AI.',
    url: 'https://harvey.ai',
    isNew: true,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom pricing'
    },
    tags: ['legal tech', 'document analysis', 'contracts'],
    rating: 4.5,
    usersCount: '50K+'
},

// FINANCE AI TOOLS
{
    id: 'alpaca',
    name: 'Alpaca',
    category: 'finance',
    description: 'AI-powered stock trading platform.',
    longDescription: 'Automated trading algorithms and market analysis.',
    url: 'https://alpaca.markets',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Custom pricing'
    },
    tags: ['trading', 'finance', 'automation'],
    rating: 4.6,
    usersCount: '200K+'
},
{
    id: 'kavout',
    name: 'Kavout',
    category: 'finance',
    description: 'AI-driven investment analysis platform.',
    longDescription: 'Investment insights and portfolio optimization using AI.',
    url: 'https://www.kavout.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise pricing'
    },
    tags: ['investment', 'analysis', 'finance'],
    rating: 4.4,
    usersCount: '100K+'
},
  // ARCHITECTURE AI TOOLS
{
    id: 'hypar',
    name: 'Hypar',
    category: 'architecture',
    description: 'AI-powered generative design platform for buildings.',
    longDescription: 'Create and analyze building designs with automated performance analysis and cost estimation.',
    url: 'https://hypar.io',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic features',
        paid: 'Starting at $100/month'
    },
    tags: ['generative design', 'architecture', 'building analysis'],
    rating: 4.6,
    usersCount: '15K+',
    features: ['Automated design generation', 'Cost analysis', 'Energy modeling']
},
{
    id: 'finch3d',
    name: 'Finch3D',
    category: 'architecture',
    description: 'AI architectural design optimization platform.',
    longDescription: 'Optimize building designs for cost, energy efficiency, and sustainability using AI.',
    url: 'https://finch3d.com',
    isNew: true,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom pricing'
    },
    tags: ['architecture', 'optimization', 'sustainability'],
    rating: 4.5,
    usersCount: '8K+',
    features: ['Sustainability analysis', 'Cost optimization', 'Design automation']
},

// MUSIC PRODUCTION AI TOOLS
{
    id: 'melodrive',
    name: 'Melodrive',
    category: 'music',
    description: 'Adaptive AI music generation for games and media.',
    longDescription: 'Create dynamic, adaptive music that responds to user interactions and emotions.',
    url: 'https://melodrive.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic generation',
        paid: '$29/month for pro'
    },
    tags: ['adaptive music', 'game audio', 'interactive'],
    rating: 4.7,
    usersCount: '50K+',
    features: ['Real-time adaptation', 'Emotion-based composition', 'Game integration']
},
{
    id: 'landr',
    name: 'LANDR',
    category: 'music',
    description: 'AI mastering and music distribution platform.',
    longDescription: 'Professional-grade audio mastering and distribution using advanced AI algorithms.',
    url: 'https://www.landr.com',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic mastering',
        paid: 'From $9/month'
    },
    tags: ['mastering', 'distribution', 'audio production'],
    rating: 4.6,
    usersCount: '300K+',
    features: ['AI mastering', 'Distribution services', 'Sample library']
},

// SPACE TECHNOLOGY AI TOOLS
{
    id: 'astroscale',
    name: 'Astroscale',
    category: 'space',
    description: 'AI-powered space debris removal technology.',
    longDescription: 'Autonomous satellite systems for space debris capture and removal.',
    url: 'https://astroscale.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise solutions'
    },
    tags: ['space debris', 'satellite servicing', 'space sustainability'],
    rating: 4.8,
    usersCount: '1K+',
    features: ['Debris capture', 'Autonomous navigation', 'Mission planning']
},
{
    id: 'arlula',
    name: 'Arlula',
    category: 'space',
    description: 'AI satellite imagery analysis platform.',
    longDescription: 'Access and analyze satellite imagery using AI for various applications.',
    url: 'https://www.arlula.com',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic access',
        paid: 'Custom pricing'
    },
    tags: ['satellite imagery', 'earth observation', 'analysis'],
    rating: 4.5,
    usersCount: '5K+',
    features: ['Image analysis', 'Data integration', 'Custom algorithms']
},

// TRANSPORTATION AI TOOLS
{
    id: 'bestmile',
    name: 'Bestmile',
    category: 'transportation',
    description: 'AI fleet orchestration platform.',
    longDescription: 'Optimize and manage autonomous and human-driven vehicle fleets.',
    url: 'https://bestmile.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise pricing'
    },
    tags: ['fleet management', 'autonomous vehicles', 'mobility'],
    rating: 4.7,
    usersCount: '10K+',
    features: ['Fleet optimization', 'Demand prediction', 'Route planning']
},
{
    id: 'smartersorting',
    name: 'Smarter Sorting',
    category: 'transportation',
    description: 'AI-powered logistics optimization platform.',
    longDescription: 'Optimize shipping and sorting operations using AI and machine learning.',
    url: 'https://smartersorting.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom solutions'
    },
    tags: ['logistics', 'sorting', 'optimization'],
    rating: 4.6,
    usersCount: '5K+',
    features: ['Route optimization', 'Package classification', 'Regulatory compliance']
},

// MANUFACTURING AI TOOLS
{
    id: 'falkonry',
    name: 'Falkonry',
    category: 'manufacturing',
    description: 'AI-powered predictive operations platform.',
    longDescription: 'Predict and prevent operational issues in manufacturing using machine learning.',
    url: 'https://falkonry.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise licensing'
    },
    tags: ['predictive operations', 'manufacturing', 'maintenance'],
    rating: 4.7,
    usersCount: '15K+',
    features: ['Anomaly detection', 'Predictive maintenance', 'Process optimization']
},
{
    id: 'neurala',
    name: 'Neurala',
    category: 'manufacturing',
    description: 'AI vision systems for manufacturing.',
    longDescription: 'Visual inspection and quality control using AI computer vision.',
    url: 'https://www.neurala.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom pricing'
    },
    tags: ['visual inspection', 'quality control', 'computer vision'],
    rating: 4.6,
    usersCount: '10K+',
    features: ['Defect detection', 'Quality assurance', 'Real-time monitoring']
}



];

  // Add these new tools to your existing toolsData array
const newTools = [
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        category: 'coding',
        description: 'AI-powered code completion and suggestion tool.',
        longDescription: 'GitHub Copilot is an AI pair programmer that offers code suggestions in real-time as you type.',
        url: 'https://github.com/features/copilot',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: '$10/month for individuals, free for students'
        },
        tags: ['coding', 'programming', 'development'],
        rating: 4.8,
        usersCount: '1M+'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        category: 'productivity',
        description: 'AI-powered writing and organization within Notion.',
        longDescription: 'Enhance your Notion workspace with AI-powered writing, summarization, and organization features.',
        url: 'https://notion.so',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic Notion features',
            paid: '$10/month for AI features'
        },
        tags: ['productivity', 'writing', 'organization'],
        rating: 4.7,
        usersCount: '3M+'
    },
    {
        id: 'blender-ai',
        name: 'Blender AI Tools',
        category: '3d',
        description: '3D modeling and animation AI tools for Blender.',
        longDescription: 'AI-powered tools for Blender that help with modeling, texturing, and animation.',
        url: 'https://www.blender.org',
        isNew: true,
        pricing: 'free',
        pricingDetails: {
            free: 'All features included'
        },
        tags: ['3D', 'animation', 'modeling'],
        rating: 4.6,
        usersCount: '500K+'
    },
    {
        id: 'scholarai',
        name: 'Scholar AI',
        category: 'research',
        description: 'AI research assistant for academic papers.',
        longDescription: 'Helps researchers find, summarize, and analyze academic papers using AI.',
        url: 'https://scholarai.io',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic search and summaries',
            paid: '$15/month for advanced features'
        },
        tags: ['research', 'academic', 'papers'],
        rating: 4.5,
        usersCount: '200K+'
    },
    {
        id: 'duolingo-ai',
        name: 'Duolingo AI',
        category: 'education',
        description: 'AI-powered language learning platform.',
        longDescription: 'Personalized language learning with AI-adapted lessons and conversations.',
        url: 'https://www.duolingo.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic lessons',
            paid: '$7/month for premium features'
        },
        tags: ['education', 'language', 'learning'],
        rating: 4.8,
        usersCount: '50M+'
    },
    {
        id: 'salesforce-einstein',
        name: 'Salesforce Einstein',
        category: 'business',
        description: 'AI-powered CRM and business intelligence.',
        longDescription: 'AI tools for sales predictions, customer insights, and automation within Salesforce.',
        url: 'https://www.salesforce.com/products/einstein/overview/',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: 'Contact for pricing'
        },
        tags: ['business', 'CRM', 'analytics'],
        rating: 4.6,
        usersCount: '2M+'
    },
    {
        id: 'semrush-ai',
        name: 'Semrush AI Writing',
        category: 'marketing',
        description: 'AI-powered SEO and content marketing tools.',
        longDescription: 'Create SEO-optimized content and marketing materials with AI assistance.',
        url: 'https://www.semrush.com',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Limited features',
            paid: 'Starting at $119.95/month'
        },
        tags: ['marketing', 'SEO', 'content'],
        rating: 4.7,
        usersCount: '1M+'
    },
    {
        id: 'mixamo',
        name: 'Mixamo',
        category: '3d',
        description: 'AI-powered 3D character animation.',
        longDescription: 'Automatically rig and animate 3D characters with AI technology.',
        url: 'https://www.mixamo.com',
        isNew: false,
        pricing: 'free',
        pricingDetails: {
            free: 'All features with Adobe account'
        },
        tags: ['3D', 'animation', 'characters'],
        rating: 4.5,
        usersCount: '1.5M+'
    },
    {
        id: 'grammarly-business',
        name: 'Grammarly Business',
        category: 'business',
        description: 'AI writing assistant for teams and businesses.',
        longDescription: 'Enterprise-level AI writing and editing tools with team collaboration features.',
        url: 'https://www.grammarly.com/business',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: '$15/member/month'
        },
        tags: ['business', 'writing', 'collaboration'],
        rating: 4.7,
        usersCount: '50K+'
    },
    {
        id: 'kahoot-ai',
        name: 'Kahoot! AI',
        category: 'education',
        description: 'AI-powered interactive learning platform.',
        longDescription: 'Create engaging quizzes and educational content with AI assistance.',
        url: 'https://kahoot.com',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features',
            paid: 'Starting at $3/month'
        },
        tags: ['education', 'quiz', 'learning'],
        rating: 4.6,
        usersCount: '5M+'
    },
  // GAMING AI TOOLS
{
    id: 'nvidia-dlss',
    name: 'NVIDIA DLSS',
    category: 'gaming',
    description: 'AI-powered graphics upscaling for games.',
    longDescription: 'Deep Learning Super Sampling technology for improved gaming performance and visuals.',
    url: 'https://www.nvidia.com/dlss',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'Included with supported GPUs'
    },
    tags: ['gaming', 'graphics', 'performance'],
    rating: 4.8,
    usersCount: '50M+'
},
{
    id: 'modl-ai',
    name: 'modl.ai',
    category: 'gaming',
    description: 'AI game testing and development platform.',
    longDescription: 'Automated game testing and balancing using AI agents.',
    url: 'https://modl.ai',
    isNew: true,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom enterprise pricing'
    },
    tags: ['game development', 'testing', 'automation'],
    rating: 4.5,
    usersCount: '10K+'
},

// SCIENTIFIC RESEARCH AI TOOLS
{
    id: 'alphafold',
    name: 'AlphaFold',
    category: 'science',
    description: 'AI system for protein structure prediction.',
    longDescription: 'DeepMind's AI system for predicting 3D protein structures.',
    url: 'https://alphafold.ebi.ac.uk',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'Open access for research'
    },
    tags: ['protein folding', 'biology', 'research'],
    rating: 4.9,
    usersCount: '1M+'
},
{
    id: 'deepchem',
    name: 'DeepChem',
    category: 'science',
    description: 'AI platform for drug discovery and chemistry.',
    longDescription: 'Open-source AI tools for chemical science and drug development.',
    url: 'https://deepchem.io',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'Open source'
    },
    tags: ['chemistry', 'drug discovery', 'research'],
    rating: 4.6,
    usersCount: '100K+'
},

// ROBOTICS AI TOOLS
{
    id: 'ros-ai',
    name: 'ROS AI',
    category: 'robotics',
    description: 'AI framework for robot operating systems.',
    longDescription: 'Artificial Intelligence tools and libraries for robotic systems.',
    url: 'https://www.ros.org',
    isNew: false,
    pricing: 'free',
    pricingDetails: {
        free: 'Open source'
    },
    tags: ['robotics', 'automation', 'development'],
    rating: 4.7,
    usersCount: '500K+'
},
{
    id: 'nvidia-isaac',
    name: 'NVIDIA Isaac',
    category: 'robotics',
    description: 'AI platform for robotics development.',
    longDescription: 'Comprehensive toolkit for building and deploying robotic AI applications.',
    url: 'https://developer.nvidia.com/isaac-sdk',
    isNew: false,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic SDK',
        paid: 'Enterprise features'
    },
    tags: ['robotics', 'simulation', 'development'],
    rating: 4.6,
    usersCount: '100K+'
},

// CYBERSECURITY AI TOOLS
{
    id: 'darktrace',
    name: 'Darktrace',
    category: 'security',
    description: 'AI-powered cyber defense platform.',
    longDescription: 'Enterprise security using AI to detect and respond to threats.',
    url: 'https://www.darktrace.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise pricing'
    },
    tags: ['cybersecurity', 'threat detection', 'enterprise'],
    rating: 4.8,
    usersCount: '5K+'
},
{
    id: 'cylance',
    name: 'Cylance',
    category: 'security',
    description: 'AI antivirus and endpoint protection.',
    longDescription: 'Predictive AI-based security solution for endpoint protection.',
    url: 'https://www.cylance.com',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Per endpoint pricing'
    },
    tags: ['security', 'antivirus', 'endpoint protection'],
    rating: 4.7,
    usersCount: '100K+'
},

// AGRICULTURE AI TOOLS
{
    id: 'prospera',
    name: 'Prospera',
    category: 'agriculture',
    description: 'AI-powered agriculture management platform.',
    longDescription: 'Computer vision and AI for crop management and optimization.',
    url: 'https://prospera.ag',
    isNew: false,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Custom pricing'
    },
    tags: ['agriculture', 'crop management', 'automation'],
    rating: 4.6,
    usersCount: '10K+'
},
{
    id: 'farmwise',
    name: 'FarmWise',
    category: 'agriculture',
    description: 'AI farming robots and automation.',
    longDescription: 'Autonomous farming solutions using AI and robotics.',
    url: 'https://farmwise.io',
    isNew: true,
    pricing: 'paid',
    pricingDetails: {
        paid: 'Enterprise solutions'
    },
    tags: ['farming', 'robotics', 'automation'],
    rating: 4.5,
    usersCount: '1K+'
},

// CLIMATE & ENVIRONMENT AI TOOLS
{
    id: 'climatemind',
    name: 'ClimateMind',
    category: 'climate',
    description: 'AI for climate change analysis and solutions.',
    longDescription: 'AI platform for understanding and addressing climate challenges.',
    url: 'https://climatemind.org',
    isNew: true,
    pricing: 'free',
    pricingDetails: {
        free: 'Open access'
    },
    tags: ['climate', 'environment', 'sustainability'],
    rating: 4.4,
    usersCount: '50K+'
},
{
    id: 'terrawatch',
    name: 'TerraWatch',
    category: 'climate',
    description: 'AI-powered environmental monitoring.',
    longDescription: 'Satellite imagery analysis for environmental protection.',
    url: 'https://terrawatch.ai',
    isNew: true,
    pricing: 'freemium',
    pricingDetails: {
        free: 'Basic monitoring',
        paid: 'Advanced features'
    },
    tags: ['environmental monitoring', 'satellite', 'analysis'],
    rating: 4.5,
    usersCount: '10K+'
}
];

// Add these new tools to your existing toolsData array
toolsData.push(...newTools);

        // Function to create tool cards
        function displayTools(tools) {
            const container = document.getElementById('toolsContainer');
            container.innerHTML = tools.map(tool => `
                <div class="tool-card">
                    <h3>
                        ${tool.name}
                        ${tool.isNew ? '<span class="new-badge">New</span>' : ''}
                    </h3>
                    <p>${tool.description}</p>
                    <div class="tags">
                        ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="learn-more-btn" onclick="showToolDetails('${tool.id}')">Learn More</button>
                    <div class="tool-stats">
                        <div class="stat-item">
                            <span>⭐ ${tool.rating}</span>
                        </div>
                        <div class="stat-item">
                            <span>👥 ${tool.usersCount}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Function to show tool details in modal
        function showToolDetails(toolId) {
            const tool = toolsData.find(t => t.id === toolId);
            const modal = document.getElementById('toolModal');
            const modalContent = document.getElementById('modalContent');

            modalContent.innerHTML = `
                <h2>${tool.name}</h2>
                <span class="pricing-badge ${tool.pricing}">
                    ${tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
                </span>
                <p>${tool.longDescription}</p>
                <div class="pricing-details">
                    <h3>Pricing Details</h3>
                    ${tool.pricingDetails.free ? `<p>🆓 Free: ${tool.pricingDetails.free}</p>` : ''}
                    ${tool.pricingDetails.paid ? `<p>💰 Paid: ${tool.pricingDetails.paid}</p>` : ''}
                </div>
                <a href="${tool.url}" target="_blank" class="learn-more-btn" style="margin-top: 20px;">
                    Visit Website
                </a>
            `;

            modal.style.display = 'flex';
        }

        // Close modal functionality
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('toolModal').style.display = 'none';
        });

        window.onclick = function(event) {
            const modal = document.getElementById('toolModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Filter tools based on search and category
        function filterTools() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;

            const filteredTools = toolsData.filter(tool => {
                const matchesSearch = 
                    tool.name.toLowerCase().includes(searchTerm) ||
                    tool.description.toLowerCase().includes(searchTerm) ||
                    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                
                const matchesCategory = 
                    activeCategory === 'all' || tool.category === activeCategory;

                return matchesSearch && matchesCategory;
            });

            displayTools(filteredTools);
        }

        // Event Listeners
        document.getElementById('searchInput').addEventListener('input', filterTools);

        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.category-btn.active').classList.remove('active');
                e.target.classList.add('active');
                filterTools();
            });
        });

        // Initial display
        displayTools(toolsData);
