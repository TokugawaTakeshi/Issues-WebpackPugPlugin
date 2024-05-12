import PugLexer from "pug-lexer";


const pugAstLoader: (source: string) => PugLexer.Token[] | null = function(source: string): PugLexer.Token[] | null {

  try {

    const tokens: PugLexer.Token[] = PugLexer("div test");

    return tokens;

  } catch {

    return null;

  }
};


export default pugAstLoader;
