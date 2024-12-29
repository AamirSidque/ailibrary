  // Enhanced Tool Data with Pricing Information
        const toolsData = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'text',
        description: 'Leading AI chatbot for text generation, writing, and coding assistance.',
        longDescription: "ChatGPT is OpenAI's flagship conversational AI model capable of understanding and generating human-like text. It can help with writing, coding, analysis, and general questions.",
        url: 'https://chat.openai.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Access to GPT-3.5',
            paid: '$20/month for GPT-4, faster responses, and priority access'
        },
        tags: ['chatbot', 'writing', 'coding', 'assistant'],
        rating: 4.8,
        usersCount: '100M+'
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        category: 'image',
        description: 'Advanced AI art generator creating stunning, artistic images from text descriptions.',
        longDescription: 'Midjourney is a powerful AI art generator known for its artistic style and high-quality outputs. It excels in creating detailed, imaginative artwork from text prompts.',
        url: 'https://www.midjourney.com',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: 'Starting at $10/month for basic access'
        },
        tags: ['art', 'image generation', 'design', 'creative'],
        rating: 4.9,
        usersCount: '15M+'
    },
    {
        id: 'claude',
        name: 'Claude',
        category: 'text',
        description: "Anthropic's advanced AI assistant for writing, analysis, and research.",
        longDescription: 'Claude is known for its nuanced understanding and ability to handle complex tasks. It excels in writing, analysis, and maintaining longer conversations.',
        url: 'https://claude.ai',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic access with daily limits',
            paid: 'Claude Pro for $20/month'
        },
        tags: ['writing', 'research', 'analysis', 'assistant'],
        rating: 4.7,
        usersCount: '5M+'
    },
    {
        id: 'leonardo-ai',
        name: 'Leonardo AI',
        category: 'image',
        description: 'AI image generator specialized in high-quality, customizable artwork.',
        longDescription: 'Leonardo AI offers advanced image generation capabilities with custom model training and style consistency features.',
        url: 'https://leonardo.ai',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: '150 images/month',
            paid: 'Starting at $10/month for more generations'
        },
        tags: ['art', 'image generation', 'design'],
        rating: 4.6,
        usersCount: '2M+'
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        category: 'video',
        description: 'Create AI videos with virtual presenters in multiple languages.',
        longDescription: 'Synthesia allows you to create professional videos using AI avatars, with support for 120+ languages and customizable templates.',
        url: 'https://www.synthesia.io',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: 'Starting at $30/month'
        },
        tags: ['video creation', 'avatars', 'multilingual'],
        rating: 4.5,
        usersCount: '1M+'
    },
    {
        id: 'jasper',
        name: 'Jasper',
        category: 'text',
        description: 'AI writing assistant for marketing and content creation.',
        longDescription: 'Jasper specializes in creating marketing copy, blog posts, and social media content with AI-powered writing assistance.',
        url: 'https://www.jasper.ai',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: 'Starting at $39/month'
        },
        tags: ['writing', 'marketing', 'content'],
        rating: 4.6,
        usersCount: '500K+'
    },
    {
        id: 'runway',
        name: 'Runway',
        category: 'video',
        description: 'Professional AI video editing and generation platform.',
        longDescription: 'Runway offers advanced AI tools for video editing, effects, and generation, including text-to-video capabilities.',
        url: 'https://runway.ml',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with watermark',
            paid: 'Starting at $15/month'
        },
        tags: ['video editing', 'special effects', 'generation'],
        rating: 4.7,
        usersCount: '1.5M+'
    },
    {
        id: 'murf',
        name: 'Murf AI',
        category: 'audio',
        description: 'AI voice generator with natural-sounding voices.',
        longDescription: 'Murf offers high-quality AI voice generation in multiple languages and accents, perfect for voiceovers and content creation.',
        url: 'https://murf.ai',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Limited minutes with watermark',
            paid: 'Starting at $29/month'
        },
        tags: ['voice generation', 'text-to-speech', 'voiceover'],
        rating: 4.5,
        usersCount: '1M+'
    },
    {
        id: 'tome',
        name: 'Tome',
        category: 'presentation',
        description: 'AI-powered presentation creator with dynamic storytelling.',
        longDescription: 'Tome uses AI to help create engaging presentations with automatic layout suggestions and content generation.',
        url: 'https://tome.app',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features',
            paid: '$10/month for premium features'
        },
        tags: ['presentations', 'storytelling', 'design'],
        rating: 4.4,
        usersCount: '500K+'
    },
    {
        id: 'descript',
        name: 'Descript',
        category: 'audio',
        description: 'AI-powered audio and video editing platform.',
        longDescription: 'Descript offers innovative audio and video editing features including text-based editing and AI voice cloning.',
        url: 'https://www.descript.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with watermark',
            paid: 'Starting at $12/month'
        },
        tags: ['audio editing', 'video editing', 'transcription'],
        rating: 4.7,
        usersCount: '2M+'
    },
    {
        id: 'copy-ai',
        name: 'Copy.ai',
        category: 'text',
        description: 'AI copywriting tool for marketing and content.',
        longDescription: 'Copy.ai helps create marketing copy, social media posts, and various types of content using advanced AI.',
        url: 'https://www.copy.ai',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: '2000 words/month',
            paid: 'Starting at $36/month'
        },
        tags: ['copywriting', 'marketing', 'content'],
        rating: 4.5,
        usersCount: '750K+'
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        category: 'image',
        description: 'Open-source AI image generation model.',
        longDescription: 'Stable Diffusion is a powerful open-source image generation model available through various interfaces and implementations.',
        url: 'https://stability.ai',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Open-source version',
            paid: 'Various paid implementations'
        },
        tags: ['image generation', 'art', 'open-source'],
        rating: 4.6,
        usersCount: '10M+'
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        category: 'audio',
        description: 'High-quality AI voice generation and cloning.',
        longDescription: 'ElevenLabs offers state-of-the-art voice synthesis and cloning capabilities with emotional control.',
        url: 'https://elevenlabs.io',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Limited characters/month',
            paid: 'Starting at $5/month'
        },
        tags: ['voice synthesis', 'voice cloning', 'text-to-speech'],
        rating: 4.8,
        usersCount: '1M+'
    },
    {
        id: 'gamma',
        name: 'Gamma',
        category: 'presentation',
        description: 'AI-powered presentation and document creation platform.',
        longDescription: 'Gamma helps create beautiful presentations and documents with AI-assisted design and content generation.',
        url: 'https://gamma.app',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features',
            paid: '$10/month for premium'
        },
        tags: ['presentations', 'documents', 'design'],
        rating: 4.5,
        usersCount: '300K+'
    },
    {
        id: 'firefly',
        name: 'Adobe Firefly',
        category: 'image',
        description: "Adobe's AI image generation and editing tools.",
        longDescription: "Firefly offers AI-powered creative tools integrated with Adobe's Creative Cloud suite.",
        url: 'https://firefly.adobe.com',
        isNew: true,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Limited generations',
            paid: 'Part of Creative Cloud subscription'
        },
        tags: ['image generation', 'creative', 'editing'],
        rating: 4.7,
        usersCount: '5M+'
    },
     {
        id: 'notion',
        name: 'Notion',
        category: 'productivity',
        description: 'All-in-one workspace for notes, tasks, databases, and collaboration.',
        longDescription: 'Notion integrates note-taking, task management, databases, and collaboration features in a single platform, making it ideal for personal and professional use.',
        url: 'https://www.notion.so',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Personal use with basic features',
            paid: 'Starting at $4/month for advanced features and collaboration'
        },
        tags: ['notes', 'tasks', 'databases', 'collaboration'],
        rating: 4.8,
        usersCount: '20M+'
    },
    {
        id: 'figma',
        name: 'Figma',
        category: 'design',
        description: 'Collaborative interface design tool for teams.',
        longDescription: 'Figma offers a powerful and collaborative design tool for creating user interfaces, prototypes, and design systems, with real-time collaboration features.',
        url: 'https://www.figma.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with limited projects',
            paid: 'Starting at $12/month for professional features'
        },
        tags: ['design', 'prototyping', 'collaboration'],
        rating: 4.9,
        usersCount: '10M+'
    },
    {
        id: 'canva',
        name: 'Canva',
        category: 'design',
        description: 'Easy-to-use graphic design tool for creating social media graphics, presentations, and more.',
        longDescription: 'Canva offers a user-friendly platform for creating a wide range of visual content, including social media graphics, presentations, posters, and more, with a vast library of templates and assets.',
        url: 'https://www.canva.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with access to free templates and assets',
            paid: 'Starting at $12.95/month for Canva Pro'
        },
        tags: ['graphic design', 'social media', 'templates', 'visual content'],
        rating: 4.7,
        usersCount: '50M+'
    },
    {
        id: 'slack',
        name: 'Slack',
        category: 'communication',
        description: 'Team communication and collaboration platform.',
        longDescription: 'Slack provides a platform for team communication and collaboration through channels, direct messaging, and integrations with other tools and services.',
        url: 'https://slack.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with message history limit',
            paid: 'Starting at $6.67/month per user for standard plan'
        },
        tags: ['communication', 'collaboration', 'messaging', 'team'],
        rating: 4.6,
        usersCount: '12M+'
    },
    {
        id: 'trello',
        name: 'Trello',
        category: 'productivity',
        description: 'Visual project management and task tracking tool.',
        longDescription: 'Trello uses boards, lists, and cards to help teams organize and prioritize projects in a visually appealing and easy-to-use interface.',
        url: 'https://trello.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with unlimited cards and lists',
            paid: 'Starting at $5/month per user for business class features'
        },
        tags: ['project management', 'task tracking', 'visual organization'],
        rating: 4.7,
        usersCount: '10M+'
    },
    {
        id: 'monday',
        name: 'Monday.com',
        category: 'productivity',
        description: 'Work operating system to manage teams and projects.',
        longDescription: 'Monday.com provides a flexible platform to manage workflows, projects, and team collaboration with customizable templates and powerful automation features.',
        url: 'https://monday.com',
        isNew: false,
        pricing: 'paid',
        pricingDetails: {
            paid: 'Starting at $8/month per user'
        },
        tags: ['project management', 'team collaboration', 'workflow automation'],
        rating: 4.6,
        usersCount: '8M+'
    },
    {
        id: 'airtable',
        name: 'Airtable',
        category: 'database',
        description: 'Flexible and powerful database tool with a spreadsheet interface.',
        longDescription: 'Airtable combines the simplicity of a spreadsheet with the power of a database, allowing users to organize and manage various types of data with rich features and integrations.',
        url: 'https://airtable.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with limited records and attachment space',
            paid: 'Starting at $10/month per user for more advanced features'
        },
        tags: ['database', 'spreadsheet', 'project management', 'collaboration'],
        rating: 4.8,
        usersCount: '5M+'
    },
    {
        id: 'loom',
        name: 'Loom',
        category: 'video',
        description: 'Video messaging tool for work.',
        longDescription: 'Loom allows users to quickly record and share video messages with their team, offering a more personal and efficient way to communicate asynchronously.',
        url: 'https://www.loom.com',
        isNew: false,
        pricing: 'freemium',
        pricingDetails: {
            free: 'Basic features with limited recording time',
            paid: 'Starting at $8/month per user for pro features'
        },
        tags: ['video messaging', 'communication', 'screen recording'],
        rating: 4.6,
        usersCount: '2M+'
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