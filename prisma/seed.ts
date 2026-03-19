import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const articles = [
    {
      title: "Artificial Intelligence in Cancer Research and Precision Medicine",
      category: "Clinical AI",
      authorName: "Bhinder B, Gilvary C, Madhukar NS, Elemento O",
      sourceUrl: "https://doi.org/10.1158/2159-8290.CD-21-0090",
      fullContent: `Artificial intelligence (AI) is rapidly reshaping cancer research and personalized clinical care. Availability of high-dimensionality datasets coupled with advances in high-performance computing, as well as innovative deep learning architectures, has led to an explosion of AI use in various aspects of oncology research.

These applications range from detection and classification of cancer, to molecular characterization of tumors and their microenvironment, to drug discovery and repurposing, to predicting treatment outcomes for patients. As these advances start penetrating the clinic, we foresee a shifting paradigm in cancer care becoming strongly driven by AI.

AI has the potential to dramatically affect nearly all aspects of oncology — from enhancing diagnosis to personalizing treatment and discovering novel anticancer drugs. The review covers the recent enormous progress in the application of AI to oncology, highlights limitations and pitfalls, and charts a path for adoption of AI in the cancer clinic.

Deep learning models trained on histopathology images can now identify cancer subtypes, predict genetic mutations, and even forecast patient outcomes directly from digitized tissue slides. Convolutional neural networks have demonstrated the ability to detect features invisible to human pathologists, opening new avenues for precision diagnostics.

In drug discovery, AI-driven approaches are accelerating the identification of novel therapeutic targets and the design of candidate molecules. Generative models and reinforcement learning algorithms can explore vast chemical spaces efficiently, identifying compounds with desired pharmacological properties while minimizing toxicity risks.

The integration of multi-omics data — genomics, transcriptomics, proteomics, and metabolomics — through AI frameworks enables a systems-level understanding of tumor biology. This holistic approach supports the development of combination therapies tailored to individual patients based on their unique molecular profiles.

Despite these promising advances, significant challenges remain. Data quality and standardization across institutions, model interpretability, regulatory approval pathways, and equitable access to AI-powered tools are critical issues that the oncology community must address to realize the full potential of AI in cancer care.

Published in Cancer Discovery (2021). Source: PubMed PMID 33811123.`,
      mediumSummary: `AI is rapidly reshaping cancer research and clinical care. Applications span from cancer detection and classification to molecular characterization, drug discovery, and predicting treatment outcomes.

Deep learning models can now identify cancer subtypes and predict genetic mutations directly from tissue slides, while AI-driven drug discovery accelerates identification of novel therapeutic targets. Multi-omics integration through AI enables systems-level understanding of tumor biology.

Significant challenges remain around data standardization, model interpretability, and equitable access. The review charts a path for AI adoption in oncology. Published in Cancer Discovery (2021).

Source: PubMed PMID 33811123.`,
      shortSummary: `A comprehensive review in Cancer Discovery covering how AI is transforming oncology — from cancer detection and molecular characterization to drug discovery and treatment prediction. Published by Bhinder et al. (2021). Source: PubMed PMID 33811123.`,
      imageUrl: "https://placehold.co/800x450/0D7377/FFFFFF?text=AI+in+Oncology",
    },
    {
      title: "Transfer Learning Enables Predictions in Network Biology for Rare Diseases",
      category: "Drug Discovery",
      authorName: "Theodoris CV, Xiao L, Chopra A, et al.",
      sourceUrl: "https://doi.org/10.1038/s41586-023-06139-9",
      fullContent: `Mapping gene networks requires large amounts of transcriptomic data to learn the connections between genes, which impedes discoveries in settings with limited data, including rare diseases and diseases affecting underrepresented populations.

This study presents Geneformer, a foundation transformer model pretrained on approximately 30 million single-cell transcriptomes. The model enables context-specific predictions in settings with limited data, including rare diseases, through transfer learning.

Geneformer was pretrained on a large-scale corpus of single-cell transcriptomic data to gain a fundamental understanding of network dynamics. This pretrained model can then be fine-tuned toward a broad range of downstream tasks with limited task-specific data, similar to how large language models are pretrained on text corpora and then applied to specific tasks.

The researchers demonstrated that Geneformer can identify candidate therapeutic targets for diseases with limited available data by leveraging the broader biological knowledge encoded during pretraining. This approach is particularly valuable for rare diseases where traditional computational methods fail due to insufficient training samples.

In disease modeling experiments, Geneformer successfully predicted genes whose perturbation could shift diseased cells toward healthy states. These predictions were validated through in silico perturbation experiments and comparison with known therapeutic targets.

The model's ability to perform zero-shot and few-shot learning on novel cell types and disease contexts represents a significant advance for rare disease research. By transferring knowledge from well-studied contexts to data-poor settings, Geneformer opens new pathways for drug target identification across thousands of rare conditions.

The architecture leverages attention mechanisms to learn gene-gene interactions in a context-dependent manner, capturing how network relationships change across different cell types and disease states. This contextual understanding distinguishes it from traditional gene co-expression approaches.

Published in Nature (2023). Source: PubMed PMID 37258680.`,
      mediumSummary: `Geneformer is a foundation transformer model pretrained on ~30 million single-cell transcriptomes that enables predictions in settings with limited data, including rare diseases.

The model can identify candidate therapeutic targets by transferring knowledge from well-studied contexts to data-poor settings. It successfully predicted genes whose perturbation could shift diseased cells toward healthy states, validated through in silico experiments.

This zero-shot and few-shot learning capability represents a major advance for rare disease drug discovery where traditional methods fail due to insufficient data. Published in Nature (2023).

Source: PubMed PMID 37258680.`,
      shortSummary: `Geneformer, a transformer model pretrained on 30 million single-cell transcriptomes, enables drug target discovery for rare diseases through transfer learning — even with very limited disease-specific data. Published in Nature (2023). Source: PubMed PMID 37258680.`,
      imageUrl: "https://placehold.co/800x450/84C318/FFFFFF?text=Drug+Discovery+AI",
    },
    {
      title: "Clinically Applicable Deep Learning for Diagnosis and Referral in Retinal Disease",
      category: "Medical Imaging",
      authorName: "De Fauw J, Ledsam JR, Romera-Paredes B, et al.",
      sourceUrl: "https://doi.org/10.1038/s41591-018-0107-6",
      fullContent: `The volume and complexity of diagnostic imaging is increasing at a pace faster than the availability of human expertise to interpret it. Artificial intelligence has shown great promise in classifying two-dimensional photographs of the retina, but the application to three-dimensional optical coherence tomography (OCT) scans has been more challenging.

This study, a collaboration between DeepMind and Moorfields Eye Hospital, presents a deep learning system that can recommend the correct referral decision for over 50 eye diseases with performance matching or exceeding that of expert ophthalmologists.

The system uses a novel two-stage architecture. The first network creates a detailed tissue segmentation map from the raw OCT scan, identifying the precise location and extent of pathological features. The second network then uses this segmentation map to make referral recommendations. This approach provides a degree of clinical interpretability absent from most deep learning systems.

In a clinical validation involving 997 patients, the system achieved a referral accuracy of 94.5%, with performance matching two senior retinal specialists. The error rate was comparable to that of human experts, and critically, the system maintained this level of performance across OCT scans from different device manufacturers.

The implications for global eye health are substantial. With an estimated 285 million people worldwide suffering from visual impairment and a severe shortage of ophthalmologists in developing nations, AI-powered screening could dramatically improve early detection of treatable conditions such as diabetic retinopathy, age-related macular degeneration, and glaucoma.

The interpretable segmentation maps generated by the first stage provide clinicians with transparent evidence for the system's recommendations, addressing a key concern about the clinical deployment of black-box AI models.

The framework demonstrates how AI systems can be designed to be both high-performing and clinically interpretable, setting a standard for the development of medical AI tools across specialties.

Published in Nature Medicine (2018). Source: PubMed PMID 30104768.`,
      mediumSummary: `A deep learning system developed by DeepMind and Moorfields Eye Hospital can recommend correct referral decisions for over 50 eye diseases from OCT scans, matching expert ophthalmologists at 94.5% accuracy.

The two-stage architecture first creates an interpretable tissue segmentation map, then uses it for referral recommendations — providing clinical transparency unlike typical black-box models.

With 285 million people suffering visual impairment worldwide and a shortage of ophthalmologists, this AI screening approach could dramatically improve early detection. Published in Nature Medicine (2018).

Source: PubMed PMID 30104768.`,
      shortSummary: `DeepMind's deep learning system diagnoses 50+ retinal diseases from OCT scans at 94.5% accuracy, matching expert ophthalmologists, using an interpretable two-stage architecture. Published in Nature Medicine (2018). Source: PubMed PMID 30104768.`,
      imageUrl: "https://placehold.co/800x450/0D7377/FFFFFF?text=Retinal+AI",
    },
    {
      title: "COVID-19 Triage in the Emergency Department: How Analytics and AI Transform Clinical Pathways",
      category: "AI Ethics",
      authorName: "Bartenschlager CC, Grieger M, Erbach R, et al.",
      sourceUrl: "https://doi.org/10.1007/s10729-023-09647-2",
      fullContent: `The Covid-19 pandemic pushed many hospitals to their capacity limits, sparking renewed debate about the ethics and methodology of patient triage in emergency departments. This study examines how analytics and AI can transform triage algorithms originally designed by human experts.

Traditional triage in emergency departments relies on experienced clinical staff who assess patients based on vital signs, symptoms, and clinical judgment. During the pandemic, this process was further complicated by the need to rapidly distinguish COVID-positive patients, assess severity, and allocate scarce resources like ventilators and ICU beds.

The researchers developed and validated an AI-enhanced triage system that analyzes patient data including vital signs, laboratory results, comorbidities, and imaging findings to predict clinical pathways — specifically whether patients would require ICU admission, ward-level care, or could be safely discharged.

The study found that the AI-augmented triage model significantly outperformed the original human-designed algorithm in predicting patient outcomes, achieving higher accuracy in identifying high-risk patients who required intensive care while reducing unnecessary ICU admissions.

However, the research also highlights critical ethical considerations. Algorithmic decision-making in emergency settings raises questions about accountability when errors occur, the potential for bias in training data reflecting historical disparities in care, and the tension between algorithmic efficiency and individual patient rights.

The authors emphasize that AI triage tools should augment rather than replace clinical judgment. They advocate for transparent model design, regular auditing for bias, and clear governance frameworks that define the roles and responsibilities of both AI systems and human clinicians in the decision-making process.

The study demonstrates that while AI can meaningfully improve triage accuracy and resource allocation during health crises, careful attention to ethical guardrails is essential to ensure equitable and trustworthy deployment.

Published in Health Care Management Science (2023). Source: PubMed PMID 37428304.`,
      mediumSummary: `This study examines how AI can transform emergency department triage during the COVID-19 pandemic, finding that AI-augmented models significantly outperformed human-designed algorithms in predicting patient outcomes and ICU needs.

However, the research highlights critical ethical concerns: algorithmic accountability, training data bias reflecting care disparities, and tension between efficiency and patient rights.

The authors advocate for AI triage tools that augment rather than replace clinical judgment, with transparent design and regular bias auditing. Published in Health Care Management Science (2023).

Source: PubMed PMID 37428304.`,
      shortSummary: `An AI-enhanced triage system outperformed human-designed algorithms in predicting COVID-19 patient outcomes, but raises important ethical questions about algorithmic bias and accountability. Published in Health Care Management Science (2023). Source: PubMed PMID 37428304.`,
      imageUrl: "https://placehold.co/800x450/84C318/FFFFFF?text=AI+Triage+Ethics",
    },
    {
      title: "Large-Scale Assessment of a Smartwatch to Identify Atrial Fibrillation",
      category: "Wearables & Diagnostics",
      authorName: "Perez MV, Mahaffey KW, Hedlin H, et al.",
      sourceUrl: "https://doi.org/10.1056/NEJMoa1901183",
      fullContent: `Optical sensors on commercial smartwatches can detect irregular pulses, but the ability of a smartwatch application to identify atrial fibrillation during typical use was previously unknown. This landmark Apple Heart Study enrolled 419,297 participants to evaluate a smartwatch-based irregular pulse notification algorithm.

Participants who did not have a prior diagnosis of atrial fibrillation wore an Apple Watch, which used its optical heart rate sensor and a proprietary algorithm to identify episodes of irregular pulse. Those who received notifications were sent ambulatory electrocardiography patches for clinical confirmation.

Among the 419,297 participants, 2,161 (0.52%) received irregular pulse notifications over a median monitoring period of 117 days. Among those who received notifications and subsequently wore ECG patches, 34% had atrial fibrillation confirmed on the patch recordings. The positive predictive value of the irregular pulse notification was 84% among those concurrently on the ECG patch.

The study demonstrated that a smartwatch-based algorithm can identify previously undiagnosed atrial fibrillation in a large population during routine daily use. Given that atrial fibrillation affects more than 33 million people worldwide and is a leading risk factor for stroke, early detection has significant clinical implications.

Notably, 57% of participants who received notifications sought medical attention, suggesting high engagement with the technology. The low overall notification rate (0.52%) indicates that the algorithm prioritizes specificity, minimizing false alarms.

The results highlight both the promise and limitations of consumer-grade wearable monitoring. While the technology can successfully identify at-risk individuals, the study was limited by the relatively young and healthy study population and the need for subsequent clinical confirmation of any detected arrhythmia.

This was the largest study to evaluate a commercially available wearable device for atrial fibrillation detection, establishing the Apple Watch as a viable screening tool and paving the way for future integration of wearable devices into preventive cardiac care.

Published in The New England Journal of Medicine (2019). Source: PubMed PMID 31722151.`,
      mediumSummary: `The Apple Heart Study — the largest evaluation of a commercial smartwatch for atrial fibrillation detection — enrolled 419,297 participants. Of those, 0.52% received irregular pulse notifications, with 34% confirmed as atrial fibrillation on follow-up ECG patches.

The positive predictive value was 84% among participants concurrently wearing ECG patches, and 57% of notified participants sought medical attention, showing high user engagement.

The study establishes smartwatches as viable screening tools for AFib, though limitations include a young study population and need for clinical confirmation. Published in NEJM (2019).

Source: PubMed PMID 31722151.`,
      shortSummary: `The Apple Heart Study (419,297 participants) found that smartwatch irregular pulse notifications identified atrial fibrillation with 84% positive predictive value — the largest evaluation of wearable AFib detection. Published in NEJM (2019). Source: PubMed PMID 31722151.`,
      imageUrl: "https://placehold.co/800x450/0D7377/FFFFFF?text=Smartwatch+AFib",
    },
    {
      title: "Artificial Intelligence in Neurology: Opportunities, Challenges, and Policy Implications",
      category: "Policy & Regulation",
      authorName: "Voigtlaender S, Pawelczyk J, Geiger M, et al.",
      sourceUrl: "https://doi.org/10.1007/s00415-024-12220-8",
      fullContent: `Neurological conditions are the leading cause of disability and mortality combined, demanding innovative, scalable, and sustainable solutions. Brain health has become a global priority with adoption of the World Health Organization's Intersectoral Global Action Plan in 2022. Simultaneously, rapid advancements in artificial intelligence (AI) are revolutionizing neurological research and practice.

This scoping review of 66 original articles explores the value of AI in neurology and brain health, systematizing the landscape for emergent clinical opportunities and future trends across the care trajectory: prevention, risk stratification, early detection, diagnosis, management, and rehabilitation.

The review identifies AI's potential to advance personalized precision neurology and global brain health directives, but highlights that this potential hinges on resolving core challenges across four pillars: models, data, feasibility and equity, and regulation and innovation.

On the regulatory front, the authors emphasize that current governance frameworks are insufficient for the pace of AI development in healthcare. They call for robust regulatory frameworks that balance safety with innovation, allowing beneficial AI tools to reach patients while maintaining appropriate oversight.

Key policy recommendations include swift but ethical integration of novel technologies into clinical workflows, mitigation of data-related issues including bias and privacy concerns, active efforts to counteract digital inequity gaps, and establishing governance frameworks that balance patient safety with the need for continued innovation.

The review highlights that while AI shows remarkable promise across the neurological care continuum, equitable access remains a critical concern. High-income countries are disproportionately driving AI development, risking a widening gap in neurological care quality between wealthy and resource-limited settings.

The authors argue that international coordination on AI governance, similar to efforts in drug regulation, is essential to ensure that AI benefits in neurology are globally distributed. They propose a framework linking technical standards, ethical guidelines, and regulatory pathways into a coherent governance structure.

Published in Journal of Neurology (2024). Source: PubMed PMID 38367046.`,
      mediumSummary: `This scoping review of 66 articles examines AI's role in neurology across the full care trajectory — from prevention and early detection to management and rehabilitation — while addressing critical policy implications.

The authors identify four pillars of challenge: models, data, feasibility/equity, and regulation/innovation. Current governance frameworks are insufficient for the pace of AI development in healthcare.

Key recommendations include ethical technology integration, mitigation of data bias, efforts against digital inequity, and international regulatory coordination. Published in Journal of Neurology (2024).

Source: PubMed PMID 38367046.`,
      shortSummary: `A review of AI in neurology calling for robust governance frameworks across four pillars: models, data, equity, and regulation — emphasizing international coordination to ensure AI benefits reach all populations. Published in J Neurol (2024). Source: PubMed PMID 38367046.`,
      imageUrl: "https://placehold.co/800x450/84C318/FFFFFF?text=AI+Policy",
    },
    {
      title: "Federated Learning for Medical Imaging Radiology",
      category: "Clinical AI",
      authorName: "Rehman MHU, Hugo Lopez Pinaya W, Nachev P, et al.",
      sourceUrl: "https://doi.org/10.1259/bjr.20220890",
      fullContent: `Federated learning (FL) is gaining wide acceptance across medical AI domains. FL promises to provide fairly acceptable clinical-grade accuracy, privacy, and generalizability of machine learning models trained across multiple institutions without sharing raw patient data.

Traditional machine learning in medical imaging requires centralizing data from multiple hospitals, which poses significant privacy risks and often violates data protection regulations such as HIPAA and GDPR. Federated learning addresses this fundamental challenge by keeping data at its source institution and instead sharing model parameters during collaborative training.

This comprehensive review systematizes the growing body of federated learning research in medical imaging radiology. The authors analyze the technical architectures, aggregation strategies, and communication protocols used across different FL implementations in healthcare settings.

Key findings indicate that federated models can achieve performance within a small margin of centrally trained models while maintaining complete data privacy. In brain tumor segmentation, chest X-ray classification, and mammography screening, federated approaches have demonstrated robust performance across diverse institutional datasets and imaging equipment.

The review identifies several critical challenges. Communication overhead between participating sites can significantly slow training, particularly when hospitals have varying network capabilities. Heterogeneity in data quality, imaging protocols, and patient demographics across institutions (known as non-IID data) requires sophisticated aggregation strategies beyond simple parameter averaging.

Privacy considerations extend beyond raw data sharing. The authors note that model updates transmitted during federated training can, under certain conditions, leak information about training data. They review emerging solutions including differential privacy, secure aggregation, and homomorphic encryption that address these residual risks.

The paper also examines the practical and regulatory landscape for deploying federated learning in clinical radiology, noting that while the technology is maturing rapidly, standardized frameworks for multi-institutional governance and regulatory approval of federated models are still needed.

Published in The British Journal of Radiology (2023). Source: PubMed PMID 38011227.`,
      mediumSummary: `This review covers federated learning in medical imaging — an approach that trains AI models across multiple hospitals without sharing patient data, addressing privacy regulations like HIPAA and GDPR.

Federated models achieve performance near centrally trained models in brain tumor segmentation, chest X-ray classification, and mammography. Key challenges include communication overhead, data heterogeneity across institutions, and residual privacy risks from model updates.

Standardized governance frameworks and regulatory pathways for federated models are still needed. Published in British Journal of Radiology (2023).

Source: PubMed PMID 38011227.`,
      shortSummary: `A comprehensive review of federated learning in medical imaging — enabling multi-hospital AI training without sharing patient data, achieving near-central model performance while preserving privacy. Published in BJR (2023). Source: PubMed PMID 38011227.`,
      imageUrl: "https://placehold.co/800x450/0D7377/FFFFFF?text=Federated+Learning",
    },
    {
      title: "Artificial Intelligence: The Future for Diabetes Care",
      category: "Wearables & Diagnostics",
      authorName: "Ellahham S",
      sourceUrl: "https://doi.org/10.1016/j.amjmed.2020.03.033",
      fullContent: `Artificial intelligence (AI) is a fast-growing field and its applications to diabetes, a global pandemic, can reform the approach to diagnosis and management of this chronic condition. Principles of machine learning and AI have the potential to transform glucose monitoring, insulin delivery, and overall diabetes management.

Continuous glucose monitoring (CGM) devices generate vast amounts of time-series data that are ideally suited for machine learning analysis. AI algorithms can identify patterns in glucose fluctuations that correlate with meals, physical activity, stress, and sleep, enabling predictive models that forecast blood glucose levels 30 to 60 minutes into the future.

These predictive capabilities are transforming the concept of the artificial pancreas — closed-loop systems that combine continuous glucose sensing with automated insulin delivery. AI-driven control algorithms can anticipate glucose trends and proactively adjust insulin dosing, reducing both hyperglycemic and hypoglycemic events compared to reactive threshold-based systems.

Machine learning models trained on retinal fundus photographs have demonstrated the ability to screen for diabetic retinopathy with accuracy comparable to ophthalmologists, potentially enabling automated screening at primary care clinics. Similar approaches are being developed for diabetic nephropathy and neuropathy screening.

The integration of data from multiple wearable sensors — glucose monitors, accelerometers, heart rate monitors, and sleep trackers — creates rich multimodal datasets. AI systems that fuse these data streams can provide more accurate and personalized recommendations for lifestyle modifications and medication timing.

However, the adoption of AI in diabetes care faces challenges including regulatory approval pathways for adaptive algorithms, data privacy concerns with continuous monitoring, the digital divide affecting access to smart devices, and the need for clinical validation across diverse patient populations.

The convergence of AI with diabetes technology represents one of the most mature applications of medical AI, with several FDA-approved systems already in clinical use and many more in development.

Published in The American Journal of Medicine (2020). Source: PubMed PMID 32325045.`,
      mediumSummary: `AI applications in diabetes care include predictive glucose monitoring (forecasting levels 30-60 minutes ahead), artificial pancreas systems with AI-driven insulin dosing, and automated screening for diabetic retinopathy from retinal images.

Integration of data from multiple wearable sensors creates rich datasets for personalized lifestyle and medication recommendations. Several FDA-approved AI diabetes systems are already in clinical use.

Challenges include regulatory approval for adaptive algorithms, data privacy, the digital divide, and validation across diverse populations. Published in American Journal of Medicine (2020).

Source: PubMed PMID 32325045.`,
      shortSummary: `AI is transforming diabetes care through predictive glucose monitoring, automated insulin delivery, and retinopathy screening — with several FDA-approved systems already in use. Published in Am J Med (2020). Source: PubMed PMID 32325045.`,
      imageUrl: "https://placehold.co/800x450/84C318/FFFFFF?text=AI+Diabetes",
    },
  ];

  console.log("Seeding database...");

  for (const article of articles) {
    await prisma.article.create({ data: article });
  }

  console.log(`Seeded ${articles.length} articles.`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
