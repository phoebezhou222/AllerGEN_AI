export class GroqService {
  private apiKey: string;
  private baseUrl: string = 'https://api.groq.com/openai/v1/chat/completions';

  constructor() {
    this.apiKey = process.env.REACT_APP_GROQ_API_KEY || '';
  }

  async generateSummary(prompt: string): Promise<string> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.3,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || 'Unable to generate summary';
    } catch (error) {
      console.error('Error generating summary:', error);
      return 'Error generating summary';
    }
  }

  async analyzeIngredient(prompt: string): Promise<string> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.3,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || 'Unable to analyze ingredient';
    } catch (error) {
      console.error('Error analyzing ingredient:', error);
      return 'Error analyzing ingredient';
    }
  }

  // Static methods for backward compatibility
  static async analyzeLogIngredients(docId: string, ingredients: string[], symptoms: string[], severity?: number, environmentalCause?: string): Promise<string> {
    const service = new GroqService();
    const prompt = `Analyze these ingredients: ${ingredients.join(', ')} in relation to symptoms: ${symptoms.join(', ')}${severity ? ` with severity ${severity}` : ''}${environmentalCause ? ` and environmental cause: ${environmentalCause}` : ''}. Provide a brief analysis.`;
    return service.analyzeIngredient(prompt);
  }

  static async analyzeIngredient(ingredient: string, allergen?: any): Promise<string> {
    const service = new GroqService();
    let allergenInfo = '';
    if (allergen) {
      if (typeof allergen === 'string') {
        allergenInfo = ` in relation to allergen: ${allergen}`;
      } else if (typeof allergen === 'object' && allergen.ingredient) {
        allergenInfo = ` in relation to allergen: ${allergen.ingredient}`;
      }
    }
    const prompt = `Analyze the ingredient: ${ingredient}${allergenInfo}. Provide a brief analysis.`;
    return service.analyzeIngredient(prompt);
  }

  static async generateFinalReport(analyses: any[], logs: any[]): Promise<string> {
    const service = new GroqService();
    const prompt = `Generate a final comprehensive allergy report based on ${logs.length} logs and ${analyses.length} analyses.`;
    return service.generateSummary(prompt);
  }

  static async analyzeRiskLevel(ingredient: string): Promise<number> {
    const service = new GroqService();
    const prompt = `Analyze the allergy risk level for ingredient: ${ingredient}. Return only a number between 0-100 where 0-30 is Low, 31-70 is Medium, and 71-100 is High.`;
    const response = await service.analyzeIngredient(prompt);
    const numberMatch = response.match(/\d+/);
    if (numberMatch) {
      const num = parseInt(numberMatch[0]);
      return Math.min(Math.max(num, 0), 100);
    }
    return 50;
  }

  static async generateOverallSummary(allergens: any[], logCount: number): Promise<string> {
    const service = new GroqService();
    const allergenNames = allergens.map(a => (typeof a === 'string' ? a : a.ingredient)).join(', ');
    const prompt = `Generate an overall allergy summary based on ${logCount} logs and top allergens: ${allergenNames}.`;
    return service.generateSummary(prompt);
  }

  static async generateTestKitSuggestions(allergens: any[]): Promise<string> {
    const service = new GroqService();
    const allergenNames = allergens.map(a => (typeof a === 'string' ? a : a.ingredient)).join(', ');
    const prompt = `Suggest allergy test kits for these allergens: ${allergenNames}.`;
    return service.generateSummary(prompt);
  }

  static async generateChatbotResponse(message: string, logs: any[], allergens: any[], overallSummary?: string, testKitSuggestions?: string): Promise<string> {
    const service = new GroqService();
    const allergenNames = allergens.map(a => (typeof a === 'string' ? a : a.ingredient)).join(', ');
    const prompt = `Respond to user question: "${message}" based on their allergy logs and allergens: ${allergenNames}${overallSummary ? `, overall summary: ${overallSummary}` : ''}${testKitSuggestions ? `, and test kit suggestions: ${testKitSuggestions}` : ''}.`;
    return service.generateSummary(prompt);
  }

  static async analyzeClinicalSymptoms(symptoms: string[], symptomDesc: string, timeSinceCondition: string): Promise<string> {
    const service = new GroqService();
    const prompt = `Analyze these clinical symptoms: ${symptoms.join(', ')} with description: "${symptomDesc}" occurring ${timeSinceCondition}.`;
    return service.generateSummary(prompt);
  }

  static async extractIngredients(ingredientsText: string): Promise<string> {
    const service = new GroqService();
    const prompt = `Extract and list all ingredients from this text: "${ingredientsText}". Return only the ingredient names, separated by commas.`;
    return service.analyzeIngredient(prompt);
  }
} 