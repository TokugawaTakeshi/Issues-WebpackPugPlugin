import PugLexer from "pug-lexer";
import generatePugAST from "pug-parser";


const pugAstLoader: (source: string) => string | null = function(source: string): string | null {

  try {

    const tokens: PugLexer.Token[] = PugLexer("div test");
    const AST = generatePugAST(tokens, { filename: "Test.pug", src: source });

    return JSON.stringify(AST);

  } catch (error: unknown) {

    console.error(error);

    return null;

  }
};


export default pugAstLoader;
