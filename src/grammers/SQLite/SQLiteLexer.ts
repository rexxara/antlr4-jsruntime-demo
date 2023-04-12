// Generated from SQLiteLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class SQLiteLexer extends Lexer {
	public static readonly SCOL = 1;
	public static readonly DOT = 2;
	public static readonly OPEN_PAR = 3;
	public static readonly CLOSE_PAR = 4;
	public static readonly COMMA = 5;
	public static readonly ASSIGN = 6;
	public static readonly STAR = 7;
	public static readonly PLUS = 8;
	public static readonly MINUS = 9;
	public static readonly TILDE = 10;
	public static readonly PIPE2 = 11;
	public static readonly DIV = 12;
	public static readonly MOD = 13;
	public static readonly LT2 = 14;
	public static readonly GT2 = 15;
	public static readonly AMP = 16;
	public static readonly PIPE = 17;
	public static readonly LT = 18;
	public static readonly LT_EQ = 19;
	public static readonly GT = 20;
	public static readonly GT_EQ = 21;
	public static readonly EQ = 22;
	public static readonly NOT_EQ1 = 23;
	public static readonly NOT_EQ2 = 24;
	public static readonly ABORT_ = 25;
	public static readonly ACTION_ = 26;
	public static readonly ADD_ = 27;
	public static readonly AFTER_ = 28;
	public static readonly ALL_ = 29;
	public static readonly ALTER_ = 30;
	public static readonly ANALYZE_ = 31;
	public static readonly AND_ = 32;
	public static readonly AS_ = 33;
	public static readonly ASC_ = 34;
	public static readonly ATTACH_ = 35;
	public static readonly AUTOINCREMENT_ = 36;
	public static readonly BEFORE_ = 37;
	public static readonly BEGIN_ = 38;
	public static readonly BETWEEN_ = 39;
	public static readonly BY_ = 40;
	public static readonly CASCADE_ = 41;
	public static readonly CASE_ = 42;
	public static readonly CAST_ = 43;
	public static readonly CHECK_ = 44;
	public static readonly COLLATE_ = 45;
	public static readonly COLUMN_ = 46;
	public static readonly COMMIT_ = 47;
	public static readonly CONFLICT_ = 48;
	public static readonly CONSTRAINT_ = 49;
	public static readonly CREATE_ = 50;
	public static readonly CROSS_ = 51;
	public static readonly CURRENT_DATE_ = 52;
	public static readonly CURRENT_TIME_ = 53;
	public static readonly CURRENT_TIMESTAMP_ = 54;
	public static readonly DATABASE_ = 55;
	public static readonly DEFAULT_ = 56;
	public static readonly DEFERRABLE_ = 57;
	public static readonly DEFERRED_ = 58;
	public static readonly DELETE_ = 59;
	public static readonly DESC_ = 60;
	public static readonly DETACH_ = 61;
	public static readonly DISTINCT_ = 62;
	public static readonly DROP_ = 63;
	public static readonly EACH_ = 64;
	public static readonly ELSE_ = 65;
	public static readonly END_ = 66;
	public static readonly ESCAPE_ = 67;
	public static readonly EXCEPT_ = 68;
	public static readonly EXCLUSIVE_ = 69;
	public static readonly EXISTS_ = 70;
	public static readonly EXPLAIN_ = 71;
	public static readonly FAIL_ = 72;
	public static readonly FOR_ = 73;
	public static readonly FOREIGN_ = 74;
	public static readonly FROM_ = 75;
	public static readonly FULL_ = 76;
	public static readonly GLOB_ = 77;
	public static readonly GROUP_ = 78;
	public static readonly HAVING_ = 79;
	public static readonly IF_ = 80;
	public static readonly IGNORE_ = 81;
	public static readonly IMMEDIATE_ = 82;
	public static readonly IN_ = 83;
	public static readonly INDEX_ = 84;
	public static readonly INDEXED_ = 85;
	public static readonly INITIALLY_ = 86;
	public static readonly INNER_ = 87;
	public static readonly INSERT_ = 88;
	public static readonly INSTEAD_ = 89;
	public static readonly INTERSECT_ = 90;
	public static readonly INTO_ = 91;
	public static readonly IS_ = 92;
	public static readonly ISNULL_ = 93;
	public static readonly JOIN_ = 94;
	public static readonly KEY_ = 95;
	public static readonly LEFT_ = 96;
	public static readonly LIKE_ = 97;
	public static readonly LIMIT_ = 98;
	public static readonly MATCH_ = 99;
	public static readonly NATURAL_ = 100;
	public static readonly NO_ = 101;
	public static readonly NOT_ = 102;
	public static readonly NOTNULL_ = 103;
	public static readonly NULL_ = 104;
	public static readonly OF_ = 105;
	public static readonly OFFSET_ = 106;
	public static readonly ON_ = 107;
	public static readonly OR_ = 108;
	public static readonly ORDER_ = 109;
	public static readonly OUTER_ = 110;
	public static readonly PLAN_ = 111;
	public static readonly PRAGMA_ = 112;
	public static readonly PRIMARY_ = 113;
	public static readonly QUERY_ = 114;
	public static readonly RAISE_ = 115;
	public static readonly RECURSIVE_ = 116;
	public static readonly REFERENCES_ = 117;
	public static readonly REGEXP_ = 118;
	public static readonly REINDEX_ = 119;
	public static readonly RELEASE_ = 120;
	public static readonly RENAME_ = 121;
	public static readonly REPLACE_ = 122;
	public static readonly RESTRICT_ = 123;
	public static readonly RETURNING_ = 124;
	public static readonly RIGHT_ = 125;
	public static readonly ROLLBACK_ = 126;
	public static readonly ROW_ = 127;
	public static readonly ROWS_ = 128;
	public static readonly SAVEPOINT_ = 129;
	public static readonly SELECT_ = 130;
	public static readonly SET_ = 131;
	public static readonly TABLE_ = 132;
	public static readonly TEMP_ = 133;
	public static readonly TEMPORARY_ = 134;
	public static readonly THEN_ = 135;
	public static readonly TO_ = 136;
	public static readonly TRANSACTION_ = 137;
	public static readonly TRIGGER_ = 138;
	public static readonly UNION_ = 139;
	public static readonly UNIQUE_ = 140;
	public static readonly UPDATE_ = 141;
	public static readonly USING_ = 142;
	public static readonly VACUUM_ = 143;
	public static readonly VALUES_ = 144;
	public static readonly VIEW_ = 145;
	public static readonly VIRTUAL_ = 146;
	public static readonly WHEN_ = 147;
	public static readonly WHERE_ = 148;
	public static readonly WITH_ = 149;
	public static readonly WITHOUT_ = 150;
	public static readonly FIRST_VALUE_ = 151;
	public static readonly OVER_ = 152;
	public static readonly PARTITION_ = 153;
	public static readonly RANGE_ = 154;
	public static readonly PRECEDING_ = 155;
	public static readonly UNBOUNDED_ = 156;
	public static readonly CURRENT_ = 157;
	public static readonly FOLLOWING_ = 158;
	public static readonly CUME_DIST_ = 159;
	public static readonly DENSE_RANK_ = 160;
	public static readonly LAG_ = 161;
	public static readonly LAST_VALUE_ = 162;
	public static readonly LEAD_ = 163;
	public static readonly NTH_VALUE_ = 164;
	public static readonly NTILE_ = 165;
	public static readonly PERCENT_RANK_ = 166;
	public static readonly RANK_ = 167;
	public static readonly ROW_NUMBER_ = 168;
	public static readonly GENERATED_ = 169;
	public static readonly ALWAYS_ = 170;
	public static readonly STORED_ = 171;
	public static readonly TRUE_ = 172;
	public static readonly FALSE_ = 173;
	public static readonly WINDOW_ = 174;
	public static readonly NULLS_ = 175;
	public static readonly FIRST_ = 176;
	public static readonly LAST_ = 177;
	public static readonly FILTER_ = 178;
	public static readonly GROUPS_ = 179;
	public static readonly EXCLUDE_ = 180;
	public static readonly TIES_ = 181;
	public static readonly OTHERS_ = 182;
	public static readonly DO_ = 183;
	public static readonly NOTHING_ = 184;
	public static readonly IDENTIFIER = 185;
	public static readonly NUMERIC_LITERAL = 186;
	public static readonly BIND_PARAMETER = 187;
	public static readonly STRING_LITERAL = 188;
	public static readonly BLOB_LITERAL = 189;
	public static readonly SINGLE_LINE_COMMENT = 190;
	public static readonly MULTILINE_COMMENT = 191;
	public static readonly SPACES = 192;
	public static readonly UNEXPECTED_CHAR = 193;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "';'", "'.'", "'('", 
                                                   "')'", "','", "'='", 
                                                   "'*'", "'+'", "'-'", 
                                                   "'~'", "'||'", "'/'", 
                                                   "'%'", "'<<'", "'>>'", 
                                                   "'&'", "'|'", "'<'", 
                                                   "'<='", "'>'", "'>='", 
                                                   "'=='", "'!='", "'<>'", 
                                                   "'ABORT'", "'ACTION'", 
                                                   "'ADD'", "'AFTER'", "'ALL'", 
                                                   "'ALTER'", "'ANALYZE'", 
                                                   "'AND'", "'AS'", "'ASC'", 
                                                   "'ATTACH'", "'AUTOINCREMENT'", 
                                                   "'BEFORE'", "'BEGIN'", 
                                                   "'BETWEEN'", "'BY'", 
                                                   "'CASCADE'", "'CASE'", 
                                                   "'CAST'", "'CHECK'", 
                                                   "'COLLATE'", "'COLUMN'", 
                                                   "'COMMIT'", "'CONFLICT'", 
                                                   "'CONSTRAINT'", "'CREATE'", 
                                                   "'CROSS'", "'CURRENT_DATE'", 
                                                   "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
                                                   "'DATABASE'", "'DEFAULT'", 
                                                   "'DEFERRABLE'", "'DEFERRED'", 
                                                   "'DELETE'", "'DESC'", 
                                                   "'DETACH'", "'DISTINCT'", 
                                                   "'DROP'", "'EACH'", "'ELSE'", 
                                                   "'END'", "'ESCAPE'", 
                                                   "'EXCEPT'", "'EXCLUSIVE'", 
                                                   "'EXISTS'", "'EXPLAIN'", 
                                                   "'FAIL'", "'FOR'", "'FOREIGN'", 
                                                   "'FROM'", "'FULL'", "'GLOB'", 
                                                   "'GROUP'", "'HAVING'", 
                                                   "'IF'", "'IGNORE'", "'IMMEDIATE'", 
                                                   "'IN'", "'INDEX'", "'INDEXED'", 
                                                   "'INITIALLY'", "'INNER'", 
                                                   "'INSERT'", "'INSTEAD'", 
                                                   "'INTERSECT'", "'INTO'", 
                                                   "'IS'", "'ISNULL'", "'JOIN'", 
                                                   "'KEY'", "'LEFT'", "'LIKE'", 
                                                   "'LIMIT'", "'MATCH'", 
                                                   "'NATURAL'", "'NO'", 
                                                   "'NOT'", "'NOTNULL'", 
                                                   "'NULL'", "'OF'", "'OFFSET'", 
                                                   "'ON'", "'OR'", "'ORDER'", 
                                                   "'OUTER'", "'PLAN'", 
                                                   "'PRAGMA'", "'PRIMARY'", 
                                                   "'QUERY'", "'RAISE'", 
                                                   "'RECURSIVE'", "'REFERENCES'", 
                                                   "'REGEXP'", "'REINDEX'", 
                                                   "'RELEASE'", "'RENAME'", 
                                                   "'REPLACE'", "'RESTRICT'", 
                                                   "'RETURNING'", "'RIGHT'", 
                                                   "'ROLLBACK'", "'ROW'", 
                                                   "'ROWS'", "'SAVEPOINT'", 
                                                   "'SELECT'", "'SET'", 
                                                   "'TABLE'", "'TEMP'", 
                                                   "'TEMPORARY'", "'THEN'", 
                                                   "'TO'", "'TRANSACTION'", 
                                                   "'TRIGGER'", "'UNION'", 
                                                   "'UNIQUE'", "'UPDATE'", 
                                                   "'USING'", "'VACUUM'", 
                                                   "'VALUES'", "'VIEW'", 
                                                   "'VIRTUAL'", "'WHEN'", 
                                                   "'WHERE'", "'WITH'", 
                                                   "'WITHOUT'", "'FIRST_VALUE'", 
                                                   "'OVER'", "'PARTITION'", 
                                                   "'RANGE'", "'PRECEDING'", 
                                                   "'UNBOUNDED'", "'CURRENT'", 
                                                   "'FOLLOWING'", "'CUME_DIST'", 
                                                   "'DENSE_RANK'", "'LAG'", 
                                                   "'LAST_VALUE'", "'LEAD'", 
                                                   "'NTH_VALUE'", "'NTILE'", 
                                                   "'PERCENT_RANK'", "'RANK'", 
                                                   "'ROW_NUMBER'", "'GENERATED'", 
                                                   "'ALWAYS'", "'STORED'", 
                                                   "'TRUE'", "'FALSE'", 
                                                   "'WINDOW'", "'NULLS'", 
                                                   "'FIRST'", "'LAST'", 
                                                   "'FILTER'", "'GROUPS'", 
                                                   "'EXCLUDE'", "'TIES'", 
                                                   "'OTHERS'", "'DO'", "'NOTHING'" ];
	public static readonly symbolicNames: string[] = [ null, "SCOL", "DOT", 
                                                    "OPEN_PAR", "CLOSE_PAR", 
                                                    "COMMA", "ASSIGN", "STAR", 
                                                    "PLUS", "MINUS", "TILDE", 
                                                    "PIPE2", "DIV", "MOD", 
                                                    "LT2", "GT2", "AMP", 
                                                    "PIPE", "LT", "LT_EQ", 
                                                    "GT", "GT_EQ", "EQ", 
                                                    "NOT_EQ1", "NOT_EQ2", 
                                                    "ABORT_", "ACTION_", 
                                                    "ADD_", "AFTER_", "ALL_", 
                                                    "ALTER_", "ANALYZE_", 
                                                    "AND_", "AS_", "ASC_", 
                                                    "ATTACH_", "AUTOINCREMENT_", 
                                                    "BEFORE_", "BEGIN_", 
                                                    "BETWEEN_", "BY_", "CASCADE_", 
                                                    "CASE_", "CAST_", "CHECK_", 
                                                    "COLLATE_", "COLUMN_", 
                                                    "COMMIT_", "CONFLICT_", 
                                                    "CONSTRAINT_", "CREATE_", 
                                                    "CROSS_", "CURRENT_DATE_", 
                                                    "CURRENT_TIME_", "CURRENT_TIMESTAMP_", 
                                                    "DATABASE_", "DEFAULT_", 
                                                    "DEFERRABLE_", "DEFERRED_", 
                                                    "DELETE_", "DESC_", 
                                                    "DETACH_", "DISTINCT_", 
                                                    "DROP_", "EACH_", "ELSE_", 
                                                    "END_", "ESCAPE_", "EXCEPT_", 
                                                    "EXCLUSIVE_", "EXISTS_", 
                                                    "EXPLAIN_", "FAIL_", 
                                                    "FOR_", "FOREIGN_", 
                                                    "FROM_", "FULL_", "GLOB_", 
                                                    "GROUP_", "HAVING_", 
                                                    "IF_", "IGNORE_", "IMMEDIATE_", 
                                                    "IN_", "INDEX_", "INDEXED_", 
                                                    "INITIALLY_", "INNER_", 
                                                    "INSERT_", "INSTEAD_", 
                                                    "INTERSECT_", "INTO_", 
                                                    "IS_", "ISNULL_", "JOIN_", 
                                                    "KEY_", "LEFT_", "LIKE_", 
                                                    "LIMIT_", "MATCH_", 
                                                    "NATURAL_", "NO_", "NOT_", 
                                                    "NOTNULL_", "NULL_", 
                                                    "OF_", "OFFSET_", "ON_", 
                                                    "OR_", "ORDER_", "OUTER_", 
                                                    "PLAN_", "PRAGMA_", 
                                                    "PRIMARY_", "QUERY_", 
                                                    "RAISE_", "RECURSIVE_", 
                                                    "REFERENCES_", "REGEXP_", 
                                                    "REINDEX_", "RELEASE_", 
                                                    "RENAME_", "REPLACE_", 
                                                    "RESTRICT_", "RETURNING_", 
                                                    "RIGHT_", "ROLLBACK_", 
                                                    "ROW_", "ROWS_", "SAVEPOINT_", 
                                                    "SELECT_", "SET_", "TABLE_", 
                                                    "TEMP_", "TEMPORARY_", 
                                                    "THEN_", "TO_", "TRANSACTION_", 
                                                    "TRIGGER_", "UNION_", 
                                                    "UNIQUE_", "UPDATE_", 
                                                    "USING_", "VACUUM_", 
                                                    "VALUES_", "VIEW_", 
                                                    "VIRTUAL_", "WHEN_", 
                                                    "WHERE_", "WITH_", "WITHOUT_", 
                                                    "FIRST_VALUE_", "OVER_", 
                                                    "PARTITION_", "RANGE_", 
                                                    "PRECEDING_", "UNBOUNDED_", 
                                                    "CURRENT_", "FOLLOWING_", 
                                                    "CUME_DIST_", "DENSE_RANK_", 
                                                    "LAG_", "LAST_VALUE_", 
                                                    "LEAD_", "NTH_VALUE_", 
                                                    "NTILE_", "PERCENT_RANK_", 
                                                    "RANK_", "ROW_NUMBER_", 
                                                    "GENERATED_", "ALWAYS_", 
                                                    "STORED_", "TRUE_", 
                                                    "FALSE_", "WINDOW_", 
                                                    "NULLS_", "FIRST_", 
                                                    "LAST_", "FILTER_", 
                                                    "GROUPS_", "EXCLUDE_", 
                                                    "TIES_", "OTHERS_", 
                                                    "DO_", "NOTHING_", "IDENTIFIER", 
                                                    "NUMERIC_LITERAL", "BIND_PARAMETER", 
                                                    "STRING_LITERAL", "BLOB_LITERAL", 
                                                    "SINGLE_LINE_COMMENT", 
                                                    "MULTILINE_COMMENT", 
                                                    "SPACES", "UNEXPECTED_CHAR" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN", "STAR", "PLUS", 
		"MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2", "GT2", "AMP", "PIPE", 
		"LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1", "NOT_EQ2", "ABORT_", "ACTION_", 
		"ADD_", "AFTER_", "ALL_", "ALTER_", "ANALYZE_", "AND_", "AS_", "ASC_", 
		"ATTACH_", "AUTOINCREMENT_", "BEFORE_", "BEGIN_", "BETWEEN_", "BY_", "CASCADE_", 
		"CASE_", "CAST_", "CHECK_", "COLLATE_", "COLUMN_", "COMMIT_", "CONFLICT_", 
		"CONSTRAINT_", "CREATE_", "CROSS_", "CURRENT_DATE_", "CURRENT_TIME_", 
		"CURRENT_TIMESTAMP_", "DATABASE_", "DEFAULT_", "DEFERRABLE_", "DEFERRED_", 
		"DELETE_", "DESC_", "DETACH_", "DISTINCT_", "DROP_", "EACH_", "ELSE_", 
		"END_", "ESCAPE_", "EXCEPT_", "EXCLUSIVE_", "EXISTS_", "EXPLAIN_", "FAIL_", 
		"FOR_", "FOREIGN_", "FROM_", "FULL_", "GLOB_", "GROUP_", "HAVING_", "IF_", 
		"IGNORE_", "IMMEDIATE_", "IN_", "INDEX_", "INDEXED_", "INITIALLY_", "INNER_", 
		"INSERT_", "INSTEAD_", "INTERSECT_", "INTO_", "IS_", "ISNULL_", "JOIN_", 
		"KEY_", "LEFT_", "LIKE_", "LIMIT_", "MATCH_", "NATURAL_", "NO_", "NOT_", 
		"NOTNULL_", "NULL_", "OF_", "OFFSET_", "ON_", "OR_", "ORDER_", "OUTER_", 
		"PLAN_", "PRAGMA_", "PRIMARY_", "QUERY_", "RAISE_", "RECURSIVE_", "REFERENCES_", 
		"REGEXP_", "REINDEX_", "RELEASE_", "RENAME_", "REPLACE_", "RESTRICT_", 
		"RETURNING_", "RIGHT_", "ROLLBACK_", "ROW_", "ROWS_", "SAVEPOINT_", "SELECT_", 
		"SET_", "TABLE_", "TEMP_", "TEMPORARY_", "THEN_", "TO_", "TRANSACTION_", 
		"TRIGGER_", "UNION_", "UNIQUE_", "UPDATE_", "USING_", "VACUUM_", "VALUES_", 
		"VIEW_", "VIRTUAL_", "WHEN_", "WHERE_", "WITH_", "WITHOUT_", "FIRST_VALUE_", 
		"OVER_", "PARTITION_", "RANGE_", "PRECEDING_", "UNBOUNDED_", "CURRENT_", 
		"FOLLOWING_", "CUME_DIST_", "DENSE_RANK_", "LAG_", "LAST_VALUE_", "LEAD_", 
		"NTH_VALUE_", "NTILE_", "PERCENT_RANK_", "RANK_", "ROW_NUMBER_", "GENERATED_", 
		"ALWAYS_", "STORED_", "TRUE_", "FALSE_", "WINDOW_", "NULLS_", "FIRST_", 
		"LAST_", "FILTER_", "GROUPS_", "EXCLUDE_", "TIES_", "OTHERS_", "DO_", 
		"NOTHING_", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER", "STRING_LITERAL", 
		"BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", "SPACES", 
		"UNEXPECTED_CHAR", "HEX_DIGIT", "DIGIT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SQLiteLexer._ATN, SQLiteLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "SQLiteLexer.g4"; }

	public get literalNames(): (string | null)[] { return SQLiteLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SQLiteLexer.symbolicNames; }
	public get ruleNames(): string[] { return SQLiteLexer.ruleNames; }

	public get serializedATN(): number[] { return SQLiteLexer._serializedATN; }

	public get channelNames(): string[] { return SQLiteLexer.channelNames; }

	public get modeNames(): string[] { return SQLiteLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,193,1704,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
	1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,
	1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,
	19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,
	1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,
	26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,
	1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,
	31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,
	1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,
	40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,43,1,43,
	1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,
	45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,
	1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,
	1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
	56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,
	1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,63,
	1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,
	1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,
	69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,72,
	1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,
	74,1,74,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,
	1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,80,1,
	80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,
	84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,
	1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,
	88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
	1,89,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,
	1,95,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,
	98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,
	100,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,
	102,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,105,1,105,1,105,1,
	105,1,105,1,105,1,105,1,106,1,106,1,106,1,107,1,107,1,107,1,108,1,108,1,
	108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,110,1,110,1,
	110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,
	112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,
	114,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,
	115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,
	116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,
	118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,
	119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,
	121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,
	122,1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,
	124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,
	125,1,125,1,125,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,
	128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,
	129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,
	131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,
	133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,135,1,
	135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,
	136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,138,1,138,1,
	138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,
	142,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,
	143,1,143,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,1,
	145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,
	147,1,147,1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,
	149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,
	150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,
	152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,
	154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,
	155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,
	156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,
	157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,
	159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,
	160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,
	161,1,161,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,
	163,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,
	165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,
	166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,
	168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,
	170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,
	172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,
	174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,176,1,176,1,
	176,1,176,1,176,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,
	178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,
	179,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,
	181,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,
	184,1,184,1,184,1,184,5,184,1562,8,184,10,184,12,184,1565,9,184,1,184,1,
	184,1,184,1,184,1,184,5,184,1572,8,184,10,184,12,184,1575,9,184,1,184,1,
	184,1,184,5,184,1580,8,184,10,184,12,184,1583,9,184,1,184,1,184,1,184,5,
	184,1588,8,184,10,184,12,184,1591,9,184,3,184,1593,8,184,1,185,4,185,1596,
	8,185,11,185,12,185,1597,1,185,1,185,5,185,1602,8,185,10,185,12,185,1605,
	9,185,3,185,1607,8,185,1,185,1,185,4,185,1611,8,185,11,185,12,185,1612,
	3,185,1615,8,185,1,185,1,185,3,185,1619,8,185,1,185,4,185,1622,8,185,11,
	185,12,185,1623,3,185,1626,8,185,1,185,1,185,1,185,1,185,4,185,1632,8,185,
	11,185,12,185,1633,3,185,1636,8,185,1,186,1,186,5,186,1640,8,186,10,186,
	12,186,1643,9,186,1,186,1,186,3,186,1647,8,186,1,187,1,187,1,187,1,187,
	5,187,1653,8,187,10,187,12,187,1656,9,187,1,187,1,187,1,188,1,188,1,188,
	1,189,1,189,1,189,1,189,5,189,1667,8,189,10,189,12,189,1670,9,189,1,189,
	3,189,1673,8,189,1,189,1,189,3,189,1677,8,189,1,189,1,189,1,190,1,190,1,
	190,1,190,5,190,1685,8,190,10,190,12,190,1688,9,190,1,190,1,190,1,190,1,
	190,1,190,1,191,1,191,1,191,1,191,1,192,1,192,1,193,1,193,1,194,1,194,1,
	1686,0,195,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
	13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,
	25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,
	37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,
	49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,
	119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,
	70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,
	161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,
	91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,
	101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,109,219,
	110,221,111,223,112,225,113,227,114,229,115,231,116,233,117,235,118,237,
	119,239,120,241,121,243,122,245,123,247,124,249,125,251,126,253,127,255,
	128,257,129,259,130,261,131,263,132,265,133,267,134,269,135,271,136,273,
	137,275,138,277,139,279,140,281,141,283,142,285,143,287,144,289,145,291,
	146,293,147,295,148,297,149,299,150,301,151,303,152,305,153,307,154,309,
	155,311,156,313,157,315,158,317,159,319,160,321,161,323,162,325,163,327,
	164,329,165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,345,
	173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,361,181,363,
	182,365,183,367,184,369,185,371,186,373,187,375,188,377,189,379,190,381,
	191,383,192,385,193,387,0,389,0,1,0,38,2,0,65,65,97,97,2,0,66,66,98,98,
	2,0,79,79,111,111,2,0,82,82,114,114,2,0,84,84,116,116,2,0,67,67,99,99,2,
	0,73,73,105,105,2,0,78,78,110,110,2,0,68,68,100,100,2,0,70,70,102,102,2,
	0,69,69,101,101,2,0,76,76,108,108,2,0,89,89,121,121,2,0,90,90,122,122,2,
	0,83,83,115,115,2,0,72,72,104,104,2,0,85,85,117,117,2,0,77,77,109,109,2,
	0,71,71,103,103,2,0,87,87,119,119,2,0,75,75,107,107,2,0,80,80,112,112,2,
	0,88,88,120,120,2,0,86,86,118,118,2,0,74,74,106,106,2,0,81,81,113,113,1,
	0,34,34,1,0,96,96,1,0,93,93,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,
	97,122,2,0,43,43,45,45,3,0,36,36,58,58,64,64,1,0,39,39,2,0,10,10,13,13,
	3,0,9,11,13,13,32,32,3,0,48,57,65,70,97,102,1,0,48,57,1728,0,1,1,0,0,0,
	0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
	1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
	0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,
	1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,
	0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,
	1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,
	0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,
	1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,
	0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,
	0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,
	123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,
	1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,
	0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,
	0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,
	0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,
	0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,
	185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,
	1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,
	0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,
	0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,
	0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,
	0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,
	247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,
	1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,
	0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,
	0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,
	0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,
	0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,
	309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,
	1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,
	0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,
	0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,
	0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,
	0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,
	371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,
	1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,1,391,1,0,0,0,3,393,1,0,0,0,5,395,1,
	0,0,0,7,397,1,0,0,0,9,399,1,0,0,0,11,401,1,0,0,0,13,403,1,0,0,0,15,405,
	1,0,0,0,17,407,1,0,0,0,19,409,1,0,0,0,21,411,1,0,0,0,23,414,1,0,0,0,25,
	416,1,0,0,0,27,418,1,0,0,0,29,421,1,0,0,0,31,424,1,0,0,0,33,426,1,0,0,0,
	35,428,1,0,0,0,37,430,1,0,0,0,39,433,1,0,0,0,41,435,1,0,0,0,43,438,1,0,
	0,0,45,441,1,0,0,0,47,444,1,0,0,0,49,447,1,0,0,0,51,453,1,0,0,0,53,460,
	1,0,0,0,55,464,1,0,0,0,57,470,1,0,0,0,59,474,1,0,0,0,61,480,1,0,0,0,63,
	488,1,0,0,0,65,492,1,0,0,0,67,495,1,0,0,0,69,499,1,0,0,0,71,506,1,0,0,0,
	73,520,1,0,0,0,75,527,1,0,0,0,77,533,1,0,0,0,79,541,1,0,0,0,81,544,1,0,
	0,0,83,552,1,0,0,0,85,557,1,0,0,0,87,562,1,0,0,0,89,568,1,0,0,0,91,576,
	1,0,0,0,93,583,1,0,0,0,95,590,1,0,0,0,97,599,1,0,0,0,99,610,1,0,0,0,101,
	617,1,0,0,0,103,623,1,0,0,0,105,636,1,0,0,0,107,649,1,0,0,0,109,667,1,0,
	0,0,111,676,1,0,0,0,113,684,1,0,0,0,115,695,1,0,0,0,117,704,1,0,0,0,119,
	711,1,0,0,0,121,716,1,0,0,0,123,723,1,0,0,0,125,732,1,0,0,0,127,737,1,0,
	0,0,129,742,1,0,0,0,131,747,1,0,0,0,133,751,1,0,0,0,135,758,1,0,0,0,137,
	765,1,0,0,0,139,775,1,0,0,0,141,782,1,0,0,0,143,790,1,0,0,0,145,795,1,0,
	0,0,147,799,1,0,0,0,149,807,1,0,0,0,151,812,1,0,0,0,153,817,1,0,0,0,155,
	822,1,0,0,0,157,828,1,0,0,0,159,835,1,0,0,0,161,838,1,0,0,0,163,845,1,0,
	0,0,165,855,1,0,0,0,167,858,1,0,0,0,169,864,1,0,0,0,171,872,1,0,0,0,173,
	882,1,0,0,0,175,888,1,0,0,0,177,895,1,0,0,0,179,903,1,0,0,0,181,913,1,0,
	0,0,183,918,1,0,0,0,185,921,1,0,0,0,187,928,1,0,0,0,189,933,1,0,0,0,191,
	937,1,0,0,0,193,942,1,0,0,0,195,947,1,0,0,0,197,953,1,0,0,0,199,959,1,0,
	0,0,201,967,1,0,0,0,203,970,1,0,0,0,205,974,1,0,0,0,207,982,1,0,0,0,209,
	987,1,0,0,0,211,990,1,0,0,0,213,997,1,0,0,0,215,1000,1,0,0,0,217,1003,1,
	0,0,0,219,1009,1,0,0,0,221,1015,1,0,0,0,223,1020,1,0,0,0,225,1027,1,0,0,
	0,227,1035,1,0,0,0,229,1041,1,0,0,0,231,1047,1,0,0,0,233,1057,1,0,0,0,235,
	1068,1,0,0,0,237,1075,1,0,0,0,239,1083,1,0,0,0,241,1091,1,0,0,0,243,1098,
	1,0,0,0,245,1106,1,0,0,0,247,1115,1,0,0,0,249,1125,1,0,0,0,251,1131,1,0,
	0,0,253,1140,1,0,0,0,255,1144,1,0,0,0,257,1149,1,0,0,0,259,1159,1,0,0,0,
	261,1166,1,0,0,0,263,1170,1,0,0,0,265,1176,1,0,0,0,267,1181,1,0,0,0,269,
	1191,1,0,0,0,271,1196,1,0,0,0,273,1199,1,0,0,0,275,1211,1,0,0,0,277,1219,
	1,0,0,0,279,1225,1,0,0,0,281,1232,1,0,0,0,283,1239,1,0,0,0,285,1245,1,0,
	0,0,287,1252,1,0,0,0,289,1259,1,0,0,0,291,1264,1,0,0,0,293,1272,1,0,0,0,
	295,1277,1,0,0,0,297,1283,1,0,0,0,299,1288,1,0,0,0,301,1296,1,0,0,0,303,
	1308,1,0,0,0,305,1313,1,0,0,0,307,1323,1,0,0,0,309,1329,1,0,0,0,311,1339,
	1,0,0,0,313,1349,1,0,0,0,315,1357,1,0,0,0,317,1367,1,0,0,0,319,1377,1,0,
	0,0,321,1388,1,0,0,0,323,1392,1,0,0,0,325,1403,1,0,0,0,327,1408,1,0,0,0,
	329,1418,1,0,0,0,331,1424,1,0,0,0,333,1437,1,0,0,0,335,1442,1,0,0,0,337,
	1453,1,0,0,0,339,1463,1,0,0,0,341,1470,1,0,0,0,343,1477,1,0,0,0,345,1482,
	1,0,0,0,347,1488,1,0,0,0,349,1495,1,0,0,0,351,1501,1,0,0,0,353,1507,1,0,
	0,0,355,1512,1,0,0,0,357,1519,1,0,0,0,359,1526,1,0,0,0,361,1534,1,0,0,0,
	363,1539,1,0,0,0,365,1546,1,0,0,0,367,1549,1,0,0,0,369,1592,1,0,0,0,371,
	1635,1,0,0,0,373,1646,1,0,0,0,375,1648,1,0,0,0,377,1659,1,0,0,0,379,1662,
	1,0,0,0,381,1680,1,0,0,0,383,1694,1,0,0,0,385,1698,1,0,0,0,387,1700,1,0,
	0,0,389,1702,1,0,0,0,391,392,5,59,0,0,392,2,1,0,0,0,393,394,5,46,0,0,394,
	4,1,0,0,0,395,396,5,40,0,0,396,6,1,0,0,0,397,398,5,41,0,0,398,8,1,0,0,0,
	399,400,5,44,0,0,400,10,1,0,0,0,401,402,5,61,0,0,402,12,1,0,0,0,403,404,
	5,42,0,0,404,14,1,0,0,0,405,406,5,43,0,0,406,16,1,0,0,0,407,408,5,45,0,
	0,408,18,1,0,0,0,409,410,5,126,0,0,410,20,1,0,0,0,411,412,5,124,0,0,412,
	413,5,124,0,0,413,22,1,0,0,0,414,415,5,47,0,0,415,24,1,0,0,0,416,417,5,
	37,0,0,417,26,1,0,0,0,418,419,5,60,0,0,419,420,5,60,0,0,420,28,1,0,0,0,
	421,422,5,62,0,0,422,423,5,62,0,0,423,30,1,0,0,0,424,425,5,38,0,0,425,32,
	1,0,0,0,426,427,5,124,0,0,427,34,1,0,0,0,428,429,5,60,0,0,429,36,1,0,0,
	0,430,431,5,60,0,0,431,432,5,61,0,0,432,38,1,0,0,0,433,434,5,62,0,0,434,
	40,1,0,0,0,435,436,5,62,0,0,436,437,5,61,0,0,437,42,1,0,0,0,438,439,5,61,
	0,0,439,440,5,61,0,0,440,44,1,0,0,0,441,442,5,33,0,0,442,443,5,61,0,0,443,
	46,1,0,0,0,444,445,5,60,0,0,445,446,5,62,0,0,446,48,1,0,0,0,447,448,7,0,
	0,0,448,449,7,1,0,0,449,450,7,2,0,0,450,451,7,3,0,0,451,452,7,4,0,0,452,
	50,1,0,0,0,453,454,7,0,0,0,454,455,7,5,0,0,455,456,7,4,0,0,456,457,7,6,
	0,0,457,458,7,2,0,0,458,459,7,7,0,0,459,52,1,0,0,0,460,461,7,0,0,0,461,
	462,7,8,0,0,462,463,7,8,0,0,463,54,1,0,0,0,464,465,7,0,0,0,465,466,7,9,
	0,0,466,467,7,4,0,0,467,468,7,10,0,0,468,469,7,3,0,0,469,56,1,0,0,0,470,
	471,7,0,0,0,471,472,7,11,0,0,472,473,7,11,0,0,473,58,1,0,0,0,474,475,7,
	0,0,0,475,476,7,11,0,0,476,477,7,4,0,0,477,478,7,10,0,0,478,479,7,3,0,0,
	479,60,1,0,0,0,480,481,7,0,0,0,481,482,7,7,0,0,482,483,7,0,0,0,483,484,
	7,11,0,0,484,485,7,12,0,0,485,486,7,13,0,0,486,487,7,10,0,0,487,62,1,0,
	0,0,488,489,7,0,0,0,489,490,7,7,0,0,490,491,7,8,0,0,491,64,1,0,0,0,492,
	493,7,0,0,0,493,494,7,14,0,0,494,66,1,0,0,0,495,496,7,0,0,0,496,497,7,14,
	0,0,497,498,7,5,0,0,498,68,1,0,0,0,499,500,7,0,0,0,500,501,7,4,0,0,501,
	502,7,4,0,0,502,503,7,0,0,0,503,504,7,5,0,0,504,505,7,15,0,0,505,70,1,0,
	0,0,506,507,7,0,0,0,507,508,7,16,0,0,508,509,7,4,0,0,509,510,7,2,0,0,510,
	511,7,6,0,0,511,512,7,7,0,0,512,513,7,5,0,0,513,514,7,3,0,0,514,515,7,10,
	0,0,515,516,7,17,0,0,516,517,7,10,0,0,517,518,7,7,0,0,518,519,7,4,0,0,519,
	72,1,0,0,0,520,521,7,1,0,0,521,522,7,10,0,0,522,523,7,9,0,0,523,524,7,2,
	0,0,524,525,7,3,0,0,525,526,7,10,0,0,526,74,1,0,0,0,527,528,7,1,0,0,528,
	529,7,10,0,0,529,530,7,18,0,0,530,531,7,6,0,0,531,532,7,7,0,0,532,76,1,
	0,0,0,533,534,7,1,0,0,534,535,7,10,0,0,535,536,7,4,0,0,536,537,7,19,0,0,
	537,538,7,10,0,0,538,539,7,10,0,0,539,540,7,7,0,0,540,78,1,0,0,0,541,542,
	7,1,0,0,542,543,7,12,0,0,543,80,1,0,0,0,544,545,7,5,0,0,545,546,7,0,0,0,
	546,547,7,14,0,0,547,548,7,5,0,0,548,549,7,0,0,0,549,550,7,8,0,0,550,551,
	7,10,0,0,551,82,1,0,0,0,552,553,7,5,0,0,553,554,7,0,0,0,554,555,7,14,0,
	0,555,556,7,10,0,0,556,84,1,0,0,0,557,558,7,5,0,0,558,559,7,0,0,0,559,560,
	7,14,0,0,560,561,7,4,0,0,561,86,1,0,0,0,562,563,7,5,0,0,563,564,7,15,0,
	0,564,565,7,10,0,0,565,566,7,5,0,0,566,567,7,20,0,0,567,88,1,0,0,0,568,
	569,7,5,0,0,569,570,7,2,0,0,570,571,7,11,0,0,571,572,7,11,0,0,572,573,7,
	0,0,0,573,574,7,4,0,0,574,575,7,10,0,0,575,90,1,0,0,0,576,577,7,5,0,0,577,
	578,7,2,0,0,578,579,7,11,0,0,579,580,7,16,0,0,580,581,7,17,0,0,581,582,
	7,7,0,0,582,92,1,0,0,0,583,584,7,5,0,0,584,585,7,2,0,0,585,586,7,17,0,0,
	586,587,7,17,0,0,587,588,7,6,0,0,588,589,7,4,0,0,589,94,1,0,0,0,590,591,
	7,5,0,0,591,592,7,2,0,0,592,593,7,7,0,0,593,594,7,9,0,0,594,595,7,11,0,
	0,595,596,7,6,0,0,596,597,7,5,0,0,597,598,7,4,0,0,598,96,1,0,0,0,599,600,
	7,5,0,0,600,601,7,2,0,0,601,602,7,7,0,0,602,603,7,14,0,0,603,604,7,4,0,
	0,604,605,7,3,0,0,605,606,7,0,0,0,606,607,7,6,0,0,607,608,7,7,0,0,608,609,
	7,4,0,0,609,98,1,0,0,0,610,611,7,5,0,0,611,612,7,3,0,0,612,613,7,10,0,0,
	613,614,7,0,0,0,614,615,7,4,0,0,615,616,7,10,0,0,616,100,1,0,0,0,617,618,
	7,5,0,0,618,619,7,3,0,0,619,620,7,2,0,0,620,621,7,14,0,0,621,622,7,14,0,
	0,622,102,1,0,0,0,623,624,7,5,0,0,624,625,7,16,0,0,625,626,7,3,0,0,626,
	627,7,3,0,0,627,628,7,10,0,0,628,629,7,7,0,0,629,630,7,4,0,0,630,631,5,
	95,0,0,631,632,7,8,0,0,632,633,7,0,0,0,633,634,7,4,0,0,634,635,7,10,0,0,
	635,104,1,0,0,0,636,637,7,5,0,0,637,638,7,16,0,0,638,639,7,3,0,0,639,640,
	7,3,0,0,640,641,7,10,0,0,641,642,7,7,0,0,642,643,7,4,0,0,643,644,5,95,0,
	0,644,645,7,4,0,0,645,646,7,6,0,0,646,647,7,17,0,0,647,648,7,10,0,0,648,
	106,1,0,0,0,649,650,7,5,0,0,650,651,7,16,0,0,651,652,7,3,0,0,652,653,7,
	3,0,0,653,654,7,10,0,0,654,655,7,7,0,0,655,656,7,4,0,0,656,657,5,95,0,0,
	657,658,7,4,0,0,658,659,7,6,0,0,659,660,7,17,0,0,660,661,7,10,0,0,661,662,
	7,14,0,0,662,663,7,4,0,0,663,664,7,0,0,0,664,665,7,17,0,0,665,666,7,21,
	0,0,666,108,1,0,0,0,667,668,7,8,0,0,668,669,7,0,0,0,669,670,7,4,0,0,670,
	671,7,0,0,0,671,672,7,1,0,0,672,673,7,0,0,0,673,674,7,14,0,0,674,675,7,
	10,0,0,675,110,1,0,0,0,676,677,7,8,0,0,677,678,7,10,0,0,678,679,7,9,0,0,
	679,680,7,0,0,0,680,681,7,16,0,0,681,682,7,11,0,0,682,683,7,4,0,0,683,112,
	1,0,0,0,684,685,7,8,0,0,685,686,7,10,0,0,686,687,7,9,0,0,687,688,7,10,0,
	0,688,689,7,3,0,0,689,690,7,3,0,0,690,691,7,0,0,0,691,692,7,1,0,0,692,693,
	7,11,0,0,693,694,7,10,0,0,694,114,1,0,0,0,695,696,7,8,0,0,696,697,7,10,
	0,0,697,698,7,9,0,0,698,699,7,10,0,0,699,700,7,3,0,0,700,701,7,3,0,0,701,
	702,7,10,0,0,702,703,7,8,0,0,703,116,1,0,0,0,704,705,7,8,0,0,705,706,7,
	10,0,0,706,707,7,11,0,0,707,708,7,10,0,0,708,709,7,4,0,0,709,710,7,10,0,
	0,710,118,1,0,0,0,711,712,7,8,0,0,712,713,7,10,0,0,713,714,7,14,0,0,714,
	715,7,5,0,0,715,120,1,0,0,0,716,717,7,8,0,0,717,718,7,10,0,0,718,719,7,
	4,0,0,719,720,7,0,0,0,720,721,7,5,0,0,721,722,7,15,0,0,722,122,1,0,0,0,
	723,724,7,8,0,0,724,725,7,6,0,0,725,726,7,14,0,0,726,727,7,4,0,0,727,728,
	7,6,0,0,728,729,7,7,0,0,729,730,7,5,0,0,730,731,7,4,0,0,731,124,1,0,0,0,
	732,733,7,8,0,0,733,734,7,3,0,0,734,735,7,2,0,0,735,736,7,21,0,0,736,126,
	1,0,0,0,737,738,7,10,0,0,738,739,7,0,0,0,739,740,7,5,0,0,740,741,7,15,0,
	0,741,128,1,0,0,0,742,743,7,10,0,0,743,744,7,11,0,0,744,745,7,14,0,0,745,
	746,7,10,0,0,746,130,1,0,0,0,747,748,7,10,0,0,748,749,7,7,0,0,749,750,7,
	8,0,0,750,132,1,0,0,0,751,752,7,10,0,0,752,753,7,14,0,0,753,754,7,5,0,0,
	754,755,7,0,0,0,755,756,7,21,0,0,756,757,7,10,0,0,757,134,1,0,0,0,758,759,
	7,10,0,0,759,760,7,22,0,0,760,761,7,5,0,0,761,762,7,10,0,0,762,763,7,21,
	0,0,763,764,7,4,0,0,764,136,1,0,0,0,765,766,7,10,0,0,766,767,7,22,0,0,767,
	768,7,5,0,0,768,769,7,11,0,0,769,770,7,16,0,0,770,771,7,14,0,0,771,772,
	7,6,0,0,772,773,7,23,0,0,773,774,7,10,0,0,774,138,1,0,0,0,775,776,7,10,
	0,0,776,777,7,22,0,0,777,778,7,6,0,0,778,779,7,14,0,0,779,780,7,4,0,0,780,
	781,7,14,0,0,781,140,1,0,0,0,782,783,7,10,0,0,783,784,7,22,0,0,784,785,
	7,21,0,0,785,786,7,11,0,0,786,787,7,0,0,0,787,788,7,6,0,0,788,789,7,7,0,
	0,789,142,1,0,0,0,790,791,7,9,0,0,791,792,7,0,0,0,792,793,7,6,0,0,793,794,
	7,11,0,0,794,144,1,0,0,0,795,796,7,9,0,0,796,797,7,2,0,0,797,798,7,3,0,
	0,798,146,1,0,0,0,799,800,7,9,0,0,800,801,7,2,0,0,801,802,7,3,0,0,802,803,
	7,10,0,0,803,804,7,6,0,0,804,805,7,18,0,0,805,806,7,7,0,0,806,148,1,0,0,
	0,807,808,7,9,0,0,808,809,7,3,0,0,809,810,7,2,0,0,810,811,7,17,0,0,811,
	150,1,0,0,0,812,813,7,9,0,0,813,814,7,16,0,0,814,815,7,11,0,0,815,816,7,
	11,0,0,816,152,1,0,0,0,817,818,7,18,0,0,818,819,7,11,0,0,819,820,7,2,0,
	0,820,821,7,1,0,0,821,154,1,0,0,0,822,823,7,18,0,0,823,824,7,3,0,0,824,
	825,7,2,0,0,825,826,7,16,0,0,826,827,7,21,0,0,827,156,1,0,0,0,828,829,7,
	15,0,0,829,830,7,0,0,0,830,831,7,23,0,0,831,832,7,6,0,0,832,833,7,7,0,0,
	833,834,7,18,0,0,834,158,1,0,0,0,835,836,7,6,0,0,836,837,7,9,0,0,837,160,
	1,0,0,0,838,839,7,6,0,0,839,840,7,18,0,0,840,841,7,7,0,0,841,842,7,2,0,
	0,842,843,7,3,0,0,843,844,7,10,0,0,844,162,1,0,0,0,845,846,7,6,0,0,846,
	847,7,17,0,0,847,848,7,17,0,0,848,849,7,10,0,0,849,850,7,8,0,0,850,851,
	7,6,0,0,851,852,7,0,0,0,852,853,7,4,0,0,853,854,7,10,0,0,854,164,1,0,0,
	0,855,856,7,6,0,0,856,857,7,7,0,0,857,166,1,0,0,0,858,859,7,6,0,0,859,860,
	7,7,0,0,860,861,7,8,0,0,861,862,7,10,0,0,862,863,7,22,0,0,863,168,1,0,0,
	0,864,865,7,6,0,0,865,866,7,7,0,0,866,867,7,8,0,0,867,868,7,10,0,0,868,
	869,7,22,0,0,869,870,7,10,0,0,870,871,7,8,0,0,871,170,1,0,0,0,872,873,7,
	6,0,0,873,874,7,7,0,0,874,875,7,6,0,0,875,876,7,4,0,0,876,877,7,6,0,0,877,
	878,7,0,0,0,878,879,7,11,0,0,879,880,7,11,0,0,880,881,7,12,0,0,881,172,
	1,0,0,0,882,883,7,6,0,0,883,884,7,7,0,0,884,885,7,7,0,0,885,886,7,10,0,
	0,886,887,7,3,0,0,887,174,1,0,0,0,888,889,7,6,0,0,889,890,7,7,0,0,890,891,
	7,14,0,0,891,892,7,10,0,0,892,893,7,3,0,0,893,894,7,4,0,0,894,176,1,0,0,
	0,895,896,7,6,0,0,896,897,7,7,0,0,897,898,7,14,0,0,898,899,7,4,0,0,899,
	900,7,10,0,0,900,901,7,0,0,0,901,902,7,8,0,0,902,178,1,0,0,0,903,904,7,
	6,0,0,904,905,7,7,0,0,905,906,7,4,0,0,906,907,7,10,0,0,907,908,7,3,0,0,
	908,909,7,14,0,0,909,910,7,10,0,0,910,911,7,5,0,0,911,912,7,4,0,0,912,180,
	1,0,0,0,913,914,7,6,0,0,914,915,7,7,0,0,915,916,7,4,0,0,916,917,7,2,0,0,
	917,182,1,0,0,0,918,919,7,6,0,0,919,920,7,14,0,0,920,184,1,0,0,0,921,922,
	7,6,0,0,922,923,7,14,0,0,923,924,7,7,0,0,924,925,7,16,0,0,925,926,7,11,
	0,0,926,927,7,11,0,0,927,186,1,0,0,0,928,929,7,24,0,0,929,930,7,2,0,0,930,
	931,7,6,0,0,931,932,7,7,0,0,932,188,1,0,0,0,933,934,7,20,0,0,934,935,7,
	10,0,0,935,936,7,12,0,0,936,190,1,0,0,0,937,938,7,11,0,0,938,939,7,10,0,
	0,939,940,7,9,0,0,940,941,7,4,0,0,941,192,1,0,0,0,942,943,7,11,0,0,943,
	944,7,6,0,0,944,945,7,20,0,0,945,946,7,10,0,0,946,194,1,0,0,0,947,948,7,
	11,0,0,948,949,7,6,0,0,949,950,7,17,0,0,950,951,7,6,0,0,951,952,7,4,0,0,
	952,196,1,0,0,0,953,954,7,17,0,0,954,955,7,0,0,0,955,956,7,4,0,0,956,957,
	7,5,0,0,957,958,7,15,0,0,958,198,1,0,0,0,959,960,7,7,0,0,960,961,7,0,0,
	0,961,962,7,4,0,0,962,963,7,16,0,0,963,964,7,3,0,0,964,965,7,0,0,0,965,
	966,7,11,0,0,966,200,1,0,0,0,967,968,7,7,0,0,968,969,7,2,0,0,969,202,1,
	0,0,0,970,971,7,7,0,0,971,972,7,2,0,0,972,973,7,4,0,0,973,204,1,0,0,0,974,
	975,7,7,0,0,975,976,7,2,0,0,976,977,7,4,0,0,977,978,7,7,0,0,978,979,7,16,
	0,0,979,980,7,11,0,0,980,981,7,11,0,0,981,206,1,0,0,0,982,983,7,7,0,0,983,
	984,7,16,0,0,984,985,7,11,0,0,985,986,7,11,0,0,986,208,1,0,0,0,987,988,
	7,2,0,0,988,989,7,9,0,0,989,210,1,0,0,0,990,991,7,2,0,0,991,992,7,9,0,0,
	992,993,7,9,0,0,993,994,7,14,0,0,994,995,7,10,0,0,995,996,7,4,0,0,996,212,
	1,0,0,0,997,998,7,2,0,0,998,999,7,7,0,0,999,214,1,0,0,0,1000,1001,7,2,0,
	0,1001,1002,7,3,0,0,1002,216,1,0,0,0,1003,1004,7,2,0,0,1004,1005,7,3,0,
	0,1005,1006,7,8,0,0,1006,1007,7,10,0,0,1007,1008,7,3,0,0,1008,218,1,0,0,
	0,1009,1010,7,2,0,0,1010,1011,7,16,0,0,1011,1012,7,4,0,0,1012,1013,7,10,
	0,0,1013,1014,7,3,0,0,1014,220,1,0,0,0,1015,1016,7,21,0,0,1016,1017,7,11,
	0,0,1017,1018,7,0,0,0,1018,1019,7,7,0,0,1019,222,1,0,0,0,1020,1021,7,21,
	0,0,1021,1022,7,3,0,0,1022,1023,7,0,0,0,1023,1024,7,18,0,0,1024,1025,7,
	17,0,0,1025,1026,7,0,0,0,1026,224,1,0,0,0,1027,1028,7,21,0,0,1028,1029,
	7,3,0,0,1029,1030,7,6,0,0,1030,1031,7,17,0,0,1031,1032,7,0,0,0,1032,1033,
	7,3,0,0,1033,1034,7,12,0,0,1034,226,1,0,0,0,1035,1036,7,25,0,0,1036,1037,
	7,16,0,0,1037,1038,7,10,0,0,1038,1039,7,3,0,0,1039,1040,7,12,0,0,1040,228,
	1,0,0,0,1041,1042,7,3,0,0,1042,1043,7,0,0,0,1043,1044,7,6,0,0,1044,1045,
	7,14,0,0,1045,1046,7,10,0,0,1046,230,1,0,0,0,1047,1048,7,3,0,0,1048,1049,
	7,10,0,0,1049,1050,7,5,0,0,1050,1051,7,16,0,0,1051,1052,7,3,0,0,1052,1053,
	7,14,0,0,1053,1054,7,6,0,0,1054,1055,7,23,0,0,1055,1056,7,10,0,0,1056,232,
	1,0,0,0,1057,1058,7,3,0,0,1058,1059,7,10,0,0,1059,1060,7,9,0,0,1060,1061,
	7,10,0,0,1061,1062,7,3,0,0,1062,1063,7,10,0,0,1063,1064,7,7,0,0,1064,1065,
	7,5,0,0,1065,1066,7,10,0,0,1066,1067,7,14,0,0,1067,234,1,0,0,0,1068,1069,
	7,3,0,0,1069,1070,7,10,0,0,1070,1071,7,18,0,0,1071,1072,7,10,0,0,1072,1073,
	7,22,0,0,1073,1074,7,21,0,0,1074,236,1,0,0,0,1075,1076,7,3,0,0,1076,1077,
	7,10,0,0,1077,1078,7,6,0,0,1078,1079,7,7,0,0,1079,1080,7,8,0,0,1080,1081,
	7,10,0,0,1081,1082,7,22,0,0,1082,238,1,0,0,0,1083,1084,7,3,0,0,1084,1085,
	7,10,0,0,1085,1086,7,11,0,0,1086,1087,7,10,0,0,1087,1088,7,0,0,0,1088,1089,
	7,14,0,0,1089,1090,7,10,0,0,1090,240,1,0,0,0,1091,1092,7,3,0,0,1092,1093,
	7,10,0,0,1093,1094,7,7,0,0,1094,1095,7,0,0,0,1095,1096,7,17,0,0,1096,1097,
	7,10,0,0,1097,242,1,0,0,0,1098,1099,7,3,0,0,1099,1100,7,10,0,0,1100,1101,
	7,21,0,0,1101,1102,7,11,0,0,1102,1103,7,0,0,0,1103,1104,7,5,0,0,1104,1105,
	7,10,0,0,1105,244,1,0,0,0,1106,1107,7,3,0,0,1107,1108,7,10,0,0,1108,1109,
	7,14,0,0,1109,1110,7,4,0,0,1110,1111,7,3,0,0,1111,1112,7,6,0,0,1112,1113,
	7,5,0,0,1113,1114,7,4,0,0,1114,246,1,0,0,0,1115,1116,7,3,0,0,1116,1117,
	7,10,0,0,1117,1118,7,4,0,0,1118,1119,7,16,0,0,1119,1120,7,3,0,0,1120,1121,
	7,7,0,0,1121,1122,7,6,0,0,1122,1123,7,7,0,0,1123,1124,7,18,0,0,1124,248,
	1,0,0,0,1125,1126,7,3,0,0,1126,1127,7,6,0,0,1127,1128,7,18,0,0,1128,1129,
	7,15,0,0,1129,1130,7,4,0,0,1130,250,1,0,0,0,1131,1132,7,3,0,0,1132,1133,
	7,2,0,0,1133,1134,7,11,0,0,1134,1135,7,11,0,0,1135,1136,7,1,0,0,1136,1137,
	7,0,0,0,1137,1138,7,5,0,0,1138,1139,7,20,0,0,1139,252,1,0,0,0,1140,1141,
	7,3,0,0,1141,1142,7,2,0,0,1142,1143,7,19,0,0,1143,254,1,0,0,0,1144,1145,
	7,3,0,0,1145,1146,7,2,0,0,1146,1147,7,19,0,0,1147,1148,7,14,0,0,1148,256,
	1,0,0,0,1149,1150,7,14,0,0,1150,1151,7,0,0,0,1151,1152,7,23,0,0,1152,1153,
	7,10,0,0,1153,1154,7,21,0,0,1154,1155,7,2,0,0,1155,1156,7,6,0,0,1156,1157,
	7,7,0,0,1157,1158,7,4,0,0,1158,258,1,0,0,0,1159,1160,7,14,0,0,1160,1161,
	7,10,0,0,1161,1162,7,11,0,0,1162,1163,7,10,0,0,1163,1164,7,5,0,0,1164,1165,
	7,4,0,0,1165,260,1,0,0,0,1166,1167,7,14,0,0,1167,1168,7,10,0,0,1168,1169,
	7,4,0,0,1169,262,1,0,0,0,1170,1171,7,4,0,0,1171,1172,7,0,0,0,1172,1173,
	7,1,0,0,1173,1174,7,11,0,0,1174,1175,7,10,0,0,1175,264,1,0,0,0,1176,1177,
	7,4,0,0,1177,1178,7,10,0,0,1178,1179,7,17,0,0,1179,1180,7,21,0,0,1180,266,
	1,0,0,0,1181,1182,7,4,0,0,1182,1183,7,10,0,0,1183,1184,7,17,0,0,1184,1185,
	7,21,0,0,1185,1186,7,2,0,0,1186,1187,7,3,0,0,1187,1188,7,0,0,0,1188,1189,
	7,3,0,0,1189,1190,7,12,0,0,1190,268,1,0,0,0,1191,1192,7,4,0,0,1192,1193,
	7,15,0,0,1193,1194,7,10,0,0,1194,1195,7,7,0,0,1195,270,1,0,0,0,1196,1197,
	7,4,0,0,1197,1198,7,2,0,0,1198,272,1,0,0,0,1199,1200,7,4,0,0,1200,1201,
	7,3,0,0,1201,1202,7,0,0,0,1202,1203,7,7,0,0,1203,1204,7,14,0,0,1204,1205,
	7,0,0,0,1205,1206,7,5,0,0,1206,1207,7,4,0,0,1207,1208,7,6,0,0,1208,1209,
	7,2,0,0,1209,1210,7,7,0,0,1210,274,1,0,0,0,1211,1212,7,4,0,0,1212,1213,
	7,3,0,0,1213,1214,7,6,0,0,1214,1215,7,18,0,0,1215,1216,7,18,0,0,1216,1217,
	7,10,0,0,1217,1218,7,3,0,0,1218,276,1,0,0,0,1219,1220,7,16,0,0,1220,1221,
	7,7,0,0,1221,1222,7,6,0,0,1222,1223,7,2,0,0,1223,1224,7,7,0,0,1224,278,
	1,0,0,0,1225,1226,7,16,0,0,1226,1227,7,7,0,0,1227,1228,7,6,0,0,1228,1229,
	7,25,0,0,1229,1230,7,16,0,0,1230,1231,7,10,0,0,1231,280,1,0,0,0,1232,1233,
	7,16,0,0,1233,1234,7,21,0,0,1234,1235,7,8,0,0,1235,1236,7,0,0,0,1236,1237,
	7,4,0,0,1237,1238,7,10,0,0,1238,282,1,0,0,0,1239,1240,7,16,0,0,1240,1241,
	7,14,0,0,1241,1242,7,6,0,0,1242,1243,7,7,0,0,1243,1244,7,18,0,0,1244,284,
	1,0,0,0,1245,1246,7,23,0,0,1246,1247,7,0,0,0,1247,1248,7,5,0,0,1248,1249,
	7,16,0,0,1249,1250,7,16,0,0,1250,1251,7,17,0,0,1251,286,1,0,0,0,1252,1253,
	7,23,0,0,1253,1254,7,0,0,0,1254,1255,7,11,0,0,1255,1256,7,16,0,0,1256,1257,
	7,10,0,0,1257,1258,7,14,0,0,1258,288,1,0,0,0,1259,1260,7,23,0,0,1260,1261,
	7,6,0,0,1261,1262,7,10,0,0,1262,1263,7,19,0,0,1263,290,1,0,0,0,1264,1265,
	7,23,0,0,1265,1266,7,6,0,0,1266,1267,7,3,0,0,1267,1268,7,4,0,0,1268,1269,
	7,16,0,0,1269,1270,7,0,0,0,1270,1271,7,11,0,0,1271,292,1,0,0,0,1272,1273,
	7,19,0,0,1273,1274,7,15,0,0,1274,1275,7,10,0,0,1275,1276,7,7,0,0,1276,294,
	1,0,0,0,1277,1278,7,19,0,0,1278,1279,7,15,0,0,1279,1280,7,10,0,0,1280,1281,
	7,3,0,0,1281,1282,7,10,0,0,1282,296,1,0,0,0,1283,1284,7,19,0,0,1284,1285,
	7,6,0,0,1285,1286,7,4,0,0,1286,1287,7,15,0,0,1287,298,1,0,0,0,1288,1289,
	7,19,0,0,1289,1290,7,6,0,0,1290,1291,7,4,0,0,1291,1292,7,15,0,0,1292,1293,
	7,2,0,0,1293,1294,7,16,0,0,1294,1295,7,4,0,0,1295,300,1,0,0,0,1296,1297,
	7,9,0,0,1297,1298,7,6,0,0,1298,1299,7,3,0,0,1299,1300,7,14,0,0,1300,1301,
	7,4,0,0,1301,1302,5,95,0,0,1302,1303,7,23,0,0,1303,1304,7,0,0,0,1304,1305,
	7,11,0,0,1305,1306,7,16,0,0,1306,1307,7,10,0,0,1307,302,1,0,0,0,1308,1309,
	7,2,0,0,1309,1310,7,23,0,0,1310,1311,7,10,0,0,1311,1312,7,3,0,0,1312,304,
	1,0,0,0,1313,1314,7,21,0,0,1314,1315,7,0,0,0,1315,1316,7,3,0,0,1316,1317,
	7,4,0,0,1317,1318,7,6,0,0,1318,1319,7,4,0,0,1319,1320,7,6,0,0,1320,1321,
	7,2,0,0,1321,1322,7,7,0,0,1322,306,1,0,0,0,1323,1324,7,3,0,0,1324,1325,
	7,0,0,0,1325,1326,7,7,0,0,1326,1327,7,18,0,0,1327,1328,7,10,0,0,1328,308,
	1,0,0,0,1329,1330,7,21,0,0,1330,1331,7,3,0,0,1331,1332,7,10,0,0,1332,1333,
	7,5,0,0,1333,1334,7,10,0,0,1334,1335,7,8,0,0,1335,1336,7,6,0,0,1336,1337,
	7,7,0,0,1337,1338,7,18,0,0,1338,310,1,0,0,0,1339,1340,7,16,0,0,1340,1341,
	7,7,0,0,1341,1342,7,1,0,0,1342,1343,7,2,0,0,1343,1344,7,16,0,0,1344,1345,
	7,7,0,0,1345,1346,7,8,0,0,1346,1347,7,10,0,0,1347,1348,7,8,0,0,1348,312,
	1,0,0,0,1349,1350,7,5,0,0,1350,1351,7,16,0,0,1351,1352,7,3,0,0,1352,1353,
	7,3,0,0,1353,1354,7,10,0,0,1354,1355,7,7,0,0,1355,1356,7,4,0,0,1356,314,
	1,0,0,0,1357,1358,7,9,0,0,1358,1359,7,2,0,0,1359,1360,7,11,0,0,1360,1361,
	7,11,0,0,1361,1362,7,2,0,0,1362,1363,7,19,0,0,1363,1364,7,6,0,0,1364,1365,
	7,7,0,0,1365,1366,7,18,0,0,1366,316,1,0,0,0,1367,1368,7,5,0,0,1368,1369,
	7,16,0,0,1369,1370,7,17,0,0,1370,1371,7,10,0,0,1371,1372,5,95,0,0,1372,
	1373,7,8,0,0,1373,1374,7,6,0,0,1374,1375,7,14,0,0,1375,1376,7,4,0,0,1376,
	318,1,0,0,0,1377,1378,7,8,0,0,1378,1379,7,10,0,0,1379,1380,7,7,0,0,1380,
	1381,7,14,0,0,1381,1382,7,10,0,0,1382,1383,5,95,0,0,1383,1384,7,3,0,0,1384,
	1385,7,0,0,0,1385,1386,7,7,0,0,1386,1387,7,20,0,0,1387,320,1,0,0,0,1388,
	1389,7,11,0,0,1389,1390,7,0,0,0,1390,1391,7,18,0,0,1391,322,1,0,0,0,1392,
	1393,7,11,0,0,1393,1394,7,0,0,0,1394,1395,7,14,0,0,1395,1396,7,4,0,0,1396,
	1397,5,95,0,0,1397,1398,7,23,0,0,1398,1399,7,0,0,0,1399,1400,7,11,0,0,1400,
	1401,7,16,0,0,1401,1402,7,10,0,0,1402,324,1,0,0,0,1403,1404,7,11,0,0,1404,
	1405,7,10,0,0,1405,1406,7,0,0,0,1406,1407,7,8,0,0,1407,326,1,0,0,0,1408,
	1409,7,7,0,0,1409,1410,7,4,0,0,1410,1411,7,15,0,0,1411,1412,5,95,0,0,1412,
	1413,7,23,0,0,1413,1414,7,0,0,0,1414,1415,7,11,0,0,1415,1416,7,16,0,0,1416,
	1417,7,10,0,0,1417,328,1,0,0,0,1418,1419,7,7,0,0,1419,1420,7,4,0,0,1420,
	1421,7,6,0,0,1421,1422,7,11,0,0,1422,1423,7,10,0,0,1423,330,1,0,0,0,1424,
	1425,7,21,0,0,1425,1426,7,10,0,0,1426,1427,7,3,0,0,1427,1428,7,5,0,0,1428,
	1429,7,10,0,0,1429,1430,7,7,0,0,1430,1431,7,4,0,0,1431,1432,5,95,0,0,1432,
	1433,7,3,0,0,1433,1434,7,0,0,0,1434,1435,7,7,0,0,1435,1436,7,20,0,0,1436,
	332,1,0,0,0,1437,1438,7,3,0,0,1438,1439,7,0,0,0,1439,1440,7,7,0,0,1440,
	1441,7,20,0,0,1441,334,1,0,0,0,1442,1443,7,3,0,0,1443,1444,7,2,0,0,1444,
	1445,7,19,0,0,1445,1446,5,95,0,0,1446,1447,7,7,0,0,1447,1448,7,16,0,0,1448,
	1449,7,17,0,0,1449,1450,7,1,0,0,1450,1451,7,10,0,0,1451,1452,7,3,0,0,1452,
	336,1,0,0,0,1453,1454,7,18,0,0,1454,1455,7,10,0,0,1455,1456,7,7,0,0,1456,
	1457,7,10,0,0,1457,1458,7,3,0,0,1458,1459,7,0,0,0,1459,1460,7,4,0,0,1460,
	1461,7,10,0,0,1461,1462,7,8,0,0,1462,338,1,0,0,0,1463,1464,7,0,0,0,1464,
	1465,7,11,0,0,1465,1466,7,19,0,0,1466,1467,7,0,0,0,1467,1468,7,12,0,0,1468,
	1469,7,14,0,0,1469,340,1,0,0,0,1470,1471,7,14,0,0,1471,1472,7,4,0,0,1472,
	1473,7,2,0,0,1473,1474,7,3,0,0,1474,1475,7,10,0,0,1475,1476,7,8,0,0,1476,
	342,1,0,0,0,1477,1478,7,4,0,0,1478,1479,7,3,0,0,1479,1480,7,16,0,0,1480,
	1481,7,10,0,0,1481,344,1,0,0,0,1482,1483,7,9,0,0,1483,1484,7,0,0,0,1484,
	1485,7,11,0,0,1485,1486,7,14,0,0,1486,1487,7,10,0,0,1487,346,1,0,0,0,1488,
	1489,7,19,0,0,1489,1490,7,6,0,0,1490,1491,7,7,0,0,1491,1492,7,8,0,0,1492,
	1493,7,2,0,0,1493,1494,7,19,0,0,1494,348,1,0,0,0,1495,1496,7,7,0,0,1496,
	1497,7,16,0,0,1497,1498,7,11,0,0,1498,1499,7,11,0,0,1499,1500,7,14,0,0,
	1500,350,1,0,0,0,1501,1502,7,9,0,0,1502,1503,7,6,0,0,1503,1504,7,3,0,0,
	1504,1505,7,14,0,0,1505,1506,7,4,0,0,1506,352,1,0,0,0,1507,1508,7,11,0,
	0,1508,1509,7,0,0,0,1509,1510,7,14,0,0,1510,1511,7,4,0,0,1511,354,1,0,0,
	0,1512,1513,7,9,0,0,1513,1514,7,6,0,0,1514,1515,7,11,0,0,1515,1516,7,4,
	0,0,1516,1517,7,10,0,0,1517,1518,7,3,0,0,1518,356,1,0,0,0,1519,1520,7,18,
	0,0,1520,1521,7,3,0,0,1521,1522,7,2,0,0,1522,1523,7,16,0,0,1523,1524,7,
	21,0,0,1524,1525,7,14,0,0,1525,358,1,0,0,0,1526,1527,7,10,0,0,1527,1528,
	7,22,0,0,1528,1529,7,5,0,0,1529,1530,7,11,0,0,1530,1531,7,16,0,0,1531,1532,
	7,8,0,0,1532,1533,7,10,0,0,1533,360,1,0,0,0,1534,1535,7,4,0,0,1535,1536,
	7,6,0,0,1536,1537,7,10,0,0,1537,1538,7,14,0,0,1538,362,1,0,0,0,1539,1540,
	7,2,0,0,1540,1541,7,4,0,0,1541,1542,7,15,0,0,1542,1543,7,10,0,0,1543,1544,
	7,3,0,0,1544,1545,7,14,0,0,1545,364,1,0,0,0,1546,1547,7,8,0,0,1547,1548,
	7,2,0,0,1548,366,1,0,0,0,1549,1550,7,7,0,0,1550,1551,7,2,0,0,1551,1552,
	7,4,0,0,1552,1553,7,15,0,0,1553,1554,7,6,0,0,1554,1555,7,7,0,0,1555,1556,
	7,18,0,0,1556,368,1,0,0,0,1557,1563,5,34,0,0,1558,1562,8,26,0,0,1559,1560,
	5,34,0,0,1560,1562,5,34,0,0,1561,1558,1,0,0,0,1561,1559,1,0,0,0,1562,1565,
	1,0,0,0,1563,1561,1,0,0,0,1563,1564,1,0,0,0,1564,1566,1,0,0,0,1565,1563,
	1,0,0,0,1566,1593,5,34,0,0,1567,1573,5,96,0,0,1568,1572,8,27,0,0,1569,1570,
	5,96,0,0,1570,1572,5,96,0,0,1571,1568,1,0,0,0,1571,1569,1,0,0,0,1572,1575,
	1,0,0,0,1573,1571,1,0,0,0,1573,1574,1,0,0,0,1574,1576,1,0,0,0,1575,1573,
	1,0,0,0,1576,1593,5,96,0,0,1577,1581,5,91,0,0,1578,1580,8,28,0,0,1579,1578,
	1,0,0,0,1580,1583,1,0,0,0,1581,1579,1,0,0,0,1581,1582,1,0,0,0,1582,1584,
	1,0,0,0,1583,1581,1,0,0,0,1584,1593,5,93,0,0,1585,1589,7,29,0,0,1586,1588,
	7,30,0,0,1587,1586,1,0,0,0,1588,1591,1,0,0,0,1589,1587,1,0,0,0,1589,1590,
	1,0,0,0,1590,1593,1,0,0,0,1591,1589,1,0,0,0,1592,1557,1,0,0,0,1592,1567,
	1,0,0,0,1592,1577,1,0,0,0,1592,1585,1,0,0,0,1593,370,1,0,0,0,1594,1596,
	3,389,194,0,1595,1594,1,0,0,0,1596,1597,1,0,0,0,1597,1595,1,0,0,0,1597,
	1598,1,0,0,0,1598,1606,1,0,0,0,1599,1603,5,46,0,0,1600,1602,3,389,194,0,
	1601,1600,1,0,0,0,1602,1605,1,0,0,0,1603,1601,1,0,0,0,1603,1604,1,0,0,0,
	1604,1607,1,0,0,0,1605,1603,1,0,0,0,1606,1599,1,0,0,0,1606,1607,1,0,0,0,
	1607,1615,1,0,0,0,1608,1610,5,46,0,0,1609,1611,3,389,194,0,1610,1609,1,
	0,0,0,1611,1612,1,0,0,0,1612,1610,1,0,0,0,1612,1613,1,0,0,0,1613,1615,1,
	0,0,0,1614,1595,1,0,0,0,1614,1608,1,0,0,0,1615,1625,1,0,0,0,1616,1618,7,
	10,0,0,1617,1619,7,31,0,0,1618,1617,1,0,0,0,1618,1619,1,0,0,0,1619,1621,
	1,0,0,0,1620,1622,3,389,194,0,1621,1620,1,0,0,0,1622,1623,1,0,0,0,1623,
	1621,1,0,0,0,1623,1624,1,0,0,0,1624,1626,1,0,0,0,1625,1616,1,0,0,0,1625,
	1626,1,0,0,0,1626,1636,1,0,0,0,1627,1628,5,48,0,0,1628,1629,7,22,0,0,1629,
	1631,1,0,0,0,1630,1632,3,387,193,0,1631,1630,1,0,0,0,1632,1633,1,0,0,0,
	1633,1631,1,0,0,0,1633,1634,1,0,0,0,1634,1636,1,0,0,0,1635,1614,1,0,0,0,
	1635,1627,1,0,0,0,1636,372,1,0,0,0,1637,1641,5,63,0,0,1638,1640,3,389,194,
	0,1639,1638,1,0,0,0,1640,1643,1,0,0,0,1641,1639,1,0,0,0,1641,1642,1,0,0,
	0,1642,1647,1,0,0,0,1643,1641,1,0,0,0,1644,1645,7,32,0,0,1645,1647,3,369,
	184,0,1646,1637,1,0,0,0,1646,1644,1,0,0,0,1647,374,1,0,0,0,1648,1654,5,
	39,0,0,1649,1653,8,33,0,0,1650,1651,5,39,0,0,1651,1653,5,39,0,0,1652,1649,
	1,0,0,0,1652,1650,1,0,0,0,1653,1656,1,0,0,0,1654,1652,1,0,0,0,1654,1655,
	1,0,0,0,1655,1657,1,0,0,0,1656,1654,1,0,0,0,1657,1658,5,39,0,0,1658,376,
	1,0,0,0,1659,1660,7,22,0,0,1660,1661,3,375,187,0,1661,378,1,0,0,0,1662,
	1663,5,45,0,0,1663,1664,5,45,0,0,1664,1668,1,0,0,0,1665,1667,8,34,0,0,1666,
	1665,1,0,0,0,1667,1670,1,0,0,0,1668,1666,1,0,0,0,1668,1669,1,0,0,0,1669,
	1676,1,0,0,0,1670,1668,1,0,0,0,1671,1673,5,13,0,0,1672,1671,1,0,0,0,1672,
	1673,1,0,0,0,1673,1674,1,0,0,0,1674,1677,5,10,0,0,1675,1677,5,0,0,1,1676,
	1672,1,0,0,0,1676,1675,1,0,0,0,1677,1678,1,0,0,0,1678,1679,6,189,0,0,1679,
	380,1,0,0,0,1680,1681,5,47,0,0,1681,1682,5,42,0,0,1682,1686,1,0,0,0,1683,
	1685,9,0,0,0,1684,1683,1,0,0,0,1685,1688,1,0,0,0,1686,1687,1,0,0,0,1686,
	1684,1,0,0,0,1687,1689,1,0,0,0,1688,1686,1,0,0,0,1689,1690,5,42,0,0,1690,
	1691,5,47,0,0,1691,1692,1,0,0,0,1692,1693,6,190,0,0,1693,382,1,0,0,0,1694,
	1695,7,35,0,0,1695,1696,1,0,0,0,1696,1697,6,191,0,0,1697,384,1,0,0,0,1698,
	1699,9,0,0,0,1699,386,1,0,0,0,1700,1701,7,36,0,0,1701,388,1,0,0,0,1702,
	1703,7,37,0,0,1703,390,1,0,0,0,26,0,1561,1563,1571,1573,1581,1589,1592,
	1597,1603,1606,1612,1614,1618,1623,1625,1633,1635,1641,1646,1652,1654,1668,
	1672,1676,1686,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLiteLexer.__ATN) {
			SQLiteLexer.__ATN = new ATNDeserializer().deserialize(SQLiteLexer._serializedATN);
		}

		return SQLiteLexer.__ATN;
	}


	static DecisionsToDFA = SQLiteLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}