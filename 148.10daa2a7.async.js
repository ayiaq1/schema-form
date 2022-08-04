(self.webpackChunk_dawdler_schema_form_doc=self.webpackChunk_dawdler_schema_form_doc||[]).push([[148],{99675:function(){eval(`// extracted by mini-css-extract-plugin//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTk2NzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL1NvdXJjZUNvZGUubGVzcz8yNWE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///99675
`)},11695:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ builtins_SourceCode; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/prism/index.js
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */

 var Prism = (function () {

	// Private helper vars
	var lang = /(?:^|\\s)lang(?:uage)?-([\\w-]+)(?=\\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a \`language-xxxx\` or \`lang-xxxx\` class.
			 *
			 * If no language is set for the element or the element is \`null\` or \`undefined\`, \`none\` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism \`language-xxxx\` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all \`language-xxxx\` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new \`language-xxxx\` class
				// (using \`classList\` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns whether a given class is active for \`element\`.
			 *
			 * The class can be activated if \`element\` or one of its ancestors has the given class and it can be deactivated
			 * if \`element\` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a \`no-\` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of \`element\` (where \`element\` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither \`element\` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in \`redef\` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in \`redef\` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in \`Prism.languages\`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\\b(?:red|green|blue)\\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through \`<style>\` elements. To do this, it needs to modify \`Prism.languages.markup\` and add the
			 * appropriate tokens. However, \`Prism.languages.markup\` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * \`\`\`js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * \`\`\`
			 *
			 * then the \`style\` token will be added (and processed) at the end. \`insertBefore\` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * \`\`\`js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * \`\`\`
			 *
			 * ## Special cases
			 *
			 * If the grammars of \`inside\` and \`insert\` have tokens with the same name, the tokens in \`inside\`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after \`before\`:
			 *
			 * \`\`\`js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * \`\`\`
			 *
			 * ## Limitations
			 *
			 * The main problem \`insertBefore\` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So \`insertBefore\` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, \`insertBefore\` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from \`Prism.languages\` or \`insert\` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * \`\`\`js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * \`\`\`
			 *
			 * @param {string} inside The property of \`root\` (e.g. a language id in \`Prism.languages\`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing \`inside\`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to \`Prism.languages\`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},


		/**
		 * Low-level function, only use if you know what you\u2019re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. \`before-tokenize\`
		 * 2. \`after-tokenize\`
		 * 3. \`wrap\`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like \`Prism.languages.markup\`.
		 * @param {string} language The name of the language definition passed to \`grammar\`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like \`Prism.languages.markup\`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = \`var foo = 0;\`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(\`Found numeric literal: \${token.content}\`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an \`inside\` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. \`wrap\`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes \`count\` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}

	return _;

}());

var prism = Prism;
Prism.default = Prism;

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\\s\\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\\?[\\s\\S]+?\\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\\]]|"[^"]*"|'[^']*')+(?:\\[(?:[^<"'\\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\\]\\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\\[]*\\[)[\\s\\S]+(?=\\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\\[CDATA\\[[\\s\\S]*?\\]\\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\\/?(?!\\d)[^\\s>\\/=$<%]+(?:\\s(?:\\s*[^\\s>\\/=]+(?:\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))|(?=[\\s/>])))+)?\\s*\\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\\/?[^\\s>\\/]+/,
        inside: {
          'punctuation': /^<\\/?/,
          'namespace': /^[^\\s>\\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\\/?>/,
      'attr-name': {
        pattern: /[^\\s>\\/]+/,
        inside: {
          'namespace': /^[^\\s>\\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with \`<style>\` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\\[CDATA\\[)[\\s\\S]+?(?=\\]\\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\\[CDATA\\[|\\]\\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\\[CDATA\\[[\\s\\S]*?\\]\\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\\s\\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with \`style\` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\\s])/.source + '(?:' + attrName + ')' + /\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\\s=]+/,
        'attr-value': {
          pattern: /=[\\s\\S]+/,
          inside: {
            'value': {
              pattern: /(^=\\s*(["']|(?!["'])))\\S[\\s\\S]*(?=\\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\\w+\\2)[ \\t]+\\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\\$?\\(\\([\\s\\S]+?\\)\\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\\$\\(\\([\\s\\S]+)\\)\\)/,
          lookbehind: true
        }, /^\\$\\(\\(/],
        'number': /\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee]-?\\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\\+\\+|\\*\\*=?|<<=?|>>=?|&&|\\|\\||[=!+\\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\\(\\(?|\\)\\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\\$\\((?:\\([^)]+\\)|[^()])+\\)|\`[^\`]+\`/,
      greedy: true,
      inside: {
        'variable': /^\\$\\(|^\`|\\)$|\`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\\$\\{[^}]+\\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\\/]|##?|%%?|\\^\\^?|,,?/,
        'punctuation': /[\\[\\]]/,
        'environment': {
          pattern: RegExp('(\\\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\\$(?:\\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\\\(?:[abceEfnrtv\\\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\\s*\\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not \u201Cfoo {\u201D
    {
      // a) and c)
      pattern: /(\\bfunction\\s+)[\\w-]+(?=(?:\\s*\\(?:\\s*\\))?\\s*\\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\\b[\\w-]+(?=\\s*\\(\\s*\\)\\s*\\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\\b(?:for|select)\\s+)\\w+(?=\\s+in\\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (\u201C=\u201D and \u201C+=\u201D).
    'assign-left': {
      pattern: /(^|[\\s;|&]|[<>]\\()\\w+(?=\\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\\\s;|&]|[<>]\\\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\\s*)(\\w+)\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // \u2192 No expansion (so no \u201Cinside\u201D).
    {
      pattern: /((?:^|[^<])<<-?\\s*)(["'])(\\w+)\\2\\s[\\s\\S]*?(?:\\r?\\n|\\r)\\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // \u201CNormal\u201D string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\\\](?:\\\\\\\\)*)"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|\`[^\`]+\`|[^"\\\\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\\s;|&]|[<>]\\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\\s;|&]|[<>]\\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\\s;|&]|[<>]\\()(?:\\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\\s;|&]|[<>]\\()(?:false|true)(?=$|[)\\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\\B&\\d\\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\\d?<>|>\\||\\+=|=[=~]?|!=?|<<[<-]?|[&\\d]?>>|\\d[<>]&?|[<>][&=]?|&[>&]?|\\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\\$?\\(\\(?|\\)\\)?|\\.\\.|[{}[\\];\\\\]/,
    'number': {
      pattern: /(^|\\s)(?:[1-9]\\d*|0)(?:[.,]\\d+)?\\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\\\:])\\/\\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\\\]/
    }
  },
  'keyword': /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,
  'boolean': /\\b(?:false|true)\\b/,
  'function': /\\b\\w+(?=\\()/,
  'number': /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,
  'punctuation': /[{}[\\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\\/\\/(?:[^\\r\\n\\\\]|\\\\(?:\\r\\n?|\\n|(?![\\r\\n])))*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\\b(?:enum|struct)\\s+(?:__attribute__\\s*\\(\\([\\s\\S]*?\\)\\)\\s*)?)\\w+|\\b[a-z]\\w*_t\\b/,
    lookbehind: true
  },
  'keyword': /\\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\\b/,
  'function': /\\b[a-z_]\\w*(?=\\s*\\()/i,
  'number': /(?:\\b0x(?:[\\da-f]+(?:\\.[\\da-f]*)?|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\\\(?:\\r\\n|[\\s\\S])|[^'\\\\\\r\\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\\t ]*)#\\s*[a-z](?:[^\\r\\n\\\\/]|\\/(?!\\*)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/|\\\\(?:\\r\\n|[\\s\\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\\s*include\\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\\s*define\\s+)\\w+\\b(?!\\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\\s*define\\s+)\\w+\\b(?=\\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\\\(?=[\\r\\n])/,
      'expression': {
        pattern: /\\S[\\s\\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\\b/;
  var modName = /\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The \`foo\` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\\b[A-Z]\\w*(?=\\s*::\\s*\\w+\\s*\\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\\b[A-Z_]\\w*(?=\\s*::\\s*~\\w+\\s*\\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\\b\\w+(?=\\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\\s*::\\s*\\w+\\s*\\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\\b0b[01']+|\\b0x(?:[\\da-f']+(?:\\.[\\da-f']*)?|\\.[\\da-f']+)(?:p[+-]?[\\d']+)?|(?:\\b[\\d']+(?:\\.[\\d']*)?|\\B\\.[\\d']+)(?:e[+-]?[\\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\\+\\+|&&|\\|\\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\\b/,
    'boolean': /\\b(?:false|true)\\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\\b(?:import|module)\\s+)/.source + '(?:' + // header-name
      /"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"|<[^<>\\r\\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\\s\\S]+/,
        'operator': /:/,
        'punctuation': /\\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\\\ ]{0,16})\\([\\s\\S]*?\\)\\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\\b(?!operator\\b)[a-z_]\\w*\\s*<(?:[^<>]|<[^<>]*>)*>(?=\\s*\\()/i,
      inside: {
        'function': /^\\w+/,
        'generic': {
          pattern: /<[\\s\\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\\b(?:class|struct)\\s+\\w+\\s*:\\s*)[^;{}"'\\s]+(?:\\s+[^;{}"'\\s]+)*(?=\\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\\b[a-z_]\\w*\\b(?!\\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"|'(?:\\\\(?:\\r\\n|[\\s\\S])|[^'\\\\\\r\\n])*')/;
  Prism.languages.css = {
    'comment': /\\/\\*[\\s\\S]*?\\*\\//,
    'atrule': {
      pattern: /@[\\w-](?:[^;{\\s]|\\s+(?![\\s{]))*(?:;|(?=\\s*\\{))/,
      inside: {
        'rule': /^@[\\w-]+/,
        'selector-function-argument': {
          pattern: /(\\bselector\\s*\\(\\s*(?![\\s)]))(?:[^()\\s]|\\s+(?![\\s)])|\\((?:[^()]|\\([^()]*\\))*\\))+(?=\\s*\\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\\w-])(?:and|not|only|or)(?![\\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\\\burl\\\\((?:' + string.source + '|' + /(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*/.source + ')\\\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\\(|\\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\\\s])[^{}\\\\s](?:[^{};"\\'\\\\s]|\\\\s+(?![\\\\s{])|' + string.source + ')*(?=\\\\s*\\\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\\w\\xA0-\\uFFFF])(?!\\s)[-_a-z\\xA0-\\uFFFF](?:(?!\\s)[-\\w\\xA0-\\uFFFF])*(?=\\s*:)/i,
      lookbehind: true
    },
    'important': /!important\\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\\w]+/,
      'pseudo-class': /:[-\\w]+/,
      'class': /\\.[-\\w]+/,
      'id': /#[-\\w]+/,
      'attribute': {
        pattern: RegExp('\\\\[(?:[^[\\\\]"\\']|' + string.source + ')*\\\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\\[|\\]$/,
          'case-sensitivity': {
            pattern: /(\\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\\s*)(?:(?!\\s)[-*\\w\\xA0-\\uFFFF])*\\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\\|$/
            }
          },
          'attr-name': {
            pattern: /^(\\s*)(?:(?!\\s)[-\\w\\xA0-\\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\\s*)(?:(?!\\s)[-\\w\\xA0-\\uFFFF])+(?=\\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\\(\\s*)[+-]?\\d*[\\dn](?:\\s*[+-]\\s*\\d+)?(?=\\s*\\))/,
        lookbehind: true,
        inside: {
          'number': /[\\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\\(\\s*)(?:even|odd)(?=\\s*\\))/i,
        lookbehind: true
      }],
      'combinator': />|\\+|~|\\|\\|/,
      // the \`tag\` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\\w\\xA0-\\uFFFF])--(?!\\s)[-_a-z\\xA0-\\uFFFF](?:(?!\\s)[-\\w\\xA0-\\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\\b\\d+)(?:%|[a-z]+(?![\\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\\w.-])-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\\s)[+\\-*\\/](?=\\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\\B#[\\da-f]{3,8}\\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\\w-])/i,
      lookbehind: true
    }, {
      pattern: /\\b(?:hsl|rgb)\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*\\)\\B|\\b(?:hsl|rgb)a\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*,\\s*(?:0|0?\\.\\d+|1)\\s*\\)\\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\\w-]+(?=\\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\\\[\\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\\w\\xA0-\\uFFFF])(?!\\s)[_$A-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\\})\\s*)catch\\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\\.\\.\\.\\s*)\\b(?:as|assert(?=\\s*\\{)|async(?=\\s*(?:function\\b|\\(|[$\\w\\xA0-\\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\\s*(?:\\{|$))|for|from(?=\\s*(?:['"]|$))|function|(?:get|set)(?=\\s*(?:[#\\[$\\w\\xA0-\\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*(?:\\.\\s*(?:apply|bind|call)\\s*)?\\()/,
  'number': {
    pattern: RegExp(/(^|[^\\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\\d+(?:_\\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?/.source) + ')' + /(?![\\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\\+\\+|\\*\\*=?|=>|&&=?|\\|\\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\\.{3}|\\?\\?=?|\\?\\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\\b(?:class|extends|implements|instanceof|interface|new)\\s+)[\\w.\\\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\\/)[\\s\\S]+(?=\\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\\/|\\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*[=:]\\s*(?:async\\s*)?(?:\\bfunction\\b|(?:\\((?:[^()]|\\([^()]*\\))*\\)|(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*)\\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\\s+(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*)?\\s*\\(\\s*)(?!\\s)(?:[^()\\s]|\\s+(?![\\s)])|\\([^()]*\\))+(?=\\s*\\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\\w\\xA0-\\uFFFF])(?!\\s)[_$a-z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\\(\\s*)(?!\\s)(?:[^()\\s]|\\s+(?![\\s)])|\\([^()]*\\))+(?=\\s*\\)\\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\\b|\\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\\w\\xA0-\\uFFFF]))(?:(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*\\s*)\\(\\s*|\\]\\s*\\(\\s*)(?!\\s)(?:[^()\\s]|\\s+(?![\\s)])|\\([^()]*\\))+(?=\\s*\\)\\s*\\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\\b[A-Z](?:[A-Z_]|\\dx?)*\\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /\`(?:\\\\[\\s\\S]|\\$\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}|(?!\\$\\{)[^\\\\\`])*\`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^\`|\`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\\\])(?:\\\\{2})*)\\$\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\\$\\{|\\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\\s\\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \\t]*)(["'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\2)[^\\\\\\r\\n])*\\2(?=\\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \\t]*)(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\\s|\\/\\/.*(?!.)|\\/\\*(?:[^*]|\\*(?!\\/))\\*\\/)/.source;
  var braces = /(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})/.source;
  var spread = /(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\\/?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[\\s\\S]|[^\\\\"])*"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\\/?[^\\s>\\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\\{)(?:"(?:\\\\[\\s\\S]|[^\\\\"])*"|'(?:\\\\[\\s\\S]|[^\\\\'])*'|[^\\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\\w*(?:\\.[A-Z]\\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\\\.\\\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\\\.\\\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\\b(?:[A-Z]\\w*)Error\\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the \`<ID>\` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\\b(?:as|default|export|from|import)\\b/,
    alias: 'module'
  }, {
    pattern: /\\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\\b/,
    alias: 'control-flow'
  }, {
    pattern: /\\bnull\\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\\bundefined\\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\\.\\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\\w\\xA0-\\uFFFF])[A-Z][$\\w\\xA0-\\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\\bconsole(?=\\s*\\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\\s\\S]*/;
  }
})(prism);
/* "prismjs/components/prism-js-templates" */


(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return \`undefined\` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. \`markdown\`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^\`|\`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\\s\\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css\`a { color: #25F; }\`
  // styled-components:
  //   styled.h1\`color: red;\`
  createTemplate('css', /\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html\`<p></p>\`
  // div.innerHTML = \`<p></p>\`
  createTemplate('html', /\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?=/.source), // svg\`<path fill="#fff" d="M55.37 ..."/>\`
  createTemplate('svg', /\\bsvg/.source), // md\`# h1\`, markdown\`## h2\`
  createTemplate('markdown', /\\b(?:markdown|md)/.source), // gql\`...\`, graphql\`...\`, graphql.experimental\`...\`
  createTemplate('graphql', /\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)/.source), // sql\`...\`
  createTemplate('sql', /\\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of \`Prism.tokenize\` but also runs the \`before-tokenize\` and \`after-tokenize\` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. \`"\${42}"\`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "\${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "\`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "\`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\\{).+/;
  var interpolation = {
    pattern: /#\\{[^}]+\\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\\\[\\s\\S]|[^\\\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\\\[\\s\\S]|[^\\\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\\b/,
    'class-member': {
      pattern: /@(?!\\d)\\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\\s\\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\\/{3}[\\s\\S]*?\\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /\`(?:\\\\[\\s\\S]|[^\\\\\`])*\`/,
      inside: {
        'delimiter': {
          pattern: /^\`|\`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\\s\\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\\s\\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\\s\\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\\d)\\w+(?=\\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\\*{3}|-{3}|\\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\\r\\n?|\\n|(?![\\\\s\\\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\\s\\S]).*(?:\\r\\n?|\\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\\s\\S]/,
          alias: /\\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-\u2013].*/m,
  'inserted': /^\\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\\s--?\\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \\w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\\\])"(?:\\\\.|[^"\\\\\\r\\n])*"|\`[^\`]*\`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\\b/,
  'boolean': /\\b(?:_|false|iota|nil|true)\\b/,
  'number': [// binary and octal integers
  /\\b0(?:b[01_]+|o[0-7_]+)i?\\b/i, // hexadecimal integers and floats
  /\\b0x(?:[a-f\\d_]+(?:\\.[a-f\\d_]*)?|\\.[a-f\\d_]+)(?:p[+-]?\\d+(?:_\\d+)*)?i?(?!\\w)/i, // decimal integers and floats
  /(?:\\b\\d[\\d_]*(?:\\.[\\d_]*)?|\\B\\.\\d[\\d_]*)(?:e[+-]?[\\d_]+)?i?(?!\\w)/i],
  'operator': /[*\\/%^!=]=?|\\+[=+]?|-[=-]?|\\|[=|]?|&(?:=|&|\\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\\.\\.\\./,
  'builtin': /\\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\\\.|[^'\\\\\\r\\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-graphql" */

prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\\\.|[^\\\\"\\r\\n])*")(?=\\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\\1)[\\s\\S]+(?=\\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\\\.|[^\\\\"\\r\\n])*"/,
    greedy: true
  },
  'number': /(?:\\B-|\\b)\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,
  'boolean': /\\b(?:false|true)\\b/,
  'variable': /\\$[a-z_]\\w*/i,
  'directive': {
    pattern: /@[a-z_]\\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\\b[a-z_]\\w*(?=\\s*(?:\\((?:[^()"]|"(?:\\\\.|[^\\\\"\\r\\n])*")*\\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\\b[A-Z]\\w*Input\\b/,
    alias: 'class-name'
  },
  'scalar': /\\b(?:Boolean|Float|ID|Int|String)\\b/,
  'constant': /\\b[A-Z][A-Z_\\d]*\\b/,
  'class-name': {
    pattern: /(\\b(?:enum|implements|interface|on|scalar|type|union)\\s+|&\\s*|:\\s*|\\[)[A-Z_]\\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\\bfragment\\s+|\\.{3}\\s*(?!on\\b))[a-zA-Z_]\\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\\bmutation\\s+)[a-zA-Z_]\\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\\bquery\\s+)[a-zA-Z_]\\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\\b/,
  'operator': /[!=|&]|\\.{3}/,
  'property-query': /\\w+(?=\\s*\\()/,
  'object': /\\w+(?=\\s*\\{)/,
  'punctuation': /[!(){}\\[\\]:=,]/,
  'property': /\\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that \`token[currentIndex - 1]\` is an opening bracket.
   *
   * If no closing bracket could be found, \`-1\` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\\($/, /^\\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\\{$/, /^\\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching \`placeholderPattern\`.
       *
       * If \`replaceFilter\` is provided, only matches of \`placeholderPattern\` for which \`replaceFilter\` returns
       * \`true\` will be replaced.
       *
       * @param {object} env The environment of the \`before-tokenize\` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the \`after-tokenize\` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\\{\\{![\\s\\S]*?\\}\\}/,
    'delimiter': {
      pattern: /^\\{\\{\\{?|\\}\\}\\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,
    'number': /\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee][+-]?\\d+)?/,
    'boolean': /\\b(?:false|true)\\b/,
    'block': {
      pattern: /^(\\s*(?:~\\s*)?)[#\\/]\\S+?(?=\\s*(?:~\\s*)?$|\\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\\[[^\\]]+\\]/,
      inside: {
        punctuation: /\\[|\\]/,
        variable: /[\\s\\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\\/;<=>@\\[\\\\\\]^\`{|}~]/,
    'variable': /[^!"#%&'()*+,\\/;<=>@\\[\\\\\\]^\`{|}~\\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\\{\\{\\{[\\s\\S]+?\\}\\}\\}|\\{\\{[\\s\\S]+?\\}\\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?=\\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\\\])"(?:\\\\.|[^\\\\"\\r\\n])*"(?!\\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,
    greedy: true
  },
  'number': /-?\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,
  'punctuation': /[{}[\\],]/,
  'operator': /:/,
  'boolean': /\\b(?:false|true)\\b/,
  'null': {
    pattern: /\\bnull\\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\\/\\*[\\s\\S]*?\\*\\//, {
    pattern: /(^|[^\\\\])\\/\\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\\w-](?:\\((?:[^(){}]|\\([^(){}]*\\))*\\)|[^(){};\\s]|\\s+(?!\\s))*?(?=\\s*\\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\\{[\\w-]+\\}|[^{};\\s@])(?:@\\{[\\w-]+\\}|\\((?:[^(){}]|\\([^(){}]*\\))*\\)|[^(){};@\\s]|\\s+(?!\\s))*?(?=\\s*\\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\\w-]+/
    }
  },
  'property': /(?:@\\{[\\w-]+\\}|[\\w-])+(?:\\+_?)?(?=\\s*:)/,
  'operator': /[+\\-*\\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\\w-]+\\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\\s*)[.#](?!\\d)[\\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\\\])#(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\\.[A-Z][^:#=\\s]+(?=\\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\\s]|[ \\t]+(?![\\s:]))+(?=\\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\\$+(?:(?!\\$)[^(){}:#=\\s]+|(?=[({]))/
    }
  },
  'variable': /\\$+(?:(?!\\$)[^(){}:#=\\s]+|\\([@*%<^+?][DF]\\)|(?=[({]))/,
  // Directives
  'keyword': /-include\\b|\\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\\b/,
  'function': {
    pattern: /(\\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \\t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\\\])(?:\\\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\\\.|\`\`(?:[^\`\\r\\n]|\`(?!\`))+\`\`|\`[^\`\\r\\n]+\`|[^\\\\|\\r\\n\`])+/.source;
  var tableRow = /\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\\s*[\\r\\n])?)---(?!.)[\\s\\S]*?[\\r\\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\\S+(?:\\s+\\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\\n)[ \\t]*\\n|(?:^|\\r\\n?)[ \\t]*\\r\\n?)(?: {4}|\\t).+(?:(?:\\n|\\r\\n?)(?: {4}|\\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // \`\`\`optional language
      // code block
      // \`\`\`
      pattern: /^\`\`\`[\\s\\S]*?^\`\`\`$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(\`\`\`.*(?:\\n|\\r\\n?))[\\s\\S]+?(?=(?:\\n|\\r\\n?)^\`\`\`$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(\`\`\`).+/,
          lookbehind: true
        },
        'punctuation': /\`\`\`/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\\S.*(?:\\n|\\r\\n?)(?:==+|--+)(?=[ \\t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\\s*)([*-])(?:[\\t ]*\\2){2,}(?=\\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\\s*)(?:[*+-]|\\d+\\.)(?=[\\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\\[[^\\]]+\\]:[\\t ]+(?:\\S+|<(?:\\\\.|[^>\\\\])+>)(?:[\\t ]+(?:"(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\\((?:\\\\.|[^)\\\\])*\\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\\[)[^\\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\\((?:\\\\.|[^)\\\\])*\\))$/,
        'punctuation': /^[\\[\\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\\s\\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\\*\\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\\s\\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\\s\\S]+(?=\\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // \`code\`
      // \`\`code\`\`
      pattern: /(^|[^\\\\\`])(?:\`\`[^\`\\r\\n]+(?:\`[^\`\\r\\n]+)*\`\`(?!\`)|\`[^\`\\r\\n]+\`(?!\`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\\[)[^\\]]+(?=\\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\\][ \\t]?\\[)[^\\]]+(?=\\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\\]\\()[^\\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \\t]+)"(?:\\\\.|[^"\\\\])*"(?=\\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct \`language-xxxx\` class to this code block. Keep in mind that the \`code-language\` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">\`\`\`</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\\n', // exactly one new lines (\\r or \\n or \\r\\n)
         *     <span class="code-block">...</span>,
         *     '\\n', // exactly one new lines again
         *     <span class="punctuation">\`\`\`</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\\b#/g, 'sharp').replace(/\\b\\+\\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support \`String.fromCodePoint\`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\\w{1,8}|#x?[\\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-objectivec" */


prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\\\(?:\\r\\n|[\\s\\S])|[^"\\\\\\r\\n])*"/,
    greedy: true
  },
  'keyword': /\\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\\b/,
  'operator': /-[->]?|\\+\\+?|!=?|<<?=?|>>?=?|==?|&&?|\\|\\|?|[~^%?*\\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\\(\\*[\\s\\S]*?\\*\\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\\\\r\\n']|\\\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\\\(?:[\\s\\S]|\\r\\n)|[^\\\\\\r\\n"])*"/,
    greedy: true
  }, {
    pattern: /\\{([a-z_]*)\\|[\\s\\S]*?\\|\\1\\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\\b/i, // hexadecimal
  /\\b0x[a-f0-9][a-f0-9_]*(?:\\.[a-f0-9_]*)?(?:p[+-]?\\d[\\d_]*)?(?!\\w)/i, // decimal
  /\\b\\d[\\d_]*(?:\\.[\\d_]*)?(?:e[+-]?\\d[\\d_]*)?(?!\\w)/i],
  'directive': {
    pattern: /\\B#\\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\\B~\\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\\B'\\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /\`\\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\\b/,
  'boolean': /\\b(?:false|true)\\b/,
  'operator-like-punctuation': {
    pattern: /\\[[<>|]|[>|]\\]|\\{<|>\\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\\.[.~]|:[=>]|[=<>@^|&+\\-*\\/$%!?~][!$%&*+\\-.\\/:<=>?@^|~]*|\\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\\b/,
  'punctuation': /;;|::|[(){}\\[\\].,:;#]|\\b_\\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\\s\\S]*?\\1|("|')(?:\\\\.|(?!\\2)[^\\\\\\r\\n])*\\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\\{\\{)*)\\{(?!\\{)(?:[^{}]|\\{(?!\\{)(?:[^{}]|\\{(?!\\{)(?:[^{}])+\\})+\\})+\\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\\s\\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\\s\\S]*?\\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\\s)def[ \\t]+)[a-zA-Z_]\\w*(?=\\s*\\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\\bclass\\s+)\\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\\t ]*)@\\w+(?:\\.\\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\\./
    }
  },
  'keyword': /\\b(?:_(?=\\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\\b/,
  'builtin': /\\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\\b/,
  'boolean': /\\b(?:False|None|True)\\b/,
  'number': /\\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\\b|(?:\\b\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\B\\.\\d+(?:_\\d+)*)(?:e[+-]?\\d+(?:_\\d+)*)?j?(?!\\w)/i,
  'operator': /[-+%=]=?|!=|:=|\\*\\*?=?|\\/\\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\\b[A-Z]\\w*/,
  'keyword': /\\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\\b/,
  'operator': /\\.{3}|:[:=]|\\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~\`]|[+\\-*\\/]\\.?|\\b(?:asr|land|lor|lsl|lsr|lxor|mod)\\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\\\x[\\da-f]{2}|\\\\o[0-3][0-7][0-7]|\\\\\\d{3}|\\\\.|[^'\\\\\\r\\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\\b[A-Z]\\w*\\b(?!\\s*\\.)/,
  'label': {
    pattern: /\\b[a-z]\\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \\t]*)\\/[\\/*].*(?:(?:\\r?\\n|\\r)\\1[ \\t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \\t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/;
  var operator = [/[+*\\/%]|[=!]=|<=?|>=?|\\b(?:and|not|or)\\b/, {
    pattern: /(\\s)-(?=\\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \\t]*\\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \\t]*(?:[^:\\s]+ *:.*|:[^:\\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\\s]+(?=\\s*:)/, {
          pattern: /(:)[^:\\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \\t]*)\\S(?:,[^,\\r\\n]+|[^,\\r\\n]*)(?:,[^,\\r\\n]+)*(?:,(?:\\r?\\n|\\r)\\1[ \\t]+\\S(?:,[^,\\r\\n]+|[^,\\r\\n]*)(?:,[^,\\r\\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\\w-](?:\\([^()]+\\)|[^()\\s]|\\s+(?!\\s))*?(?=\\s+[{;])/,
    inside: {
      'rule': /@[\\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\\S)[^@;{}()]?(?:[^@;{}()\\s]|\\s+(?!\\s)|#\\{\\$[-\\w]+\\})+(?=\\s*\\{(?:\\}|\\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\\w]+/,
      'variable': /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/
    }
  },
  'property': {
    pattern: /(?:[-\\w]|\\$[-\\w]|#\\{\\$[-\\w]+\\})+(?=\\s*:)/,
    inside: {
      'variable': /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\\$[-\\w]+|#\\{\\$[-\\w]+\\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\\b(?:as|hide|show|with)\\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\\B!(?:default|optional)\\b/i,
    alias: 'keyword'
  },
  'boolean': /\\b(?:false|true)\\b/,
  'null': {
    pattern: /\\bnull\\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\\s)(?:[-+*\\/%]|[=!]=|<=?|>=?|and|not|or)(?=\\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|(?:--|\\/\\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'\`])(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])+\\1/,
    greedy: true
  }, /@[\\w.$]+/],
  'string': {
    pattern: /(^|[^@\\\\])("|')(?:\\\\[\\s\\S]|(?!\\2)[^\\\\]|\\2\\2)*\\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\\\])\`(?:\\\\[\\s\\S]|[^\`\\\\]|\`\`)*\`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^\`|\`$/
    }
  },
  'function': /\\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\\s*\\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\\b/i,
  'boolean': /\\b(?:FALSE|NULL|TRUE)\\b/i,
  'number': /\\b0x[\\da-f]+\\b|\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+\\b/i,
  'operator': /[-+*\\/=%^~]|&&?|\\|\\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\\b/i,
  'punctuation': /[;[\\]()\`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\\b\\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\\w.-])-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\\burl\\((["']?).*?\\1\\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\\B!(?:important|optional)\\b/i,
    'keyword': {
      pattern: /(^|\\s+)(?:(?:else|for|if|return|unless)(?=\\s|$)|@[\\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\\da-f]{3,6}/i,
    'color': [/\\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\\b/i, {
      pattern: /\\b(?:hsl|rgb)\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*\\)\\B|\\b(?:hsl|rgb)a\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*,\\s*(?:0|0?\\.\\d+|1)\\s*\\)\\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\\w-]+(?=\\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\\\[\\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\\b(?:false|true)\\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\\/%<>?=]=?|[-:]=|\\*[*=]?|\\.{2,3}|&&|\\|\\||\\B-\\B|\\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\\b/],
    'number': number,
    'punctuation': /[{}()\\[\\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\\{[^\\r\\n}:]+\\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\\{|\\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\\w-]+\\([^)]*\\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \\t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \\t]*)[\\w$-]+\\s*.?=[ \\t]*(?:\\{[^{}]*\\}|\\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \\t]*)(?:else|for|if|return|unless)[ \\t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\\{)([ \\t]*))(?:[\\w-]|\\{[^}\\r\\n]+\\})+(?:\\s*:\\s*|[ \\t]+)(?!\\s)[^{\\r\\n]*(?:;|[^{\\r\\n,]$(?!(?:\\r?\\n|\\r)(?:\\{|\\2[ \\t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \\t]*)(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\)|(?![\\w-]))|\\{[^}\\r\\n]+\\})+)(?:(?:\\r?\\n|\\r)(?:\\1(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\)|(?![\\w-]))|\\{[^}\\r\\n]+\\})+)))*(?:,$|\\{|(?=(?:\\r?\\n|\\r)(?:\\{|\\1[ \\t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\\[\\];:.]/
  };
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\\b(?:class|extends|implements|instanceof|interface|new|type)\\s+)(?!keyof\\b)(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?:\\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\\b(?:abstract|declare|is|keyof|readonly|require)\\b/, // keywords that have to be followed by an identifier
  /\\b(?:asserts|infer|interface|module|namespace|type)\\b(?=\\s*(?:[{_$a-zA-Z\\xA0-\\uFFFF]|$))/, // This is for \`import type *, {}\`
  /\\btype\\b(?=\\s*(?:[\\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\\w\\xA0-\\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\\s\\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*\\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\\s*\\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*/,
        'generic': {
          pattern: /<[\\s\\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\\w$]|(?=<\\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\\(;[\\s\\S]*?;\\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\\\[\\s\\S]|[^"\\\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\\b(?:(?:f32|f64|i32|i64)(?:\\.(?:abs|add|and|ceil|clz|const|convert_[su]\\/i(?:32|64)|copysign|ctz|demote\\/f64|div(?:_[su])?|eqz?|extend_[su]\\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\\/f32|reinterpret\\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\\/f(?:32|64))?|wrap\\/i64|xor))?|memory\\.(?:grow|size))\\b/,
    inside: {
      'punctuation': /\\./
    }
  }, /\\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\\b/],
  'variable': /\\$[\\w!#$%&'*+\\-./:<=>?@\\\\^\`|~]+/,
  'number': /[+-]?\\b(?:\\d(?:_?\\d)*(?:\\.\\d(?:_?\\d)*)?(?:[eE][+-]?\\d(?:_?\\d)*)?|0x[\\da-fA-F](?:_?[\\da-fA-F])*(?:\\.[\\da-fA-F](?:_?[\\da-fA-D])*)?(?:[pP][+-]?\\d(?:_?\\d)*)?)\\b|\\binf\\b|\\bnan(?::0x[\\da-fA-F](?:_?[\\da-fA-D])*)?\\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\\s[\\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\\w\\-%#;/?:@&=+$,.!~*'()[\\]]+>|(?:[a-zA-Z\\d-]*!)?[\\w\\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \\t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \\t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&'*,\\-:>?@[\\]\`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \\t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]/.source;
  });
  var string = /"(?:[^"\\\\\\r\\n]|\\\\.)*"|'(?:[^'\\\\\\r\\n]|\\\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\\-,[{]\\s*(?:\\s<<prop>>[ \\t]+)?)(?:<<value>>)(?=[ \\t]*(?:$|,|\\]|\\}|(?:[\\r\\n]\\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\\-:]\\s*(?:\\s<<prop>>[ \\t]+)?[|>])[ \\t]*(?:((?:\\r?\\n|\\r)[ \\t]+)\\S[^\\r\\n]*(?:\\2[^\\r\\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\\-,[{\\r\\n?])[ \\t]*(?:<<prop>>[ \\t]+)?)<<key>>(?=\\s*:\\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \\t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \\t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \\t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\\]{}\\-,|>?]|\\.\\.\\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);

/* harmony default export */ var prism_react_renderer_prism = (prism);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism_react_renderer_prism,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\\r\\n|\\r|\\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


// EXTERNAL MODULE: ./node_modules/@umijs/preset-dumi/lib/theme/index.js
var lib_theme = __webpack_require__(16924);
// EXTERNAL MODULE: ./node_modules/dumi-theme-default/es/builtins/SourceCode.less
var SourceCode = __webpack_require__(99675);
;// CONCATENATED MODULE: ./node_modules/dumi-theme-default/es/builtins/SourceCode.js
function SourceCode_extends() { SourceCode_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SourceCode_extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * define DSL which can be highlighted as similar language
 */

var SIMILAR_DSL = {
  acss: 'css',
  axml: 'xml'
};
/* harmony default export */ var builtins_SourceCode = (function (_ref) {
  var code = _ref.code,
      lang = _ref.lang,
      _ref$showCopy = _ref.showCopy,
      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;

  var _useCopy = (0,lib_theme.useCopy)(),
      _useCopy2 = _slicedToArray(_useCopy, 2),
      copyCode = _useCopy2[0],
      copyStatus = _useCopy2[1];

  return /*#__PURE__*/react.createElement("div", {
    className: "__dumi-default-code-block"
  }, /*#__PURE__*/react.createElement(dist, SourceCode_extends({}, defaultProps, {
    code: code,
    language: SIMILAR_DSL[lang] || lang,
    theme: undefined
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/react.createElement("pre", {
      className: className,
      style: style
    }, showCopy && /*#__PURE__*/react.createElement("button", {
      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",
      "data-status": copyStatus,
      onClick: function onClick() {
        return copyCode(code);
      }
    }), tokens.map(function (line, i) {
      return /*#__PURE__*/react.createElement("div", getLineProps({
        line: line,
        key: i
      }), line.map(function (token, key) {
        return /*#__PURE__*/react.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  }));
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE2OTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvcHJpc20tcmVhY3QtcmVuZGVyZXIvcHJpc20vaW5kZXguanM/NDk1MyIsIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvcHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2R1b3RvbmVEYXJrL2luZGV4LmpzP2Q2MGYiLCJ3ZWJwYWNrOi8vQGRhd2RsZXIvc2NoZW1hLWZvcm0tZG9jLy4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL2Rpc3QvaW5kZXguanM/ZGNjYSIsIndlYnBhY2s6Ly9AZGF3ZGxlci9zY2hlbWEtZm9ybS1kb2MvLi9ub2RlX21vZHVsZXMvZHVtaS10aGVtZS1kZWZhdWx0L2VzL2J1aWx0aW5zL1NvdXJjZUNvZGUuanM/MWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqXG4gKiBAbGljZW5zZSBNSVQgPGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUPlxuICogQGF1dGhvciBMZWEgVmVyb3UgPGh0dHBzOi8vbGVhLnZlcm91Lm1lPlxuICogQG5hbWVzcGFjZVxuICogQHB1YmxpY1xuICovXG4vKipcbiAqIHByaXNtLXJlYWN0LXJlbmRlcmVyOlxuICogVGhpcyBmaWxlIGhhcyBiZWVuIG1vZGlmaWVkIHRvIHJlbW92ZTpcbiAqIC0gZ2xvYmFscyBhbmQgd2luZG93IGRlcGVuZGVuY3lcbiAqIC0gd29ya2VyIHN1cHBvcnRcbiAqIC0gaGlnaGxpZ2h0QWxsIGFuZCBvdGhlciBlbGVtZW50IGRlcGVuZGVudCBtZXRob2RzXG4gKiAtIF8uaG9va3MgaGVscGVyc1xuICogLSBVTUQvbm9kZS1zcGVjaWZpYyBoYWNrc1xuICogSXQgaGFzIGFsc28gYmVlbiBydW4gdGhyb3VnaCBwcmV0dGllclxuICovXG5cbiB2YXIgUHJpc20gPSAoZnVuY3Rpb24gKCkge1xuXG5cdC8vIFByaXZhdGUgaGVscGVyIHZhcnNcblx0dmFyIGxhbmcgPSAvKD86XnxcXHMpbGFuZyg/OnVhZ2UpPy0oW1xcdy1dKykoPz1cXHN8JCkvaTtcblx0dmFyIHVuaXF1ZUlkID0gMDtcblxuXHQvLyBUaGUgZ3JhbW1hciBvYmplY3QgZm9yIHBsYWludGV4dFxuXHR2YXIgcGxhaW5UZXh0R3JhbW1hciA9IHt9O1xuXG5cblx0dmFyIF8gPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBuYW1lc3BhY2UgZm9yIHV0aWxpdHkgbWV0aG9kcy5cblx0XHQgKlxuXHRcdCAqIEFsbCBmdW5jdGlvbiBpbiB0aGlzIG5hbWVzcGFjZSB0aGF0IGFyZSBub3QgZXhwbGljaXRseSBtYXJrZWQgYXMgX3B1YmxpY18gYXJlIGZvciBfX2ludGVybmFsIHVzZSBvbmx5X18gYW5kIG1heVxuXHRcdCAqIGNoYW5nZSBvciBkaXNhcHBlYXIgYXQgYW55IHRpbWUuXG5cdFx0ICpcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICovXG5cdFx0dXRpbDoge1xuXHRcdFx0ZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG5cdFx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgVG9rZW4odG9rZW5zLnR5cGUsIGVuY29kZSh0b2tlbnMuY29udGVudCksIHRva2Vucy5hbGlhcyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucy5tYXAoZW5jb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSB0eXBlIG9mIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge2FueX0gb1xuXHRcdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiB0eXBlKG51bGwpICAgICAgPT09ICdOdWxsJ1xuXHRcdFx0ICogdHlwZSh1bmRlZmluZWQpID09PSAnVW5kZWZpbmVkJ1xuXHRcdFx0ICogdHlwZSgxMjMpICAgICAgID09PSAnTnVtYmVyJ1xuXHRcdFx0ICogdHlwZSgnZm9vJykgICAgID09PSAnU3RyaW5nJ1xuXHRcdFx0ICogdHlwZSh0cnVlKSAgICAgID09PSAnQm9vbGVhbidcblx0XHRcdCAqIHR5cGUoWzEsIDJdKSAgICA9PT0gJ0FycmF5J1xuXHRcdFx0ICogdHlwZSh7fSkgICAgICAgID09PSAnT2JqZWN0J1xuXHRcdFx0ICogdHlwZShTdHJpbmcpICAgID09PSAnRnVuY3Rpb24nXG5cdFx0XHQgKiB0eXBlKC9hYmMrLykgICAgPT09ICdSZWdFeHAnXG5cdFx0XHQgKi9cblx0XHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIGEgdW5pcXVlIG51bWJlciBmb3IgdGhlIGdpdmVuIG9iamVjdC4gTGF0ZXIgY2FsbHMgd2lsbCBzdGlsbCByZXR1cm4gdGhlIHNhbWUgbnVtYmVyLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcblx0XHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdFx0XHQgKi9cblx0XHRcdG9iaklkOiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDcmVhdGVzIGEgZGVlcCBjbG9uZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0LlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIGludGVuZGVkIHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGNsb25lIGxhbmd1YWdlIGRlZmluaXRpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7VH0gb1xuXHRcdFx0ICogQHBhcmFtIHtSZWNvcmQ8bnVtYmVyLCBhbnk+fSBbdmlzaXRlZF1cblx0XHRcdCAqIEByZXR1cm5zIHtUfVxuXHRcdFx0ICogQHRlbXBsYXRlIFRcblx0XHRcdCAqL1xuXHRcdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRcdHZhciBjbG9uZTsgdmFyIGlkO1xuXHRcdFx0XHRzd2l0Y2ggKF8udXRpbC50eXBlKG8pKSB7XG5cdFx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSAqLyAoe30pO1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdFx0KC8qKiBAdHlwZSB7QXJyYXl9ICovKC8qKiBAdHlwZSB7YW55fSAqLyhvKSkpLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoY2xvbmUpO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBvO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIFByaXNtIGxhbmd1YWdlIG9mIHRoZSBnaXZlbiBlbGVtZW50IHNldCBieSBhIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBubyBsYW5ndWFnZSBpcyBzZXQgZm9yIHRoZSBlbGVtZW50IG9yIHRoZSBlbGVtZW50IGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCwgYG5vbmVgIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICovXG5cdFx0XHRnZXRMYW5ndWFnZTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgbSA9IGxhbmcuZXhlYyhlbGVtZW50LmNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0aWYgKG0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBtWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICdub25lJztcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU2V0cyB0aGUgUHJpc20gYGxhbmd1YWdlLXh4eHhgIGNsYXNzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdFx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHRcdCAqL1xuXHRcdFx0c2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbGVtZW50LCBsYW5ndWFnZSkge1xuXHRcdFx0XHQvLyByZW1vdmUgYWxsIGBsYW5ndWFnZS14eHh4YCBjbGFzc2VzXG5cdFx0XHRcdC8vICh0aGlzIG1pZ2h0IGxlYXZlIGJlaGluZCBhIGxlYWRpbmcgc3BhY2UpXG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSZWdFeHAobGFuZywgJ2dpJyksICcnKTtcblxuXHRcdFx0XHQvLyBhZGQgdGhlIG5ldyBgbGFuZ3VhZ2UteHh4eGAgY2xhc3Ncblx0XHRcdFx0Ly8gKHVzaW5nIGBjbGFzc0xpc3RgIHdpbGwgYXV0b21hdGljYWxseSBjbGVhbiB1cCBzcGFjZXMgZm9yIHVzKVxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgd2hldGhlciBhIGdpdmVuIGNsYXNzIGlzIGFjdGl2ZSBmb3IgYGVsZW1lbnRgLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBjbGFzcyBjYW4gYmUgYWN0aXZhdGVkIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGdpdmVuIGNsYXNzIGFuZCBpdCBjYW4gYmUgZGVhY3RpdmF0ZWRcblx0XHRcdCAqIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gY2xhc3MuIFRoZSBfbmVnYXRlZCB2ZXJzaW9uXyBvZiB0aGVcblx0XHRcdCAqIGdpdmVuIGNsYXNzIGlzIGp1c3QgdGhlIGdpdmVuIGNsYXNzIHdpdGggYSBgbm8tYCBwcmVmaXguXG5cdFx0XHQgKlxuXHRcdFx0ICogV2hldGhlciB0aGUgY2xhc3MgaXMgYWN0aXZlIGlzIGRldGVybWluZWQgYnkgdGhlIGNsb3Nlc3QgYW5jZXN0b3Igb2YgYGVsZW1lbnRgICh3aGVyZSBgZWxlbWVudGAgaXRzZWxmIGlzXG5cdFx0XHQgKiBjbG9zZXN0IGFuY2VzdG9yKSB0aGF0IGhhcyB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdC4gSWYgbmVpdGhlciBgZWxlbWVudGAgbm9yIGFueSBvZiBpdHNcblx0XHRcdCAqIGFuY2VzdG9ycyBoYXZlIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LCB0aGVuIHRoZSBkZWZhdWx0IGFjdGl2YXRpb24gd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJbiB0aGUgcGFyYWRveGljYWwgc2l0dWF0aW9uIHdoZXJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGNvbnRhaW5zIF9fYm90aF9fIHRoZSBnaXZlbiBjbGFzcyBhbmQgdGhlIG5lZ2F0ZWRcblx0XHRcdCAqIHZlcnNpb24gb2YgaXQsIHRoZSBjbGFzcyBpcyBjb25zaWRlcmVkIGFjdGl2ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZmF1bHRBY3RpdmF0aW9uPWZhbHNlXVxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0XHQgKi9cblx0XHRcdGlzQWN0aXZlOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lLCBkZWZhdWx0QWN0aXZhdGlvbikge1xuXHRcdFx0XHR2YXIgbm8gPSAnbm8tJyArIGNsYXNzTmFtZTtcblxuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0XHRcdHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKG5vKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhIWRlZmF1bHRBY3RpdmF0aW9uO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIG5hbWVzcGFjZSBjb250YWlucyBhbGwgY3VycmVudGx5IGxvYWRlZCBsYW5ndWFnZXMgYW5kIHRoZSBzb21lIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIGFuZCBtb2RpZnkgbGFuZ3VhZ2VzLlxuXHRcdCAqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRsYW5ndWFnZXM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGdyYW1tYXIgZm9yIHBsYWluLCB1bmZvcm1hdHRlZCB0ZXh0LlxuXHRcdFx0ICovXG5cdFx0XHRwbGFpbjogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHBsYWludGV4dDogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0eHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgbGFuZ3VhZ2Ugd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIGFwcGVuZHMgdGhlIGdpdmVuIHRva2Vucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBhIHRva2VuIGluIGByZWRlZmAgYWxzbyBhcHBlYXJzIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UsIHRoZW4gdGhlIGV4aXN0aW5nIHRva2VuIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2Vcblx0XHRcdCAqIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYXQgaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIEJlc3QgcHJhY3RpY2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogU2luY2UgdGhlIHBvc2l0aW9uIG9mIG92ZXJ3cml0aW5nIHRva2VucyAodG9rZW4gaW4gYHJlZGVmYCB0aGF0IG92ZXJ3cml0ZSB0b2tlbnMgaW4gdGhlIGNvcGllZCBsYW5ndWFnZSlcblx0XHRcdCAqIGRvZXNuJ3QgbWF0dGVyLCB0aGV5IGNhbiB0ZWNobmljYWxseSBiZSBpbiBhbnkgb3JkZXIuIEhvd2V2ZXIsIHRoaXMgY2FuIGJlIGNvbmZ1c2luZyB0byBvdGhlcnMgdGhhdCB0cnlpbmcgdG9cblx0XHRcdCAqIHVuZGVyc3RhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gYmVjYXVzZSwgbm9ybWFsbHksIHRoZSBvcmRlciBvZiB0b2tlbnMgbWF0dGVycyBpbiBQcmlzbSBncmFtbWFycy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGVyZWZvcmUsIGl0IGlzIGVuY291cmFnZWQgdG8gb3JkZXIgb3ZlcndyaXRpbmcgdG9rZW5zIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb25zIG9mIHRoZSBvdmVyd3JpdHRlbiB0b2tlbnMuXG5cdFx0XHQgKiBGdXJ0aGVybW9yZSwgYWxsIG5vbi1vdmVyd3JpdGluZyB0b2tlbnMgc2hvdWxkIGJlIHBsYWNlZCBhZnRlciB0aGUgb3ZlcndyaXRpbmcgb25lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBsYW5ndWFnZSB0byBleHRlbmQuIFRoaXMgaGFzIHRvIGJlIGEga2V5IGluIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHBhcmFtIHtHcmFtbWFyfSByZWRlZiBUaGUgbmV3IHRva2VucyB0byBhcHBlbmQuXG5cdFx0XHQgKiBAcmV0dXJucyB7R3JhbW1hcn0gVGhlIG5ldyBsYW5ndWFnZSBjcmVhdGVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlc1snY3NzLXdpdGgtY29sb3JzJ10gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG5cdFx0XHQgKiAgICAgLy8gUHJpc20ubGFuZ3VhZ2VzLmNzcyBhbHJlYWR5IGhhcyBhICdjb21tZW50JyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIG92ZXJ3cml0ZSBDU1MnICdjb21tZW50JyB0b2tlblxuXHRcdFx0ICogICAgIC8vIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuXHRcdFx0ICogICAgICdjb21tZW50JzogeyAuLi4gfSxcblx0XHRcdCAqICAgICAvLyBDU1MgZG9lc24ndCBoYXZlIGEgJ2NvbG9yJyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIGJlIGFwcGVuZGVkXG5cdFx0XHQgKiAgICAgJ2NvbG9yJzogL1xcYig/OnJlZHxncmVlbnxibHVlKVxcYi9cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICovXG5cdFx0XHRleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcblx0XHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0XHRsYW5nW2tleV0gPSByZWRlZltrZXldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEluc2VydHMgdG9rZW5zIF9iZWZvcmVfIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBkZWZpbml0aW9uIG9yIGFueSBvdGhlciBncmFtbWFyLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIFVzYWdlXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBoZWxwZXIgbWV0aG9kIG1ha2VzIGl0IGVhc3kgdG8gbW9kaWZ5IGV4aXN0aW5nIGxhbmd1YWdlcy4gRm9yIGV4YW1wbGUsIHRoZSBDU1MgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuXHRcdFx0ICogbm90IG9ubHkgZGVmaW5lcyBDU1MgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZG9jdW1lbnRzLCBidXQgYWxzbyBuZWVkcyB0byBkZWZpbmUgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZW1iZWRkZWRcblx0XHRcdCAqIGluIEhUTUwgdGhyb3VnaCBgPHN0eWxlPmAgZWxlbWVudHMuIFRvIGRvIHRoaXMsIGl0IG5lZWRzIHRvIG1vZGlmeSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAgYW5kIGFkZCB0aGVcblx0XHRcdCAqIGFwcHJvcHJpYXRlIHRva2Vucy4gSG93ZXZlciwgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGlzIGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCBsaXRlcmFsLCBzbyBpZiB5b3UgZG9cblx0XHRcdCAqIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuc3R5bGUgPSB7XG5cdFx0XHQgKiAgICAgLy8gdG9rZW5cblx0XHRcdCAqIH07XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiB0aGVuIHRoZSBgc3R5bGVgIHRva2VuIHdpbGwgYmUgYWRkZWQgKGFuZCBwcm9jZXNzZWQpIGF0IHRoZSBlbmQuIGBpbnNlcnRCZWZvcmVgIGFsbG93cyB5b3UgdG8gaW5zZXJ0IHRva2Vuc1xuXHRcdFx0ICogYmVmb3JlIGV4aXN0aW5nIHRva2Vucy4gRm9yIHRoZSBDU1MgZXhhbXBsZSBhYm92ZSwgeW91IHdvdWxkIHVzZSBpdCBsaWtlIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIHtcblx0XHRcdCAqICAgICAnc3R5bGUnOiB7XG5cdFx0XHQgKiAgICAgICAgIC8vIHRva2VuXG5cdFx0XHQgKiAgICAgfVxuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBTcGVjaWFsIGNhc2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgdGhlIGdyYW1tYXJzIG9mIGBpbnNpZGVgIGFuZCBgaW5zZXJ0YCBoYXZlIHRva2VucyB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSB0b2tlbnMgaW4gYGluc2lkZWAncyBncmFtbWFyXG5cdFx0XHQgKiB3aWxsIGJlIGlnbm9yZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBiZWhhdmlvciBjYW4gYmUgdXNlZCB0byBpbnNlcnQgdG9rZW5zIGFmdGVyIGBiZWZvcmVgOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY29tbWVudCcsIHtcblx0XHRcdCAqICAgICAnY29tbWVudCc6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuY29tbWVudCxcblx0XHRcdCAqICAgICAvLyB0b2tlbnMgYWZ0ZXIgJ2NvbW1lbnQnXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqICMjIExpbWl0YXRpb25zXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gcHJvYmxlbSBgaW5zZXJ0QmVmb3JlYCBoYXMgdG8gc29sdmUgaXMgaXRlcmF0aW9uIG9yZGVyLiBTaW5jZSBFUzIwMTUsIHRoZSBpdGVyYXRpb24gb3JkZXIgZm9yIG9iamVjdFxuXHRcdFx0ICogcHJvcGVydGllcyBpcyBndWFyYW50ZWVkIHRvIGJlIHRoZSBpbnNlcnRpb24gb3JkZXIgKGV4Y2VwdCBmb3IgaW50ZWdlciBrZXlzKSBidXQgc29tZSBicm93c2VycyBiZWhhdmVcblx0XHRcdCAqIGRpZmZlcmVudGx5IHdoZW4ga2V5cyBhcmUgZGVsZXRlZCBhbmQgcmUtaW5zZXJ0ZWQuIFNvIGBpbnNlcnRCZWZvcmVgIGNhbid0IGJlIGltcGxlbWVudGVkIGJ5IHRlbXBvcmFyaWx5XG5cdFx0XHQgKiBkZWxldGluZyBwcm9wZXJ0aWVzIHdoaWNoIGlzIG5lY2Vzc2FyeSB0byBpbnNlcnQgYXQgYXJiaXRyYXJ5IHBvc2l0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUbyBzb2x2ZSB0aGlzIHByb2JsZW0sIGBpbnNlcnRCZWZvcmVgIGRvZXNuJ3QgYWN0dWFsbHkgaW5zZXJ0IHRoZSBnaXZlbiB0b2tlbnMgaW50byB0aGUgdGFyZ2V0IG9iamVjdC5cblx0XHRcdCAqIEluc3RlYWQsIGl0IHdpbGwgY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgcmVwbGFjZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBuZXcgb25lLiBUaGlzXG5cdFx0XHQgKiBjYW4gYmUgZG9uZSB3aXRob3V0IHRlbXBvcmFyaWx5IGRlbGV0aW5nIHByb3BlcnRpZXMsIHNvIHRoZSBpdGVyYXRpb24gb3JkZXIgaXMgd2VsbC1kZWZpbmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEhvd2V2ZXIsIG9ubHkgcmVmZXJlbmNlcyB0aGF0IGNhbiBiZSByZWFjaGVkIGZyb20gYFByaXNtLmxhbmd1YWdlc2Agb3IgYGluc2VydGAgd2lsbCBiZSByZXBsYWNlZC4gSS5lLiBpZlxuXHRcdFx0ICogeW91IGhvbGQgdGhlIHRhcmdldCBvYmplY3QgaW4gYSB2YXJpYWJsZSwgdGhlbiB0aGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHdpbGwgbm90IGNoYW5nZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogdmFyIG9sZE1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdFx0XHQgKiB2YXIgbmV3TWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7IC4uLiB9KTtcblx0XHRcdCAqXG5cdFx0XHQgKiBhc3NlcnQob2xkTWFya3VwICE9PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGFzc2VydChuZXdNYXJrdXAgPT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGluc2lkZSBUaGUgcHJvcGVydHkgb2YgYHJvb3RgIChlLmcuIGEgbGFuZ3VhZ2UgaWQgaW4gYFByaXNtLmxhbmd1YWdlc2ApIHRoYXQgY29udGFpbnMgdGhlXG5cdFx0XHQgKiBvYmplY3QgdG8gYmUgbW9kaWZpZWQuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gaW5zZXJ0IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IFtyb290XSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgYGluc2lkZWAsIGkuZS4gdGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIERlZmF1bHRzIHRvIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgZ3JhbW1hciBvYmplY3QuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKi9cblx0XHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdFx0cm9vdCA9IHJvb3QgfHwgLyoqIEB0eXBlIHthbnl9ICovIChfLmxhbmd1YWdlcyk7XG5cdFx0XHRcdHZhciBncmFtbWFyID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0XHQvKiogQHR5cGUge0dyYW1tYXJ9ICovXG5cdFx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHRva2VuIHdoaWNoIGFsc28gb2NjdXIgaW4gaW5zZXJ0LiBTZWUgIzE1MjVcblx0XHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIG9sZCA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRcdF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZCAmJiBrZXkgIT0gaW5zaWRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVHJhdmVyc2UgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHdpdGggRGVwdGggRmlyc3QgU2VhcmNoXG5cdFx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0XHR2YXIgb2JqSWQgPSBfLnV0aWwub2JqSWQ7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXTtcblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eVR5cGUgPT09ICdPYmplY3QnICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwbHVnaW5zOiB7fSxcblxuXG5cdFx0LyoqXG5cdFx0ICogTG93LWxldmVsIGZ1bmN0aW9uLCBvbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdeKAmXJlIGRvaW5nLiBJdCBhY2NlcHRzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXRcblx0XHQgKiBhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb25zIHRvIHVzZSwgYW5kIHJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgSFRNTCBwcm9kdWNlZC5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS10b2tlbml6ZWBcblx0XHQgKiAyLiBgYWZ0ZXItdG9rZW5pemVgXG5cdFx0ICogMy4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0XHQgKlxuXHRcdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbmFtZSBvZiB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBwYXNzZWQgdG8gYGdyYW1tYXJgLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBoaWdobGlnaHRlZCBIVE1MLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIFByaXNtLmhpZ2hsaWdodCgndmFyIGZvbyA9IHRydWU7JywgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQsICdqYXZhc2NyaXB0Jyk7XG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGNvZGU6IHRleHQsXG5cdFx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdFx0fTtcblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtdG9rZW5pemUnLCBlbnYpO1xuXHRcdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRcdF8uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG5cdFx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaXMgdGhlIGhlYXJ0IG9mIFByaXNtLCBhbmQgdGhlIG1vc3QgbG93LWxldmVsIGZ1bmN0aW9uIHlvdSBjYW4gdXNlLiBJdCBhY2NlcHRzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXRcblx0XHQgKiBhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb25zIHRvIHVzZSwgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgdG9rZW5pemVkIGNvZGUuXG5cdFx0ICpcblx0XHQgKiBXaGVuIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGluY2x1ZGVzIG5lc3RlZCB0b2tlbnMsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgcmVjdXJzaXZlbHkgb24gZWFjaCBvZiB0aGVzZSB0b2tlbnMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIG1ldGhvZCBjb3VsZCBiZSB1c2VmdWwgaW4gb3RoZXIgY29udGV4dHMgYXMgd2VsbCwgYXMgYSB2ZXJ5IGNydWRlIHBhcnNlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0b2tlbnMgdG8gdXNlLlxuXHRcdCAqXG5cdFx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdFx0ICogQHJldHVybnMge1Rva2VuU3RyZWFtfSBBbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB0b2tlbnMsIGEgdG9rZW4gc3RyZWFtLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGxldCBjb2RlID0gYHZhciBmb28gPSAwO2A7XG5cdFx0ICogbGV0IHRva2VucyA9IFByaXNtLnRva2VuaXplKGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcblx0XHQgKiB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG5cdFx0ICogICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByaXNtLlRva2VuICYmIHRva2VuLnR5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0ICogICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgbnVtZXJpYyBsaXRlcmFsOiAke3Rva2VuLmNvbnRlbnR9YCk7XG5cdFx0ICogICAgIH1cblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0b2tlbml6ZTogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIpIHtcblx0XHRcdHZhciByZXN0ID0gZ3JhbW1hci5yZXN0O1xuXHRcdFx0aWYgKHJlc3QpIHtcblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdG9rZW5MaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgdG9rZW5MaXN0LmhlYWQsIHRleHQpO1xuXG5cdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCB0b2tlbkxpc3QuaGVhZCwgMCk7XG5cblx0XHRcdHJldHVybiB0b0FycmF5KHRva2VuTGlzdCk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aG9va3M6IHtcblx0XHRcdGFsbDoge30sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQWRkcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgdG8gdGhlIGxpc3Qgb2YgY2FsbGJhY2tzIGZvciB0aGUgZ2l2ZW4gaG9vay5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGhvb2sgaXQgaXMgcmVnaXN0ZXJlZCBmb3IgaXMgcnVuLlxuXHRcdFx0ICogSG9va3MgYXJlIHVzdWFsbHkgZGlyZWN0bHkgcnVuIGJ5IGEgaGlnaGxpZ2h0IGZ1bmN0aW9uIGJ1dCB5b3UgY2FuIGFsc28gcnVuIGhvb2tzIHlvdXJzZWxmLlxuXHRcdFx0ICpcblx0XHRcdCAqIE9uZSBjYWxsYmFjayBmdW5jdGlvbiBjYW4gYmUgcmVnaXN0ZXJlZCB0byBtdWx0aXBsZSBob29rcyBhbmQgdGhlIHNhbWUgaG9vayBtdWx0aXBsZSB0aW1lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7SG9va0NhbGxiYWNrfSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0XHRob29rc1tuYW1lXSA9IGhvb2tzW25hbWVdIHx8IFtdO1xuXG5cdFx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSdW5zIGEgaG9vayBpbnZva2luZyBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIENhbGxiYWNrcyB3aWxsIGJlIGludm9rZWQgc3luY2hyb25vdXNseSBhbmQgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vayBwYXNzZWQgdG8gYWxsIGNhbGxiYWNrcyByZWdpc3RlcmVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNhbGxiYWNrOyAoY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXSk7KSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRUb2tlbjogVG9rZW5cblx0fTtcblxuXG5cdC8vIFR5cGVzY3JpcHQgbm90ZTpcblx0Ly8gVGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZCB0byBpbXBvcnQgdGhlIFRva2VuIHR5cGUgaW4gSlNEb2M6XG5cdC8vXG5cdC8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgdG9rZW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFNlZSB7QGxpbmsgVG9rZW4jdHlwZSB0eXBlfVxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuU3RyZWFtfSBjb250ZW50IFNlZSB7QGxpbmsgVG9rZW4jY29udGVudCBjb250ZW50fVxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttYXRjaGVkU3RyPVwiXCJdIEEgY29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tLlxuXHQgKiBAY2xhc3Ncblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUga2V5IG9mIGEgcGF0dGVybiBpbiBhIHtAbGluayBHcmFtbWFyfS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIHdpbGwgYmUgYSB0b2tlbiBzdHJlYW0gaWYgdGhlIHBhdHRlcm4gbWF0Y2hlZCBhbHNvIGRlZmluZWQgYW4gYGluc2lkZWAgZ3JhbW1hci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmcgfCBUb2tlblN0cmVhbX1cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8c3RyaW5nW119XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHRcdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHRcdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aCB8IDA7XG5cdH1cblxuXHQvKipcblx0ICogQSB0b2tlbiBzdHJlYW0gaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQge0BsaW5rIFRva2VuIFRva2VufSBvYmplY3RzLlxuXHQgKlxuXHQgKiBUb2tlbiBzdHJlYW1zIGhhdmUgdG8gZnVsZmlsbCBhIGZldyBwcm9wZXJ0aWVzIHRoYXQgYXJlIGFzc3VtZWQgYnkgbW9zdCBmdW5jdGlvbnMgKG1vc3RseSBpbnRlcm5hbCBvbmVzKSB0aGF0IHByb2Nlc3Ncblx0ICogdGhlbS5cblx0ICpcblx0ICogMS4gTm8gYWRqYWNlbnQgc3RyaW5ncy5cblx0ICogMi4gTm8gZW1wdHkgc3RyaW5ncy5cblx0ICpcblx0ICogICAgVGhlIG9ubHkgZXhjZXB0aW9uIGhlcmUgaXMgdGhlIHRva2VuIHN0cmVhbSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGVtcHR5IHN0cmluZyBhbmQgbm90aGluZyBlbHNlLlxuXHQgKlxuXHQgKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSBnaXZlbiB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYW4gSFRNTCByZXByZXNlbnRhdGlvbi5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCBUb2tlblN0cmVhbX0gbyBUaGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGJlIGNvbnZlcnRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIGN1cnJlbnQgbGFuZ3VhZ2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG5cdCAqIEBtZW1iZXJvZiBUb2tlblxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRUb2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0XHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdFx0dmFyIHMgPSAnJztcblx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH1cblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXG5cdFx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRcdGlmIChhbGlhc2VzKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcblx0ICogQHJldHVybnMge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXHRcdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBjaGFuZ2UgdGhlIG1hdGNoIHRvIHJlbW92ZSB0aGUgdGV4dCBtYXRjaGVkIGJ5IHRoZSBQcmlzbSBsb29rYmVoaW5kIGdyb3VwXG5cdFx0XHR2YXIgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdLmxlbmd0aDtcblx0XHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG5cdCAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG5cdCAqIEBwYXJhbSB7UmVtYXRjaE9wdGlvbnN9IFtyZW1hdGNoXVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICogQHByaXZhdGVcblx0ICpcblx0ICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGNhdXNlXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWFjaFxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgcmVtYXRjaCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdO1xuXHRcdFx0XHR2YXIgaW5zaWRlID0gcGF0dGVybk9iai5pbnNpZGU7XG5cdFx0XHRcdHZhciBsb29rYmVoaW5kID0gISFwYXR0ZXJuT2JqLmxvb2tiZWhpbmQ7XG5cdFx0XHRcdHZhciBncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5O1xuXHRcdFx0XHR2YXIgYWxpYXMgPSBwYXR0ZXJuT2JqLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuT2JqLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKiBAdHlwZSB7UmVnRXhwfSAqL1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRcdGZvciAoIC8vIGl0ZXJhdGUgdGhlIHRva2VuIGxpc3QgYW5kIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgdG9rZW4vc3RyaW5nIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0XHRwb3MgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoLCBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVDb3VudCA9IDE7IC8vIHRoaXMgaXMgdGhlIHRvIHBhcmFtZXRlciBvZiByZW1vdmVCZXR3ZWVuXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSkge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBwID0gcG9zO1xuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRwb3MgPSBwO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8IHR5cGVvZiBrLnZhbHVlID09PSAnc3RyaW5nJyk7XG5cdFx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIG1hdGNoU3RyID0gbWF0Y2hbMF07XG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKTtcblx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UoZnJvbSArIG1hdGNoU3RyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHR2YXIgcmVhY2ggPSBwb3MgKyBzdHIubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IHJlYWNoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb20gPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIGJlZm9yZSk7XG5cdFx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVSYW5nZSh0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHJlbW92ZUNvdW50KTtcblxuXHRcdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSkge1xuXHRcdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgaGFwcGVuIGlmIHRoZSBjdXJyZW50IHBhdHRlcm4gaXMgZ3JlZWR5XG5cblx0XHRcdFx0XHRcdC8qKiBAdHlwZSB7UmVtYXRjaE9wdGlvbnN9ICovXG5cdFx0XHRcdFx0XHR2YXIgbmVzdGVkUmVtYXRjaCA9IHtcblx0XHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdFx0cmVhY2g6IHJlYWNoXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgY3VycmVudE5vZGUucHJldiwgcG9zLCBuZXN0ZWRSZW1hdGNoKTtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIHJlYWNoIG1pZ2h0IGhhdmUgYmVlbiBleHRlbmRlZCBiZWNhdXNlIG9mIHRoZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBuZXN0ZWRSZW1hdGNoLnJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gbmVzdGVkUmVtYXRjaC5yZWFjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcblx0ICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gcHJldiBUaGUgcHJldmlvdXMgbm9kZS5cblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIGhlYWQgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBudWxsLCBuZXh0OiBudWxsIH07XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0XHRoZWFkLm5leHQgPSB0YWlsO1xuXG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLmhlYWQgPSBoZWFkO1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy50YWlsID0gdGFpbDtcblx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge1R9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtMaW5rZWRMaXN0Tm9kZTxUPn0gVGhlIGFkZGVkIG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBZnRlcihsaXN0LCBub2RlLCB2YWx1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHRcdHZhciBuZXdOb2RlID0geyB2YWx1ZTogdmFsdWUsIHByZXY6IG5vZGUsIG5leHQ6IG5leHQgfTtcblx0XHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cdFx0bGlzdC5sZW5ndGgrKztcblxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ICYmIG5leHQgIT09IGxpc3QudGFpbDsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHRcdH1cblx0XHRub2RlLm5leHQgPSBuZXh0O1xuXHRcdG5leHQucHJldiA9IG5vZGU7XG5cdFx0bGlzdC5sZW5ndGggLT0gaTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEByZXR1cm5zIHtUW119XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcblx0XHR2YXIgYXJyYXkgPSBbXTtcblx0XHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHRcdHdoaWxlIChub2RlICE9PSBsaXN0LnRhaWwpIHtcblx0XHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXHRyZXR1cm4gXztcblxufSgpKTtcblxudmFyIHByaXNtID0gUHJpc207XG5QcmlzbS5kZWZhdWx0ID0gUHJpc207XG5cbi8qIFRoaXMgY29udGVudCBpcyBhdXRvLWdlbmVyYXRlZCB0byBpbmNsdWRlIHNvbWUgcHJpc21qcyBsYW5ndWFnZSBjb21wb25lbnRzOiAqL1xuXG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXBcIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuICAnY29tbWVudCc6IHtcbiAgICBwYXR0ZXJuOiAvPCEtLSg/Oig/ITwhLS0pW1xcc1xcU10pKj8tLT4vLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAncHJvbG9nJzoge1xuICAgIHBhdHRlcm46IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnZG9jdHlwZSc6IHtcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1kb2N0eXBlZGVjbFxuICAgIHBhdHRlcm46IC88IURPQ1RZUEUoPzpbXj5cIidbXFxdXXxcIlteXCJdKlwifCdbXiddKicpKyg/OlxcWyg/OltePFwiJ1xcXV18XCJbXlwiXSpcInwnW14nXSonfDwoPyEhLS0pfDwhLS0oPzpbXi1dfC0oPyEtPikpKi0tPikqXFxdXFxzKik/Pi9pLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdpbnRlcm5hbC1zdWJzZXQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXlteXFxbXSpcXFspW1xcc1xcU10rKD89XFxdPiQpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cbiAgICAgIH0sXG4gICAgICAnc3RyaW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCJbXlwiXSpcInwnW14nXSonLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgJ3B1bmN0dWF0aW9uJzogL148IXw+JHxbW1xcXV0vLFxuICAgICAgJ2RvY3R5cGUtdGFnJzogL15ET0NUWVBFL2ksXG4gICAgICAnbmFtZSc6IC9bXlxcczw+J1wiXSsvXG4gICAgfVxuICB9LFxuICAnY2RhdGEnOiB7XG4gICAgcGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAndGFnJzoge1xuICAgIHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICd0YWcnOiB7XG4gICAgICAgIHBhdHRlcm46IC9ePFxcLz9bXlxccz5cXC9dKy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuICAgICAgICAgICduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc3BlY2lhbC1hdHRyJzogW10sXG4gICAgICAnYXR0ci12YWx1ZSc6IHtcbiAgICAgICAgcGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAncHVuY3R1YXRpb24nOiBbe1xuICAgICAgICAgICAgcGF0dGVybjogL149LyxcbiAgICAgICAgICAgIGFsaWFzOiAnYXR0ci1lcXVhbHMnXG4gICAgICAgICAgfSwgL1wifCcvXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcLz8+LyxcbiAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICdlbnRpdHknOiBbe1xuICAgIHBhdHRlcm46IC8mW1xcZGEtel17MSw4fTsvaSxcbiAgICBhbGlhczogJ25hbWVkLWVudGl0eSdcbiAgfSwgLyYjeD9bXFxkYS1mXXsxLDh9Oy9pXVxufTtcbnByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPSBwcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcbnByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2RvY3R5cGUnXS5pbnNpZGVbJ2ludGVybmFsLXN1YnNldCddLmluc2lkZSA9IHByaXNtLmxhbmd1YWdlcy5tYXJrdXA7IC8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5cbnByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uIChlbnYpIHtcbiAgaWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuICAgIGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG4gIC8qKlxuICAgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuICAgKlxuICAgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuICAgKiBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuICAgKiBAZXhhbXBsZVxuICAgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcbiAgICovXG4gIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcbiAgICB2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuICAgIGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcbiAgICAgIHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZTogcHJpc20ubGFuZ3VhZ2VzW2xhbmddXG4gICAgfTtcbiAgICBpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG4gICAgdmFyIGluc2lkZSA9IHtcbiAgICAgICdpbmNsdWRlZC1jZGF0YSc6IHtcbiAgICAgICAgcGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuICAgICAgICBpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcbiAgICAgIH1cbiAgICB9O1xuICAgIGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuICAgICAgcGF0dGVybjogL1tcXHNcXFNdKy8sXG4gICAgICBpbnNpZGU6IHByaXNtLmxhbmd1YWdlc1tsYW5nXVxuICAgIH07XG4gICAgdmFyIGRlZiA9IHt9O1xuICAgIGRlZlt0YWdOYW1lXSA9IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tePl0qPikoPzo8IVxcW0NEQVRBXFxbKD86W15cXF1dfFxcXSg/IVxcXT4pKSpcXF1cXF0+fCg/ITwhXFxbQ0RBVEFcXFspW1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWU7XG4gICAgICB9KSwgJ2knKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IGluc2lkZVxuICAgIH07XG4gICAgcHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRBdHRyaWJ1dGUnLCB7XG4gIC8qKlxuICAgKiBBZGRzIGFuIHBhdHRlcm4gdG8gaGlnaGxpZ2h0IGxhbmd1YWdlcyBlbWJlZGRlZCBpbiBIVE1MIGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgc3R5bGVgIGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcbiAgICogY2FzZSBpbnNlbnNpdGl2ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cbiAgICogQGV4YW1wbGVcbiAgICogYWRkQXR0cmlidXRlKCdzdHlsZScsICdjc3MnKTtcbiAgICovXG4gIHZhbHVlOiBmdW5jdGlvbiAoYXR0ck5hbWUsIGxhbmcpIHtcbiAgICBwcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5pbnNpZGVbJ3NwZWNpYWwtYXR0ciddLnB1c2goe1xuICAgICAgcGF0dGVybjogUmVnRXhwKC8oXnxbXCInXFxzXSkvLnNvdXJjZSArICcoPzonICsgYXR0ck5hbWUgKyAnKScgKyAvXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpLy5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdhdHRyLW5hbWUnOiAvXlteXFxzPV0rLyxcbiAgICAgICAgJ2F0dHItdmFsdWUnOiB7XG4gICAgICAgICAgcGF0dGVybjogLz1bXFxzXFxTXSsvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ3ZhbHVlJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvKF49XFxzKihbXCInXXwoPyFbXCInXSkpKVxcU1tcXHNcXFNdKig/PVxcMiQpLyxcbiAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgICAgYWxpYXM6IFtsYW5nLCAnbGFuZ3VhZ2UtJyArIGxhbmddLFxuICAgICAgICAgICAgICBpbnNpZGU6IHByaXNtLmxhbmd1YWdlc1tsYW5nXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwdW5jdHVhdGlvbic6IFt7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9ePS8sXG4gICAgICAgICAgICAgIGFsaWFzOiAnYXR0ci1lcXVhbHMnXG4gICAgICAgICAgICB9LCAvXCJ8Jy9dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBwcmlzbS5sYW5ndWFnZXMubWFya3VwO1xucHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IHByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5wcmlzbS5sYW5ndWFnZXMuc3ZnID0gcHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcbnByaXNtLmxhbmd1YWdlcy54bWwgPSBwcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5wcmlzbS5sYW5ndWFnZXMuc3NtbCA9IHByaXNtLmxhbmd1YWdlcy54bWw7XG5wcmlzbS5sYW5ndWFnZXMuYXRvbSA9IHByaXNtLmxhbmd1YWdlcy54bWw7XG5wcmlzbS5sYW5ndWFnZXMucnNzID0gcHJpc20ubGFuZ3VhZ2VzLnhtbDtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2hcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIC8vICQgc2V0IHwgZ3JlcCAnXltBLVpdW15bOnNwYWNlOl1dKj0nIHwgY3V0IC1kPSAtZjEgfCB0ciAnXFxuJyAnfCdcbiAgLy8gKyBMQ19BTEwsIFJBTkRPTSwgUkVQTFksIFNFQ09ORFMuXG4gIC8vICsgbWFrZSBzdXJlIFBTMS4uNCBhcmUgaGVyZSBhcyB0aGV5IGFyZSBub3QgYWx3YXlzIHNldCxcbiAgLy8gLSBzb21lIHVzZWxlc3MgdGhpbmdzLlxuICB2YXIgZW52VmFycyA9ICdcXFxcYig/OkJBU0h8QkFTSE9QVFN8QkFTSF9BTElBU0VTfEJBU0hfQVJHQ3xCQVNIX0FSR1Z8QkFTSF9DTURTfEJBU0hfQ09NUExFVElPTl9DT01QQVRfRElSfEJBU0hfTElORU5PfEJBU0hfUkVNQVRDSHxCQVNIX1NPVVJDRXxCQVNIX1ZFUlNJTkZPfEJBU0hfVkVSU0lPTnxDT0xPUlRFUk18Q09MVU1OU3xDT01QX1dPUkRCUkVBS1N8REJVU19TRVNTSU9OX0JVU19BRERSRVNTfERFRkFVTFRTX1BBVEh8REVTS1RPUF9TRVNTSU9OfERJUlNUQUNLfERJU1BMQVl8RVVJRHxHRE1TRVNTSU9OfEdETV9MQU5HfEdOT01FX0tFWVJJTkdfQ09OVFJPTHxHTk9NRV9LRVlSSU5HX1BJRHxHUEdfQUdFTlRfSU5GT3xHUk9VUFN8SElTVENPTlRST0x8SElTVEZJTEV8SElTVEZJTEVTSVpFfEhJU1RTSVpFfEhPTUV8SE9TVE5BTUV8SE9TVFRZUEV8SUZTfElOU1RBTkNFfEpPQnxMQU5HfExBTkdVQUdFfExDX0FERFJFU1N8TENfQUxMfExDX0lERU5USUZJQ0FUSU9OfExDX01FQVNVUkVNRU5UfExDX01PTkVUQVJZfExDX05BTUV8TENfTlVNRVJJQ3xMQ19QQVBFUnxMQ19URUxFUEhPTkV8TENfVElNRXxMRVNTQ0xPU0V8TEVTU09QRU58TElORVN8TE9HTkFNRXxMU19DT0xPUlN8TUFDSFRZUEV8TUFJTENIRUNLfE1BTkRBVE9SWV9QQVRIfE5PX0FUX0JSSURHRXxPTERQV0R8T1BURVJSfE9QVElORHxPUkJJVF9TT0NLRVRESVJ8T1NUWVBFfFBBUEVSU0laRXxQQVRIfFBJUEVTVEFUVVN8UFBJRHxQUzF8UFMyfFBTM3xQUzR8UFdEfFJBTkRPTXxSRVBMWXxTRUNPTkRTfFNFTElOVVhfSU5JVHxTRVNTSU9OfFNFU1NJT05UWVBFfFNFU1NJT05fTUFOQUdFUnxTSEVMTHxTSEVMTE9QVFN8U0hMVkx8U1NIX0FVVEhfU09DS3xURVJNfFVJRHxVUFNUQVJUX0VWRU5UU3xVUFNUQVJUX0lOU1RBTkNFfFVQU1RBUlRfSk9CfFVQU1RBUlRfU0VTU0lPTnxVU0VSfFdJTkRPV0lEfFhBVVRIT1JJVFl8WERHX0NPTkZJR19ESVJTfFhER19DVVJSRU5UX0RFU0tUT1B8WERHX0RBVEFfRElSU3xYREdfR1JFRVRFUl9EQVRBX0RJUnxYREdfTUVOVV9QUkVGSVh8WERHX1JVTlRJTUVfRElSfFhER19TRUFUfFhER19TRUFUX1BBVEh8WERHX1NFU1NJT05fREVTS1RPUHxYREdfU0VTU0lPTl9JRHxYREdfU0VTU0lPTl9QQVRIfFhER19TRVNTSU9OX1RZUEV8WERHX1ZUTlJ8WE1PRElGSUVSUylcXFxcYic7XG4gIHZhciBjb21tYW5kQWZ0ZXJIZXJlZG9jID0ge1xuICAgIHBhdHRlcm46IC8oXihbXCInXT8pXFx3K1xcMilbIFxcdF0rXFxTLiovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgYWxpYXM6ICdwdW5jdHVhdGlvbicsXG4gICAgLy8gdGhpcyBsb29rcyByZWFzb25hYmx5IHdlbGwgaW4gYWxsIHRoZW1lc1xuICAgIGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblxuICB9O1xuICB2YXIgaW5zaWRlU3RyaW5nID0ge1xuICAgICdiYXNoJzogY29tbWFuZEFmdGVySGVyZWRvYyxcbiAgICAnZW52aXJvbm1lbnQnOiB7XG4gICAgICBwYXR0ZXJuOiBSZWdFeHAoJ1xcXFwkJyArIGVudlZhcnMpLFxuICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICB9LFxuICAgICd2YXJpYWJsZSc6IFsvLyBbMF06IEFyaXRobWV0aWMgRW52aXJvbm1lbnRcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXFwkP1xcKFxcKFtcXHNcXFNdKz9cXClcXCkvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgJCBzaWduIGF0IHRoZSBiZWdpbm5pbmcgaGlnaGxpZ2h0ICQoKCBhbmQgKSkgYXMgdmFyaWFibGVcbiAgICAgICAgJ3ZhcmlhYmxlJzogW3tcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5cXCRcXChcXChbXFxzXFxTXSspXFwpXFwpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sIC9eXFwkXFwoXFwoL10sXG4gICAgICAgICdudW1iZXInOiAvXFxiMHhbXFxkQS1GYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OltFZV0tP1xcZCspPy8sXG4gICAgICAgIC8vIE9wZXJhdG9ycyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9iYXNocmVmLmh0bWwjU2hlbGwtQXJpdGhtZXRpY1xuICAgICAgICAnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fDw8PT98Pj49P3wmJnxcXHxcXHx8Wz0hK1xcLSovJTw+XiZ8XT0/fFs/fjpdLyxcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gJCBzaWduIGF0IHRoZSBiZWdpbm5pbmcgaGlnaGxpZ2h0ICgoIGFuZCApKSBhcyBwdW5jdHVhdGlvblxuICAgICAgICAncHVuY3R1YXRpb24nOiAvXFwoXFwoP3xcXClcXCk/fCx8Oy9cbiAgICAgIH1cbiAgICB9LCAvLyBbMV06IENvbW1hbmQgU3Vic3RpdHV0aW9uXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcJFxcKCg/OlxcKFteKV0rXFwpfFteKCldKStcXCl8YFteYF0rYC8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3ZhcmlhYmxlJzogL15cXCRcXCh8XmB8XFwpJHxgJC9cbiAgICAgIH1cbiAgICB9LCAvLyBbMl06IEJyYWNlIGV4cGFuc2lvblxuICAgIHtcbiAgICAgIHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ29wZXJhdG9yJzogLzpbLT0/K10/fFshXFwvXXwjIz98JSU/fFxcXlxcXj98LCw/LyxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1tcXFtcXF1dLyxcbiAgICAgICAgJ2Vudmlyb25tZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKFxcXFx7KScgKyBlbnZWYXJzKSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvXFwkKD86XFx3K3xbIz8qIUAkXSkvXSxcbiAgICAvLyBFc2NhcGUgc2VxdWVuY2VzIGZyb20gZWNobyBhbmQgcHJpbnRmJ3MgbWFudWFscywgYW5kIGVzY2FwZWQgcXVvdGVzLlxuICAgICdlbnRpdHknOiAvXFxcXCg/OlthYmNlRWZucnR2XFxcXFwiXXxPP1swLTddezEsM318VVswLTlhLWZBLUZdezh9fHVbMC05YS1mQS1GXXs0fXx4WzAtOWEtZkEtRl17MSwyfSkvXG4gIH07XG4gIFByaXNtLmxhbmd1YWdlcy5iYXNoID0ge1xuICAgICdzaGViYW5nJzoge1xuICAgICAgcGF0dGVybjogL14jIVxccypcXC8uKi8sXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgICdjb21tZW50Jzoge1xuICAgICAgcGF0dGVybjogLyhefFteXCJ7XFxcXCRdKSMuKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAnZnVuY3Rpb24tbmFtZSc6IFsvLyBhKSBmdW5jdGlvbiBmb28ge1xuICAgIC8vIGIpIGZvbygpIHtcbiAgICAvLyBjKSBmdW5jdGlvbiBmb28oKSB7XG4gICAgLy8gYnV0IG5vdCDigJxmb28ge+KAnVxuICAgIHtcbiAgICAgIC8vIGEpIGFuZCBjKVxuICAgICAgcGF0dGVybjogLyhcXGJmdW5jdGlvblxccyspW1xcdy1dKyg/PSg/OlxccypcXCg/OlxccypcXCkpP1xccypcXHspLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sIHtcbiAgICAgIC8vIGIpXG4gICAgICBwYXR0ZXJuOiAvXFxiW1xcdy1dKyg/PVxccypcXChcXHMqXFwpXFxzKlxceykvLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9XSxcbiAgICAvLyBIaWdobGlnaHQgdmFyaWFibGUgbmFtZXMgYXMgdmFyaWFibGVzIGluIGZvciBhbmQgc2VsZWN0IGJlZ2lubmluZ3MuXG4gICAgJ2Zvci1vci1zZWxlY3QnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmZvcnxzZWxlY3QpXFxzKylcXHcrKD89XFxzK2luXFxzKS8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIC8vIEhpZ2hsaWdodCB2YXJpYWJsZSBuYW1lcyBhcyB2YXJpYWJsZXMgaW4gdGhlIGxlZnQtaGFuZCBwYXJ0XG4gICAgLy8gb2YgYXNzaWdubWVudHMgKOKAnD3igJ0gYW5kIOKAnCs94oCdKS5cbiAgICAnYXNzaWduLWxlZnQnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKClcXHcrKD89XFwrPz0pLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZW52aXJvbm1lbnQnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCcoXnxbXFxcXHM7fCZdfFs8Pl1cXFxcKCknICsgZW52VmFycyksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2NvbnN0YW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZScsXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAnc3RyaW5nJzogWy8vIFN1cHBvcnQgZm9yIEhlcmUtZG9jdW1lbnRzIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hlcmVfZG9jdW1lbnRcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvKCg/Ol58W148XSk8PC0/XFxzKikoXFx3KylcXHNbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwyLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IGluc2lkZVN0cmluZ1xuICAgIH0sIC8vIEhlcmUtZG9jdW1lbnQgd2l0aCBxdW90ZXMgYXJvdW5kIHRoZSB0YWdcbiAgICAvLyDihpIgTm8gZXhwYW5zaW9uIChzbyBubyDigJxpbnNpZGXigJ0pLlxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8oKD86XnxbXjxdKTw8LT9cXHMqKShbXCInXSkoXFx3KylcXDJcXHNbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwzLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2Jhc2gnOiBjb21tYW5kQWZ0ZXJIZXJlZG9jXG4gICAgICB9XG4gICAgfSwgLy8g4oCcTm9ybWFs4oCdIHN0cmluZ1xuICAgIHtcbiAgICAgIC8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL0RvdWJsZS1RdW90ZXMuaHRtbFxuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0oPzpcXFxcXFxcXCkqKVwiKD86XFxcXFtcXHNcXFNdfFxcJFxcKFteKV0rXFwpfFxcJCg/IVxcKCl8YFteYF0rYHxbXlwiXFxcXGAkXSkqXCIvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZTogaW5zaWRlU3RyaW5nXG4gICAgfSwge1xuICAgICAgLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvU2luZ2xlLVF1b3Rlcy5odG1sXG4gICAgICBwYXR0ZXJuOiAvKF58W14kXFxcXF0pJ1teJ10qJy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSwge1xuICAgICAgLy8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvQU5TSV8wMDJkQy1RdW90aW5nLmh0bWxcbiAgICAgIHBhdHRlcm46IC9cXCQnKD86W14nXFxcXF18XFxcXFtcXHNcXFNdKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZW50aXR5JzogaW5zaWRlU3RyaW5nLmVudGl0eVxuICAgICAgfVxuICAgIH1dLFxuICAgICdlbnZpcm9ubWVudCc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXFxcXCQ/JyArIGVudlZhcnMpLFxuICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICB9LFxuICAgICd2YXJpYWJsZSc6IGluc2lkZVN0cmluZy52YXJpYWJsZSxcbiAgICAnZnVuY3Rpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzphZGR8YXByb3Bvc3xhcHR8YXB0LWNhY2hlfGFwdC1nZXR8YXB0aXR1ZGV8YXNwZWxsfGF1dG9teXNxbGJhY2t1cHxhd2t8YmFzZW5hbWV8YmFzaHxiY3xiY29uc29sZXxiZ3xiemlwMnxjYWx8Y2F0fGNmZGlza3xjaGdycHxjaGtjb25maWd8Y2htb2R8Y2hvd258Y2hyb290fGNrc3VtfGNsZWFyfGNtcHxjb2x1bW58Y29tbXxjb21wb3NlcnxjcHxjcm9ufGNyb250YWJ8Y3NwbGl0fGN1cmx8Y3V0fGRhdGV8ZGN8ZGR8ZGRyZXNjdWV8ZGVib290c3RyYXB8ZGZ8ZGlmZnxkaWZmM3xkaWd8ZGlyfGRpcmNvbG9yc3xkaXJuYW1lfGRpcnN8ZG1lc2d8ZG9ja2VyfGRvY2tlci1jb21wb3NlfGR1fGVncmVwfGVqZWN0fGVudnxldGh0b29sfGV4cGFuZHxleHBlY3R8ZXhwcnxmZGZvcm1hdHxmZGlza3xmZ3xmZ3JlcHxmaWxlfGZpbmR8Zm10fGZvbGR8Zm9ybWF0fGZyZWV8ZnNja3xmdHB8ZnVzZXJ8Z2F3a3xnaXR8Z3BhcnRlZHxncmVwfGdyb3VwYWRkfGdyb3VwZGVsfGdyb3VwbW9kfGdyb3Vwc3xncnViLW1rY29uZmlnfGd6aXB8aGFsdHxoZWFkfGhnfGhpc3Rvcnl8aG9zdHxob3N0bmFtZXxodG9wfGljb252fGlkfGlmY29uZmlnfGlmZG93bnxpZnVwfGltcG9ydHxpbnN0YWxsfGlwfGpvYnN8am9pbnxraWxsfGtpbGxhbGx8bGVzc3xsaW5rfGxufGxvY2F0ZXxsb2duYW1lfGxvZ3JvdGF0ZXxsb29rfGxwY3xscHJ8bHByaW50fGxwcmludGR8bHByaW50cXxscHJtfGxzfGxzb2Z8bHlueHxtYWtlfG1hbnxtY3xtZGFkbXxta2NvbmZpZ3xta2Rpcnxta2UyZnN8bWtmaWZvfG1rZnN8bWtpc29mc3xta25vZHxta3N3YXB8bW12fG1vcmV8bW9zdHxtb3VudHxtdG9vbHN8bXRyfG11dHR8bXZ8bmFub3xuY3xuZXRzdGF0fG5pY2V8bmx8bm9kZXxub2h1cHxub3RpZnktc2VuZHxucG18bnNsb29rdXB8b3B8b3BlbnxwYXJ0ZWR8cGFzc3dkfHBhc3RlfHBhdGhjaGt8cGluZ3xwa2lsbHxwbnBtfHBvZG1hbnxwb2RtYW4tY29tcG9zZXxwb3BkfHByfHByaW50Y2FwfHByaW50ZW52fHBzfHB1c2hkfHB2fHF1b3RhfHF1b3RhY2hlY2t8cXVvdGFjdGx8cmFtfHJhcnxyY3B8cmVib290fHJlbXN5bmN8cmVuYW1lfHJlbmljZXxyZXZ8cm18cm1kaXJ8cnBtfHJzeW5jfHNjcHxzY3JlZW58c2RpZmZ8c2VkfHNlbmRtYWlsfHNlcXxzZXJ2aWNlfHNmdHB8c2h8c2hlbGxjaGVja3xzaHVmfHNodXRkb3dufHNsZWVwfHNsb2NhdGV8c29ydHxzcGxpdHxzc2h8c3RhdHxzdHJhY2V8c3V8c3Vkb3xzdW18c3VzcGVuZHxzd2Fwb258c3luY3x0YWN8dGFpbHx0YXJ8dGVlfHRpbWV8dGltZW91dHx0b3B8dG91Y2h8dHJ8dHJhY2Vyb3V0ZXx0c29ydHx0dHl8dW1vdW50fHVuYW1lfHVuZXhwYW5kfHVuaXF8dW5pdHN8dW5yYXJ8dW5zaGFyfHVuemlwfHVwZGF0ZS1ncnVifHVwdGltZXx1c2VyYWRkfHVzZXJkZWx8dXNlcm1vZHx1c2Vyc3x1dWRlY29kZXx1dWVuY29kZXx2fHZjcGtnfHZkaXJ8dml8dmltfHZpcnNofHZtc3RhdHx3YWl0fHdhdGNofHdjfHdnZXR8d2hlcmVpc3x3aGljaHx3aG98d2hvYW1pfHdyaXRlfHhhcmdzfHhkZy1vcGVufHlhcm58eWVzfHplbml0eXx6aXB8enNofHp5cHBlcikoPz0kfFspXFxzO3wmXSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ2tleXdvcmQnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzpjYXNlfGRvfGRvbmV8ZWxpZnxlbHNlfGVzYWN8Zml8Zm9yfGZ1bmN0aW9ufGlmfGlufHNlbGVjdHx0aGVufHVudGlsfHdoaWxlKSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAvLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvbWFudWFsL2h0bWxfbm9kZS9TaGVsbC1CdWlsdGluLUNvbW1hbmRzLmh0bWxcbiAgICAnYnVpbHRpbic6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OlxcLnw6fGFsaWFzfGJpbmR8YnJlYWt8YnVpbHRpbnxjYWxsZXJ8Y2R8Y29tbWFuZHxjb250aW51ZXxkZWNsYXJlfGVjaG98ZW5hYmxlfGV2YWx8ZXhlY3xleGl0fGV4cG9ydHxnZXRvcHRzfGhhc2h8aGVscHxsZXR8bG9jYWx8bG9nb3V0fG1hcGZpbGV8cHJpbnRmfHB3ZHxyZWFkfHJlYWRhcnJheXxyZWFkb25seXxyZXR1cm58c2V0fHNoaWZ0fHNob3B0fHNvdXJjZXx0ZXN0fHRpbWVzfHRyYXB8dHlwZXx0eXBlc2V0fHVsaW1pdHx1bWFza3x1bmFsaWFzfHVuc2V0KSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgLy8gQWxpYXMgYWRkZWQgdG8gbWFrZSB0aG9zZSBlYXNpZXIgdG8gZGlzdGluZ3Vpc2ggZnJvbSBzdHJpbmdzLlxuICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJ1xuICAgIH0sXG4gICAgJ2Jvb2xlYW4nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzpmYWxzZXx0cnVlKSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAnZmlsZS1kZXNjcmlwdG9yJzoge1xuICAgICAgcGF0dGVybjogL1xcQiZcXGRcXGIvLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICAnb3BlcmF0b3InOiB7XG4gICAgICAvLyBMb3RzIG9mIHJlZGlyZWN0aW9ucyBoZXJlLCBidXQgbm90IGp1c3QgdGhhdC5cbiAgICAgIHBhdHRlcm46IC9cXGQ/PD58PlxcfHxcXCs9fD1bPX5dP3whPT98PDxbPC1dP3xbJlxcZF0/Pj58XFxkWzw+XSY/fFs8Pl1bJj1dP3wmWz4mXT98XFx8WyZ8XT8vLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdmaWxlLWRlc2NyaXB0b3InOiB7XG4gICAgICAgICAgcGF0dGVybjogL15cXGQvLFxuICAgICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAncHVuY3R1YXRpb24nOiAvXFwkP1xcKFxcKD98XFwpXFwpP3xcXC5cXC58W3t9W1xcXTtcXFxcXS8sXG4gICAgJ251bWJlcic6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxcXHMpKD86WzEtOV1cXGQqfDApKD86Wy4sXVxcZCspP1xcYi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfVxuICB9O1xuICBjb21tYW5kQWZ0ZXJIZXJlZG9jLmluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5iYXNoO1xuICAvKiBQYXR0ZXJucyBpbiBjb21tYW5kIHN1YnN0aXR1dGlvbi4gKi9cblxuICB2YXIgdG9CZUNvcGllZCA9IFsnY29tbWVudCcsICdmdW5jdGlvbi1uYW1lJywgJ2Zvci1vci1zZWxlY3QnLCAnYXNzaWduLWxlZnQnLCAnc3RyaW5nJywgJ2Vudmlyb25tZW50JywgJ2Z1bmN0aW9uJywgJ2tleXdvcmQnLCAnYnVpbHRpbicsICdib29sZWFuJywgJ2ZpbGUtZGVzY3JpcHRvcicsICdvcGVyYXRvcicsICdwdW5jdHVhdGlvbicsICdudW1iZXInXTtcbiAgdmFyIGluc2lkZSA9IGluc2lkZVN0cmluZy52YXJpYWJsZVsxXS5pbnNpZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b0JlQ29waWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zaWRlW3RvQmVDb3BpZWRbaV1dID0gUHJpc20ubGFuZ3VhZ2VzLmJhc2hbdG9CZUNvcGllZFtpXV07XG4gIH1cblxuICBQcmlzbS5sYW5ndWFnZXMuc2hlbGwgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaDtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlXCIgKi9cblxuXG5wcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG4gICdjb21tZW50JzogW3tcbiAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LCB7XG4gICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9XSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnY2xhc3MtbmFtZSc6IHtcbiAgICBwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfGludGVyZmFjZXxuZXd8dHJhaXQpXFxzK3xcXGJjYXRjaFxccytcXCgpW1xcdy5cXFxcXSsvaSxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgJ3B1bmN0dWF0aW9uJzogL1suXFxcXF0vXG4gICAgfVxuICB9LFxuICAna2V5d29yZCc6IC9cXGIoPzpicmVha3xjYXRjaHxjb250aW51ZXxkb3xlbHNlfGZpbmFsbHl8Zm9yfGZ1bmN0aW9ufGlmfGlufGluc3RhbmNlb2Z8bmV3fG51bGx8cmV0dXJufHRocm93fHRyeXx3aGlsZSlcXGIvLFxuICAnYm9vbGVhbic6IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi8sXG4gICdmdW5jdGlvbic6IC9cXGJcXHcrKD89XFwoKS8sXG4gICdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuICAnb3BlcmF0b3InOiAvWzw+XT0/fFshPV09Pz0/fC0tP3xcXCtcXCs/fCYmP3xcXHxcXHw/fFs/Ki9+XiVdLyxcbiAgJ3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMuYyA9IHByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAnY29tbWVudCc6IHtcbiAgICBwYXR0ZXJuOiAvXFwvXFwvKD86W15cXHJcXG5cXFxcXXxcXFxcKD86XFxyXFxuP3xcXG58KD8hW1xcclxcbl0pKSkqfFxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnc3RyaW5nJzoge1xuICAgIC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2MvbGFuZ3VhZ2Uvc3RyaW5nX2xpdGVyYWxcbiAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwiLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGIoPzplbnVtfHN0cnVjdClcXHMrKD86X19hdHRyaWJ1dGVfX1xccypcXChcXChbXFxzXFxTXSo/XFwpXFwpXFxzKik/KVxcdyt8XFxiW2Etel1cXHcqX3RcXGIvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86X0FsaWduYXN8X0FsaWdub2Z8X0F0b21pY3xfQm9vbHxfQ29tcGxleHxfR2VuZXJpY3xfSW1hZ2luYXJ5fF9Ob3JldHVybnxfU3RhdGljX2Fzc2VydHxfVGhyZWFkX2xvY2FsfF9fYXR0cmlidXRlX198YXNtfGF1dG98YnJlYWt8Y2FzZXxjaGFyfGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZG98ZG91YmxlfGVsc2V8ZW51bXxleHRlcm58ZmxvYXR8Zm9yfGdvdG98aWZ8aW5saW5lfGludHxsb25nfHJlZ2lzdGVyfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdHJ1Y3R8c3dpdGNofHR5cGVkZWZ8dHlwZW9mfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgJ2Z1bmN0aW9uJzogL1xcYlthLXpfXVxcdyooPz1cXHMqXFwoKS9pLFxuICAnbnVtYmVyJzogLyg/OlxcYjB4KD86W1xcZGEtZl0rKD86XFwuW1xcZGEtZl0qKT98XFwuW1xcZGEtZl0rKSg/OnBbKy1dP1xcZCspP3woPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdezAsNH0vaSxcbiAgJ29wZXJhdG9yJzogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py9cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdzdHJpbmcnLCB7XG4gICdjaGFyJzoge1xuICAgIC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2MvbGFuZ3VhZ2UvY2hhcmFjdGVyX2NvbnN0YW50XG4gICAgcGF0dGVybjogLycoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXidcXFxcXFxyXFxuXSl7MCwzMn0nLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfVxufSk7XG5wcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjJywgJ3N0cmluZycsIHtcbiAgJ21hY3JvJzoge1xuICAgIC8vIGFsbG93IGZvciBtdWx0aWxpbmUgbWFjcm8gZGVmaW5pdGlvbnNcbiAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgIHBhdHRlcm46IC8oXltcXHQgXSopI1xccypbYS16XSg/OlteXFxyXFxuXFxcXC9dfFxcLyg/IVxcKil8XFwvXFwqKD86W14qXXxcXCooPyFcXC8pKSpcXCpcXC98XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdzdHJpbmcnOiBbe1xuICAgICAgICAvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG4gICAgICAgIHBhdHRlcm46IC9eKCNcXHMqaW5jbHVkZVxccyopPFtePl0rPi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sIHByaXNtLmxhbmd1YWdlcy5jWydzdHJpbmcnXV0sXG4gICAgICAnY2hhcic6IHByaXNtLmxhbmd1YWdlcy5jWydjaGFyJ10sXG4gICAgICAnY29tbWVudCc6IHByaXNtLmxhbmd1YWdlcy5jWydjb21tZW50J10sXG4gICAgICAnbWFjcm8tbmFtZSc6IFt7XG4gICAgICAgIHBhdHRlcm46IC8oXiNcXHMqZGVmaW5lXFxzKylcXHcrXFxiKD8hXFwoKS9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIHBhdHRlcm46IC8oXiNcXHMqZGVmaW5lXFxzKylcXHcrXFxiKD89XFwoKS9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfV0sXG4gICAgICAvLyBoaWdobGlnaHQgbWFjcm8gZGlyZWN0aXZlcyBhcyBrZXl3b3Jkc1xuICAgICAgJ2RpcmVjdGl2ZSc6IHtcbiAgICAgICAgcGF0dGVybjogL14oI1xccyopW2Etel0rLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtaGFzaCc6IC9eIy8sXG4gICAgICAncHVuY3R1YXRpb24nOiAvIyN8XFxcXCg/PVtcXHJcXG5dKS8sXG4gICAgICAnZXhwcmVzc2lvbic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcU1tcXHNcXFNdKi8sXG4gICAgICAgIGluc2lkZTogcHJpc20ubGFuZ3VhZ2VzLmNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdmdW5jdGlvbicsIHtcbiAgLy8gaGlnaGxpZ2h0IHByZWRlZmluZWQgbWFjcm9zIGFzIGNvbnN0YW50c1xuICAnY29uc3RhbnQnOiAvXFxiKD86RU9GfE5VTEx8U0VFS19DVVJ8U0VFS19FTkR8U0VFS19TRVR8X19EQVRFX198X19GSUxFX198X19MSU5FX198X19USU1FU1RBTVBfX3xfX1RJTUVfX3xfX2Z1bmNfX3xzdGRlcnJ8c3RkaW58c3Rkb3V0KVxcYi9cbn0pO1xuZGVsZXRlIHByaXNtLmxhbmd1YWdlcy5jWydib29sZWFuJ107XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jcHBcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIHZhciBrZXl3b3JkID0gL1xcYig/OmFsaWduYXN8YWxpZ25vZnxhc218YXV0b3xib29sfGJyZWFrfGNhc2V8Y2F0Y2h8Y2hhcnxjaGFyMTZfdHxjaGFyMzJfdHxjaGFyOF90fGNsYXNzfGNvX2F3YWl0fGNvX3JldHVybnxjb195aWVsZHxjb21wbHxjb25jZXB0fGNvbnN0fGNvbnN0X2Nhc3R8Y29uc3RldmFsfGNvbnN0ZXhwcnxjb25zdGluaXR8Y29udGludWV8ZGVjbHR5cGV8ZGVmYXVsdHxkZWxldGV8ZG98ZG91YmxlfGR5bmFtaWNfY2FzdHxlbHNlfGVudW18ZXhwbGljaXR8ZXhwb3J0fGV4dGVybnxmaW5hbHxmbG9hdHxmb3J8ZnJpZW5kfGdvdG98aWZ8aW1wb3J0fGlubGluZXxpbnR8aW50MTZfdHxpbnQzMl90fGludDY0X3R8aW50OF90fGxvbmd8bW9kdWxlfG11dGFibGV8bmFtZXNwYWNlfG5ld3xub2V4Y2VwdHxudWxscHRyfG9wZXJhdG9yfG92ZXJyaWRlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWdpc3RlcnxyZWludGVycHJldF9jYXN0fHJlcXVpcmVzfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdGF0aWNfYXNzZXJ0fHN0YXRpY19jYXN0fHN0cnVjdHxzd2l0Y2h8dGVtcGxhdGV8dGhpc3x0aHJlYWRfbG9jYWx8dGhyb3d8dHJ5fHR5cGVkZWZ8dHlwZWlkfHR5cGVuYW1lfHVpbnQxNl90fHVpbnQzMl90fHVpbnQ2NF90fHVpbnQ4X3R8dW5pb258dW5zaWduZWR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdjaGFyX3R8d2hpbGUpXFxiLztcbiAgdmFyIG1vZE5hbWUgPSAvXFxiKD8hPGtleXdvcmQ+KVxcdysoPzpcXHMqXFwuXFxzKlxcdyspKlxcYi8uc291cmNlLnJlcGxhY2UoLzxrZXl3b3JkPi9nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGtleXdvcmQuc291cmNlO1xuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNwcCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2MnLCB7XG4gICAgJ2NsYXNzLW5hbWUnOiBbe1xuICAgICAgcGF0dGVybjogUmVnRXhwKC8oXFxiKD86Y2xhc3N8Y29uY2VwdHxlbnVtfHN0cnVjdHx0eXBlbmFtZSlcXHMrKSg/ITxrZXl3b3JkPilcXHcrLy5zb3VyY2UucmVwbGFjZSgvPGtleXdvcmQ+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmQuc291cmNlO1xuICAgICAgfSkpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sIC8vIFRoaXMgaXMgaW50ZW5kZWQgdG8gY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBvZiBtZXRob2QgaW1wbGVtZW50YXRpb25zIGxpa2U6XG4gICAgLy8gICB2b2lkIGZvbzo6YmFyKCkgY29uc3Qge31cbiAgICAvLyBIb3dldmVyISBUaGUgYGZvb2AgaW4gdGhlIGFib3ZlIGV4YW1wbGUgY291bGQgYWxzbyBiZSBhIG5hbWVzcGFjZSwgc28gd2Ugb25seSBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIGlmXG4gICAgLy8gaXQgc3RhcnRzIHdpdGggYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBhcHByb3hpbWF0aW9uIHNob3VsZCBnaXZlIGRlY2VudCByZXN1bHRzLlxuICAgIC9cXGJbQS1aXVxcdyooPz1cXHMqOjpcXHMqXFx3K1xccypcXCgpLywgLy8gVGhpcyB3aWxsIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgYmVmb3JlIGRlc3RydWN0b3JzIGxpa2U6XG4gICAgLy8gICBGb286On5Gb28oKSB7fVxuICAgIC9cXGJbQS1aX11cXHcqKD89XFxzKjo6XFxzKn5cXHcrXFxzKlxcKCkvaSwgLy8gVGhpcyBhbHNvIGludGVuZHMgdG8gY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBvZiBtZXRob2QgaW1wbGVtZW50YXRpb25zIGJ1dCBoZXJlIHRoZSBjbGFzcyBoYXMgdGVtcGxhdGVcbiAgICAvLyBwYXJhbWV0ZXJzLCBzbyBpdCBjYW4ndCBiZSBhIG5hbWVzcGFjZSAodW50aWwgQysrIGFkZHMgZ2VuZXJpYyBuYW1lc3BhY2VzKS5cbiAgICAvXFxiXFx3Kyg/PVxccyo8KD86W148Pl18PCg/OltePD5dfDxbXjw+XSo+KSo+KSo+XFxzKjo6XFxzKlxcdytcXHMqXFwoKS9dLFxuICAgICdrZXl3b3JkJzoga2V5d29yZCxcbiAgICAnbnVtYmVyJzoge1xuICAgICAgcGF0dGVybjogLyg/OlxcYjBiWzAxJ10rfFxcYjB4KD86W1xcZGEtZiddKyg/OlxcLltcXGRhLWYnXSopP3xcXC5bXFxkYS1mJ10rKSg/OnBbKy1dP1tcXGQnXSspP3woPzpcXGJbXFxkJ10rKD86XFwuW1xcZCddKik/fFxcQlxcLltcXGQnXSspKD86ZVsrLV0/W1xcZCddKyk/KVtmdWxdezAsNH0vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ29wZXJhdG9yJzogLz4+PT98PDw9P3wtPnwtLXxcXCtcXCt8JiZ8XFx8XFx8fFs/On5dfDw9PnxbLSsqLyUmfF4hPTw+XT0/fFxcYig/OmFuZHxhbmRfZXF8Yml0YW5kfGJpdG9yfG5vdHxub3RfZXF8b3J8b3JfZXF8eG9yfHhvcl9lcSlcXGIvLFxuICAgICdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiL1xuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ3N0cmluZycsIHtcbiAgICAnbW9kdWxlJzoge1xuICAgICAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2xhbmd1YWdlL21vZHVsZXNcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKFxcYig/OmltcG9ydHxtb2R1bGUpXFxzKykvLnNvdXJjZSArICcoPzonICsgLy8gaGVhZGVyLW5hbWVcbiAgICAgIC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCJ8PFtePD5cXHJcXG5dKj4vLnNvdXJjZSArICd8JyArIC8vIG1vZHVsZSBuYW1lIG9yIHBhcnRpdGlvbiBvciBib3RoXG4gICAgICAvPG1vZC1uYW1lPig/Olxccyo6XFxzKjxtb2QtbmFtZT4pP3w6XFxzKjxtb2QtbmFtZT4vLnNvdXJjZS5yZXBsYWNlKC88bW9kLW5hbWU+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG1vZE5hbWU7XG4gICAgICB9KSArICcpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdzdHJpbmcnOiAvXls8XCJdW1xcc1xcU10rLyxcbiAgICAgICAgJ29wZXJhdG9yJzogLzovLFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvXFwuL1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3Jhdy1zdHJpbmcnOiB7XG4gICAgICBwYXR0ZXJuOiAvUlwiKFteKClcXFxcIF17MCwxNn0pXFwoW1xcc1xcU10qP1xcKVxcMVwiLyxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdrZXl3b3JkJywge1xuICAgICdnZW5lcmljLWZ1bmN0aW9uJzoge1xuICAgICAgcGF0dGVybjogL1xcYig/IW9wZXJhdG9yXFxiKVthLXpfXVxcdypcXHMqPCg/OltePD5dfDxbXjw+XSo+KSo+KD89XFxzKlxcKCkvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZnVuY3Rpb24nOiAvXlxcdysvLFxuICAgICAgICAnZ2VuZXJpYyc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPFtcXHNcXFNdKy8sXG4gICAgICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJyxcbiAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jcHBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdvcGVyYXRvcicsIHtcbiAgICAnZG91YmxlLWNvbG9uJzoge1xuICAgICAgcGF0dGVybjogLzo6LyxcbiAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ2NsYXNzLW5hbWUnLCB7XG4gICAgLy8gdGhlIGJhc2UgY2xhdXNlIGlzIGFuIG9wdGlvbmFsIGxpc3Qgb2YgcGFyZW50IGNsYXNzZXNcbiAgICAvLyBodHRwczovL2VuLmNwcHJlZmVyZW5jZS5jb20vdy9jcHAvbGFuZ3VhZ2UvY2xhc3NcbiAgICAnYmFzZS1jbGF1c2UnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfHN0cnVjdClcXHMrXFx3K1xccyo6XFxzKilbXjt7fVwiJ1xcc10rKD86XFxzK1teO3t9XCInXFxzXSspKig/PVxccypbO3tdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjcHAnLCB7fSlcbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnZG91YmxlLWNvbG9uJywge1xuICAgIC8vIEFsbCB1bnRva2VuaXplZCB3b3JkcyB0aGF0IGFyZSBub3QgbmFtZXNwYWNlcyBzaG91bGQgYmUgY2xhc3MgbmFtZXNcbiAgICAnY2xhc3MtbmFtZSc6IC9cXGJbYS16X11cXHcqXFxiKD8hXFxzKjo6KS9pXG4gIH0sIFByaXNtLmxhbmd1YWdlcy5jcHBbJ2Jhc2UtY2xhdXNlJ10pO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzXCIgKi9cblxuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIHZhciBzdHJpbmcgPSAvKD86XCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlwiXFxcXFxcclxcbl0pKlwifCcoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXidcXFxcXFxyXFxuXSkqJykvO1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuICAgICdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICdhdHJ1bGUnOiB7XG4gICAgICBwYXR0ZXJuOiAvQFtcXHctXSg/OlteO3tcXHNdfFxccysoPyFbXFxze10pKSooPzo7fCg/PVxccypcXHspKS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3J1bGUnOiAvXkBbXFx3LV0rLyxcbiAgICAgICAgJ3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgICAgIH0sXG4gICAgICAgICdrZXl3b3JkJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0gLy8gU2VlIHJlc3QgYmVsb3dcblxuICAgICAgfVxuICAgIH0sXG4gICAgJ3VybCc6IHtcbiAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXFxcXGJ1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3wnICsgLyg/OlteXFxcXFxcclxcbigpXCInXXxcXFxcW1xcc1xcU10pKi8uc291cmNlICsgJylcXFxcKScsICdpJyksXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2Z1bmN0aW9uJzogL151cmwvaSxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC8sXG4gICAgICAgICdzdHJpbmcnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeJyArIHN0cmluZy5zb3VyY2UgKyAnJCcpLFxuICAgICAgICAgIGFsaWFzOiAndXJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnc2VsZWN0b3InOiB7XG4gICAgICBwYXR0ZXJuOiBSZWdFeHAoJyhefFt7fVxcXFxzXSlbXnt9XFxcXHNdKD86W157fTtcIlxcJ1xcXFxzXXxcXFxccysoPyFbXFxcXHN7XSl8JyArIHN0cmluZy5zb3VyY2UgKyAnKSooPz1cXFxccypcXFxceyknKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdzdHJpbmcnOiB7XG4gICAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdwcm9wZXJ0eSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXi1cXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpWy1fYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAnaW1wb3J0YW50JzogLyFpbXBvcnRhbnRcXGIvaSxcbiAgICAnZnVuY3Rpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14tYS16MC05XSlbLWEtejAtOV0rKD89XFwoKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuICB2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuICBpZiAobWFya3VwKSB7XG4gICAgbWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcbiAgICBtYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG4gIH1cbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcy1leHRyYXNcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcbiAgdmFyIHNlbGVjdG9ySW5zaWRlO1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzLnNlbGVjdG9yID0ge1xuICAgIHBhdHRlcm46IFByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IucGF0dGVybixcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZTogc2VsZWN0b3JJbnNpZGUgPSB7XG4gICAgICAncHNldWRvLWVsZW1lbnQnOiAvOig/OmFmdGVyfGJlZm9yZXxmaXJzdC1sZXR0ZXJ8Zmlyc3QtbGluZXxzZWxlY3Rpb24pfDo6Wy1cXHddKy8sXG4gICAgICAncHNldWRvLWNsYXNzJzogLzpbLVxcd10rLyxcbiAgICAgICdjbGFzcyc6IC9cXC5bLVxcd10rLyxcbiAgICAgICdpZCc6IC8jWy1cXHddKy8sXG4gICAgICAnYXR0cmlidXRlJzoge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJ1xcXFxbKD86W15bXFxcXF1cIlxcJ118JyArIHN0cmluZy5zb3VyY2UgKyAnKSpcXFxcXScpLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdwdW5jdHVhdGlvbic6IC9eXFxbfFxcXSQvLFxuICAgICAgICAgICdjYXNlLXNlbnNpdGl2aXR5Jzoge1xuICAgICAgICAgICAgcGF0dGVybjogLyhcXHMpW3NpXSQvaSxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbmFtZXNwYWNlJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oXFxzKikoPzooPyFcXHMpWy0qXFx3XFx4QTAtXFx1RkZGRl0pKlxcfCg/IT0pLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcfCQvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnYXR0ci1uYW1lJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oXFxzKikoPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkrLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgICdhdHRyLXZhbHVlJzogW3N0cmluZywge1xuICAgICAgICAgICAgcGF0dGVybjogLyg9XFxzKikoPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkrKD89XFxzKiQpLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9XSxcbiAgICAgICAgICAnb3BlcmF0b3InOiAvW3x+Kl4kXT89L1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ24tdGgnOiBbe1xuICAgICAgICBwYXR0ZXJuOiAvKFxcKFxccyopWystXT9cXGQqW1xcZG5dKD86XFxzKlsrLV1cXHMqXFxkKyk/KD89XFxzKlxcKSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnbnVtYmVyJzogL1tcXGRuXSsvLFxuICAgICAgICAgICdvcGVyYXRvcic6IC9bKy1dL1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHBhdHRlcm46IC8oXFwoXFxzKikoPzpldmVufG9kZCkoPz1cXHMqXFwpKS9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XSxcbiAgICAgICdjb21iaW5hdG9yJzogLz58XFwrfH58XFx8XFx8LyxcbiAgICAgIC8vIHRoZSBgdGFnYCB0b2tlbiBoYXMgYmVlbiBleGlzdGVkIGFuZCByZW1vdmVkLlxuICAgICAgLy8gYmVjYXVzZSB3ZSBjYW4ndCBmaW5kIGEgcGVyZmVjdCB0b2tlbml6ZSB0byBtYXRjaCBpdC5cbiAgICAgIC8vIGlmIHlvdSB3YW50IHRvIGFkZCBpdCwgcGxlYXNlIHJlYWQgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vcHVsbC8yMzczIGZpcnN0LlxuICAgICAgJ3B1bmN0dWF0aW9uJzogL1soKSxdL1xuICAgIH1cbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlWydzZWxlY3Rvci1mdW5jdGlvbi1hcmd1bWVudCddLmluc2lkZSA9IHNlbGVjdG9ySW5zaWRlO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc3MnLCAncHJvcGVydHknLCB7XG4gICAgJ3ZhcmlhYmxlJzoge1xuICAgICAgcGF0dGVybjogLyhefFteLVxcd1xceEEwLVxcdUZGRkZdKS0tKD8hXFxzKVstX2EtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKi9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHZhciB1bml0ID0ge1xuICAgIHBhdHRlcm46IC8oXFxiXFxkKykoPzolfFthLXpdKyg/IVtcXHctXSkpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH07IC8vIDEyMyAtMTIzIC4xMjMgLS4xMjMgMTIuMyAtMTIuM1xuXG4gIHZhciBudW1iZXIgPSB7XG4gICAgcGF0dGVybjogLyhefFteXFx3Li1dKS0/KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9O1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc3MnLCAnZnVuY3Rpb24nLCB7XG4gICAgJ29wZXJhdG9yJzoge1xuICAgICAgcGF0dGVybjogLyhcXHMpWytcXC0qXFwvXSg/PVxccykvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgLy8gQ0FSRUZVTCFcbiAgICAvLyBQcmV2aWV3ZXJzIGFuZCBJbmxpbmUgY29sb3IgdXNlIGhleGNvZGUgYW5kIGNvbG9yLlxuICAgICdoZXhjb2RlJzoge1xuICAgICAgcGF0dGVybjogL1xcQiNbXFxkYS1mXXszLDh9XFxiL2ksXG4gICAgICBhbGlhczogJ2NvbG9yJ1xuICAgIH0sXG4gICAgJ2NvbG9yJzogW3tcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OkFsaWNlQmx1ZXxBbnRpcXVlV2hpdGV8QXF1YXxBcXVhbWFyaW5lfEF6dXJlfEJlaWdlfEJpc3F1ZXxCbGFja3xCbGFuY2hlZEFsbW9uZHxCbHVlfEJsdWVWaW9sZXR8QnJvd258QnVybHlXb29kfENhZGV0Qmx1ZXxDaGFydHJldXNlfENob2NvbGF0ZXxDb3JhbHxDb3JuZmxvd2VyQmx1ZXxDb3Juc2lsa3xDcmltc29ufEN5YW58RGFya0JsdWV8RGFya0N5YW58RGFya0dvbGRlblJvZHxEYXJrR3JbYWVdeXxEYXJrR3JlZW58RGFya0toYWtpfERhcmtNYWdlbnRhfERhcmtPbGl2ZUdyZWVufERhcmtPcmFuZ2V8RGFya09yY2hpZHxEYXJrUmVkfERhcmtTYWxtb258RGFya1NlYUdyZWVufERhcmtTbGF0ZUJsdWV8RGFya1NsYXRlR3JbYWVdeXxEYXJrVHVycXVvaXNlfERhcmtWaW9sZXR8RGVlcFBpbmt8RGVlcFNreUJsdWV8RGltR3JbYWVdeXxEb2RnZXJCbHVlfEZpcmVCcmlja3xGbG9yYWxXaGl0ZXxGb3Jlc3RHcmVlbnxGdWNoc2lhfEdhaW5zYm9yb3xHaG9zdFdoaXRlfEdvbGR8R29sZGVuUm9kfEdyW2FlXXl8R3JlZW58R3JlZW5ZZWxsb3d8SG9uZXlEZXd8SG90UGlua3xJbmRpYW5SZWR8SW5kaWdvfEl2b3J5fEtoYWtpfExhdmVuZGVyfExhdmVuZGVyQmx1c2h8TGF3bkdyZWVufExlbW9uQ2hpZmZvbnxMaWdodEJsdWV8TGlnaHRDb3JhbHxMaWdodEN5YW58TGlnaHRHb2xkZW5Sb2RZZWxsb3d8TGlnaHRHclthZV15fExpZ2h0R3JlZW58TGlnaHRQaW5rfExpZ2h0U2FsbW9ufExpZ2h0U2VhR3JlZW58TGlnaHRTa3lCbHVlfExpZ2h0U2xhdGVHclthZV15fExpZ2h0U3RlZWxCbHVlfExpZ2h0WWVsbG93fExpbWV8TGltZUdyZWVufExpbmVufE1hZ2VudGF8TWFyb29ufE1lZGl1bUFxdWFNYXJpbmV8TWVkaXVtQmx1ZXxNZWRpdW1PcmNoaWR8TWVkaXVtUHVycGxlfE1lZGl1bVNlYUdyZWVufE1lZGl1bVNsYXRlQmx1ZXxNZWRpdW1TcHJpbmdHcmVlbnxNZWRpdW1UdXJxdW9pc2V8TWVkaXVtVmlvbGV0UmVkfE1pZG5pZ2h0Qmx1ZXxNaW50Q3JlYW18TWlzdHlSb3NlfE1vY2Nhc2lufE5hdmFqb1doaXRlfE5hdnl8T2xkTGFjZXxPbGl2ZXxPbGl2ZURyYWJ8T3JhbmdlfE9yYW5nZVJlZHxPcmNoaWR8UGFsZUdvbGRlblJvZHxQYWxlR3JlZW58UGFsZVR1cnF1b2lzZXxQYWxlVmlvbGV0UmVkfFBhcGF5YVdoaXB8UGVhY2hQdWZmfFBlcnV8UGlua3xQbHVtfFBvd2RlckJsdWV8UHVycGxlfFJlZHxSb3N5QnJvd258Um95YWxCbHVlfFNhZGRsZUJyb3dufFNhbG1vbnxTYW5keUJyb3dufFNlYUdyZWVufFNlYVNoZWxsfFNpZW5uYXxTaWx2ZXJ8U2t5Qmx1ZXxTbGF0ZUJsdWV8U2xhdGVHclthZV15fFNub3d8U3ByaW5nR3JlZW58U3RlZWxCbHVlfFRhbnxUZWFsfFRoaXN0bGV8VG9tYXRvfFRyYW5zcGFyZW50fFR1cnF1b2lzZXxWaW9sZXR8V2hlYXR8V2hpdGV8V2hpdGVTbW9rZXxZZWxsb3d8WWVsbG93R3JlZW4pKD8hW1xcdy1dKS9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpoc2x8cmdiKVxcKFxccypcXGR7MSwzfVxccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccypcXGR7MSwzfSU/XFxzKlxcKVxcQnxcXGIoPzpoc2x8cmdiKWFcXChcXHMqXFxkezEsM31cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKig/OjB8MD9cXC5cXGQrfDEpXFxzKlxcKVxcQi9pLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd1bml0JzogdW5pdCxcbiAgICAgICAgJ251bWJlcic6IG51bWJlcixcbiAgICAgICAgJ2Z1bmN0aW9uJzogL1tcXHctXSsoPz1cXCgpLyxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1soKSxdL1xuICAgICAgfVxuICAgIH1dLFxuICAgIC8vIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlcmUgaXMgbm8gYm91bmRhcnkgYXNzZXJ0aW9uIGFmdGVyIHRoZSBoZXggZGlnaXRzXG4gICAgJ2VudGl0eSc6IC9cXFxcW1xcZGEtZl17MSw4fS9pLFxuICAgICd1bml0JzogdW5pdCxcbiAgICAnbnVtYmVyJzogbnVtYmVyXG4gIH0pO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiICovXG5cblxucHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBwcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgJ2NsYXNzLW5hbWUnOiBbcHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sIHtcbiAgICBwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OmNvbnN0cnVjdG9yfHByb3RvdHlwZSkpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH1dLFxuICAna2V5d29yZCc6IFt7XG4gICAgcGF0dGVybjogLygoPzpefFxcfSlcXHMqKWNhdGNoXFxiLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9XSxcbiAgLy8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG4gICdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcbiAgJ251bWJlcic6IHtcbiAgICBwYXR0ZXJuOiBSZWdFeHAoLyhefFteXFx3JF0pLy5zb3VyY2UgKyAnKD86JyArICggLy8gY29uc3RhbnRcbiAgICAvTmFOfEluZmluaXR5Ly5zb3VyY2UgKyAnfCcgKyAvLyBiaW5hcnkgaW50ZWdlclxuICAgIC8wW2JCXVswMV0rKD86X1swMV0rKSpuPy8uc291cmNlICsgJ3wnICsgLy8gb2N0YWwgaW50ZWdlclxuICAgIC8wW29PXVswLTddKyg/Ol9bMC03XSspKm4/Ly5zb3VyY2UgKyAnfCcgKyAvLyBoZXhhZGVjaW1hbCBpbnRlZ2VyXG4gICAgLzBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj8vLnNvdXJjZSArICd8JyArIC8vIGRlY2ltYWwgYmlnaW50XG4gICAgL1xcZCsoPzpfXFxkKykqbi8uc291cmNlICsgJ3wnICsgLy8gZGVjaW1hbCBudW1iZXIgKGludGVnZXIgb3IgZmxvYXQpIGJ1dCBubyBiaWdpbnRcbiAgICAvKD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPy8uc291cmNlKSArICcpJyArIC8oPyFbXFx3JF0pLy5zb3VyY2UpLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ29wZXJhdG9yJzogLy0tfFxcK1xcK3xcXCpcXCo9P3w9PnwmJj0/fFxcfFxcfD0/fFshPV09PXw8PD0/fD4+Pj89P3xbLSsqLyUmfF4hPTw+XT0/fFxcLnszfXxcXD9cXD89P3xcXD9cXC4/fFt+Ol0vXG59KTtcbnByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydjbGFzcy1uYW1lJ11bMF0ucGF0dGVybiA9IC8oXFxiKD86Y2xhc3N8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8aW50ZXJmYWNlfG5ldylcXHMrKVtcXHcuXFxcXF0rLztcbnByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcbiAgJ3JlZ2V4Jzoge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZHVwZS1jaGFyYWN0ZXJzLWNoYXJhY3Rlci1jbGFzc1xuICAgIHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdfFxcYig/OnJldHVybnx5aWVsZCkpXFxzKilcXC8oPzpcXFsoPzpbXlxcXVxcXFxcXHJcXG5dfFxcXFwuKSpcXF18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tkZ2lteXVzXXswLDd9KD89KD86XFxzfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdyZWdleC1zb3VyY2UnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKFxcLylbXFxzXFxTXSsoPz1cXC9bYS16XSokKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtcmVnZXgnLFxuICAgICAgICBpbnNpZGU6IHByaXNtLmxhbmd1YWdlcy5yZWdleFxuICAgICAgfSxcbiAgICAgICdyZWdleC1kZWxpbWl0ZXInOiAvXlxcL3xcXC8kLyxcbiAgICAgICdyZWdleC1mbGFncyc6IC9eW2Etel0rJC9cbiAgICB9XG4gIH0sXG4gIC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcbiAgJ2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuICAgIHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICdwYXJhbWV0ZXInOiBbe1xuICAgIHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKSkvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiBwcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICB9LCB7XG4gICAgcGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBpbnNpZGU6IHByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvKFxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKVxccyo9PikvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiBwcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICB9LCB7XG4gICAgcGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKlxccyopXFwoXFxzKnxcXF1cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpXFxzKlxceykvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiBwcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICB9XSxcbiAgJ2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcbnByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnc3RyaW5nJywge1xuICAnaGFzaGJhbmcnOiB7XG4gICAgcGF0dGVybjogL14jIS4qLyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgYWxpYXM6ICdjb21tZW50J1xuICB9LFxuICAndGVtcGxhdGUtc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfXwoPyFcXCRcXHspW15cXFxcYF0pKmAvLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogL15gfGAkLyxcbiAgICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgICB9LFxuICAgICAgJ2ludGVycG9sYXRpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCRcXHsoPzpbXnt9XXxcXHsoPzpbXnt9XXxcXHtbXn1dKlxcfSkqXFx9KStcXH0vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eXFwkXFx7fFxcfSQvLFxuICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IHByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc3RyaW5nJzogL1tcXHNcXFNdKy9cbiAgICB9XG4gIH0sXG4gICdzdHJpbmctcHJvcGVydHknOiB7XG4gICAgcGF0dGVybjogLygoPzpefFsse10pWyBcXHRdKikoW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwyKVteXFxcXFxcclxcbl0pKlxcMig/PVxccyo6KS9tLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGFsaWFzOiAncHJvcGVydHknXG4gIH1cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdvcGVyYXRvcicsIHtcbiAgJ2xpdGVyYWwtcHJvcGVydHknOiB7XG4gICAgcGF0dGVybjogLygoPzpefFsse10pWyBcXHRdKikoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL20sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBhbGlhczogJ3Byb3BlcnR5J1xuICB9XG59KTtcblxuaWYgKHByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcbiAgcHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZCgnc2NyaXB0JywgJ2phdmFzY3JpcHQnKTsgLy8gYWRkIGF0dHJpYnV0ZSBzdXBwb3J0IGZvciBhbGwgRE9NIGV2ZW50cy5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzI1N0YW5kYXJkX2V2ZW50c1xuXG4gIHByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgvb24oPzphYm9ydHxibHVyfGNoYW5nZXxjbGlja3xjb21wb3NpdGlvbig/OmVuZHxzdGFydHx1cGRhdGUpfGRibGNsaWNrfGVycm9yfGZvY3VzKD86aW58b3V0KT98a2V5KD86ZG93bnx1cCl8bG9hZHxtb3VzZSg/OmRvd258ZW50ZXJ8bGVhdmV8bW92ZXxvdXR8b3Zlcnx1cCl8cmVzZXR8cmVzaXplfHNjcm9sbHxzZWxlY3R8c2xvdGNoYW5nZXxzdWJtaXR8dW5sb2FkfHdoZWVsKS8uc291cmNlLCAnamF2YXNjcmlwdCcpO1xufVxuXG5wcmlzbS5sYW5ndWFnZXMuanMgPSBwcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdDtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIGphdmFzY3JpcHQgPSBQcmlzbS51dGlsLmNsb25lKFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcbiAgdmFyIHNwYWNlID0gLyg/Olxcc3xcXC9cXC8uKig/IS4pfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSlcXCpcXC8pLy5zb3VyY2U7XG4gIHZhciBicmFjZXMgPSAvKD86XFx7KD86XFx7KD86XFx7W157fV0qXFx9fFtee31dKSpcXH18W157fV0pKlxcfSkvLnNvdXJjZTtcbiAgdmFyIHNwcmVhZCA9IC8oPzpcXHs8Uz4qXFwuezN9KD86W157fV18PEJSQUNFUz4pKlxcfSkvLnNvdXJjZTtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFnc11cbiAgICovXG5cbiAgZnVuY3Rpb24gcmUoc291cmNlLCBmbGFncykge1xuICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC88Uz4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNwYWNlO1xuICAgIH0pLnJlcGxhY2UoLzxCUkFDRVM+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBicmFjZXM7XG4gICAgfSkucmVwbGFjZSgvPFNQUkVBRD4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNwcmVhZDtcbiAgICB9KTtcbiAgICByZXR1cm4gUmVnRXhwKHNvdXJjZSwgZmxhZ3MpO1xuICB9XG5cbiAgc3ByZWFkID0gcmUoc3ByZWFkKS5zb3VyY2U7XG4gIFByaXNtLmxhbmd1YWdlcy5qc3ggPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCBqYXZhc2NyaXB0KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcucGF0dGVybiA9IHJlKC88XFwvPyg/OltcXHcuOi1dKyg/OjxTPisoPzpbXFx3LjokLV0rKD86PSg/OlwiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCJ8Jyg/OlxcXFxbXFxzXFxTXXxbXlxcXFwnXSkqJ3xbXlxcc3snXCIvPj1dK3w8QlJBQ0VTPikpP3w8U1BSRUFEPikpKjxTPipcXC8/KT8+Ly5zb3VyY2UpO1xuICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ3RhZyddLnBhdHRlcm4gPSAvXjxcXC8/W15cXHM+XFwvXSovO1xuICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ2F0dHItdmFsdWUnXS5wYXR0ZXJuID0gLz0oPyFcXHspKD86XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcInwnKD86XFxcXFtcXHNcXFNdfFteXFxcXCddKSonfFteXFxzJ1wiPl0rKS87XG4gIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsndGFnJ10uaW5zaWRlWydjbGFzcy1uYW1lJ10gPSAvXltBLVpdXFx3Kig/OlxcLltBLVpdXFx3KikqJC87XG4gIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsnY29tbWVudCddID0gamF2YXNjcmlwdFsnY29tbWVudCddO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnYXR0ci1uYW1lJywge1xuICAgICdzcHJlYWQnOiB7XG4gICAgICBwYXR0ZXJuOiByZSgvPFNQUkVBRD4vLnNvdXJjZSksXG4gICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qc3hcbiAgICB9XG4gIH0sIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnKTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ3NwZWNpYWwtYXR0cicsIHtcbiAgICAnc2NyaXB0Jzoge1xuICAgICAgLy8gQWxsb3cgZm9yIHR3byBsZXZlbHMgb2YgbmVzdGluZ1xuICAgICAgcGF0dGVybjogcmUoLz08QlJBQ0VTPi8uc291cmNlKSxcbiAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtamF2YXNjcmlwdCcsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3NjcmlwdC1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXj0oPz1cXHspLyxcbiAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuanN4XG4gICAgICB9XG4gICAgfVxuICB9LCBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZyk7IC8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xuXG4gIHZhciBzdHJpbmdpZnlUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b2tlbi5jb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJyk7XG4gIH07XG5cbiAgdmFyIHdhbGtUb2tlbnMgPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gICAgdmFyIG9wZW5lZFRhZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICB2YXIgbm90VGFnTm9yQnJhY2UgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0YWcnICYmIHRva2VuLmNvbnRlbnRbMF0gJiYgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJykge1xuICAgICAgICAgIC8vIFdlIGZvdW5kIGEgdGFnLCBub3cgZmluZCBpdHMga2luZFxuICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMF0uY29udGVudCA9PT0gJzwvJykge1xuICAgICAgICAgICAgLy8gQ2xvc2luZyB0YWdcbiAgICAgICAgICAgIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSkpIHtcbiAgICAgICAgICAgICAgLy8gUG9wIG1hdGNoaW5nIG9wZW5pbmcgdGFnXG4gICAgICAgICAgICAgIG9wZW5lZFRhZ3MucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50W3Rva2VuLmNvbnRlbnQubGVuZ3RoIC0gMV0uY29udGVudCA9PT0gJy8+JykgOyBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gT3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgb3BlbmVkVGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuICAgICAgICAgICAgICAgIG9wZW5lZEJyYWNlczogMFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ3snKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGVudGVyZWQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ30nKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90VGFnTm9yQnJhY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub3RUYWdOb3JCcmFjZSB8fCB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMCkge1xuICAgICAgICAgIC8vIEhlcmUgd2UgYXJlIGluc2lkZSBhIHRhZywgYW5kIG5vdCBpbnNpZGUgYSBKU1ggY29udGV4dC5cbiAgICAgICAgICAvLyBUaGF0J3MgcGxhaW4gdGV4dDogZHJvcCBhbnkgdG9rZW5zIG1hdGNoZWQuXG4gICAgICAgICAgdmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKTsgLy8gQW5kIG1lcmdlIHRleHQgd2l0aCBhZGphY2VudCB0ZXh0XG5cbiAgICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggLSAxICYmICh0eXBlb2YgdG9rZW5zW2kgKyAxXSA9PT0gJ3N0cmluZycgfHwgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpKSB7XG4gICAgICAgICAgICBwbGFpblRleHQgKz0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaSA+IDAgJiYgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fCB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JykpIHtcbiAgICAgICAgICAgIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2Vuc1tpIC0gMV0pICsgcGxhaW5UZXh0O1xuICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9rZW5zW2ldID0gbmV3IFByaXNtLlRva2VuKCdwbGFpbi10ZXh0JywgcGxhaW5UZXh0LCBudWxsLCBwbGFpblRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09ICdqc3gnICYmIGVudi5sYW5ndWFnZSAhPT0gJ3RzeCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xuICB9KTtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzLWV4dHJhc1wiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2Z1bmN0aW9uLXZhcmlhYmxlJywge1xuICAgICdtZXRob2QtdmFyaWFibGUnOiB7XG4gICAgICBwYXR0ZXJuOiBSZWdFeHAoJyhcXFxcLlxcXFxzKiknICsgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2Z1bmN0aW9uLXZhcmlhYmxlJ10ucGF0dGVybi5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiBbJ2Z1bmN0aW9uLXZhcmlhYmxlJywgJ21ldGhvZCcsICdmdW5jdGlvbicsICdwcm9wZXJ0eS1hY2Nlc3MnXVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnZnVuY3Rpb24nLCB7XG4gICAgJ21ldGhvZCc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKFxcXFwuXFxcXHMqKScgKyBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnZnVuY3Rpb24nXS5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiBbJ2Z1bmN0aW9uJywgJ3Byb3BlcnR5LWFjY2VzcyddXG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdjb25zdGFudCcsIHtcbiAgICAna25vd24tY2xhc3MtbmFtZSc6IFt7XG4gICAgICAvLyBzdGFuZGFyZCBidWlsdC1pbnNcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzXG4gICAgICBwYXR0ZXJuOiAvXFxiKD86KD86RmxvYXQoPzozMnw2NCl8KD86SW50fFVpbnQpKD86OHwxNnwzMil8VWludDhDbGFtcGVkKT9BcnJheXxBcnJheUJ1ZmZlcnxCaWdJbnR8Qm9vbGVhbnxEYXRhVmlld3xEYXRlfEVycm9yfEZ1bmN0aW9ufEludGx8SlNPTnwoPzpXZWFrKT8oPzpNYXB8U2V0KXxNYXRofE51bWJlcnxPYmplY3R8UHJvbWlzZXxQcm94eXxSZWZsZWN0fFJlZ0V4cHxTdHJpbmd8U3ltYm9sfFdlYkFzc2VtYmx5KVxcYi8sXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfSwge1xuICAgICAgLy8gZXJyb3JzXG4gICAgICBwYXR0ZXJuOiAvXFxiKD86W0EtWl1cXHcqKUVycm9yXFxiLyxcbiAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZSdcbiAgICB9XVxuICB9KTtcbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSBgPElEPmAgcGxhY2Vob2xkZXIgaW4gdGhlIGdpdmVuIHBhdHRlcm4gd2l0aCBhIHBhdHRlcm4gZm9yIGdlbmVyYWwgSlMgaWRlbnRpZmllcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFnc11cbiAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICovXG5cbiAgZnVuY3Rpb24gd2l0aElkKHNvdXJjZSwgZmxhZ3MpIHtcbiAgICByZXR1cm4gUmVnRXhwKHNvdXJjZS5yZXBsYWNlKC88SUQ+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAvKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKi8uc291cmNlO1xuICAgIH0pLCBmbGFncyk7XG4gIH1cblxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG4gICAgJ2ltcG9ydHMnOiB7XG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWltcG9ydHNcbiAgICAgIHBhdHRlcm46IHdpdGhJZCgvKFxcYmltcG9ydFxcYlxccyopKD86PElEPig/OlxccyosXFxzKig/OlxcKlxccyphc1xccys8SUQ+fFxce1tee31dKlxcfSkpP3xcXCpcXHMqYXNcXHMrPElEPnxcXHtbXnt9XSpcXH0pKD89XFxzKlxcYmZyb21cXGIpLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICB9LFxuICAgICdleHBvcnRzJzoge1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1leHBvcnRzXG4gICAgICBwYXR0ZXJuOiB3aXRoSWQoLyhcXGJleHBvcnRcXGJcXHMqKSg/OlxcKig/Olxccyphc1xccys8SUQ+KT8oPz1cXHMqXFxiZnJvbVxcYil8XFx7W157fV0qXFx9KS8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2tleXdvcmQnXS51bnNoaWZ0KHtcbiAgICBwYXR0ZXJuOiAvXFxiKD86YXN8ZGVmYXVsdHxleHBvcnR8ZnJvbXxpbXBvcnQpXFxiLyxcbiAgICBhbGlhczogJ21vZHVsZSdcbiAgfSwge1xuICAgIHBhdHRlcm46IC9cXGIoPzphd2FpdHxicmVha3xjYXRjaHxjb250aW51ZXxkb3xlbHNlfGZpbmFsbHl8Zm9yfGlmfHJldHVybnxzd2l0Y2h8dGhyb3d8dHJ5fHdoaWxlfHlpZWxkKVxcYi8sXG4gICAgYWxpYXM6ICdjb250cm9sLWZsb3cnXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgYWxpYXM6IFsnbnVsbCcsICduaWwnXVxuICB9LCB7XG4gICAgcGF0dGVybjogL1xcYnVuZGVmaW5lZFxcYi8sXG4gICAgYWxpYXM6ICduaWwnXG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ29wZXJhdG9yJywge1xuICAgICdzcHJlYWQnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwuezN9LyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICAnYXJyb3cnOiB7XG4gICAgICBwYXR0ZXJuOiAvPT4vLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3B1bmN0dWF0aW9uJywge1xuICAgICdwcm9wZXJ0eS1hY2Nlc3MnOiB7XG4gICAgICBwYXR0ZXJuOiB3aXRoSWQoLyhcXC5cXHMqKSM/PElEPi8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdtYXliZS1jbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtBLVpdWyRcXHdcXHhBMC1cXHVGRkZGXSsvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ2RvbSc6IHtcbiAgICAgIC8vIHRoaXMgY29udGFpbnMgb25seSBhIGZldyBjb21tb25seSB1c2VkIERPTSB2YXJpYWJsZXNcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpkb2N1bWVudHwoPzpsb2NhbHxzZXNzaW9uKVN0b3JhZ2V8bG9jYXRpb258bmF2aWdhdG9yfHBlcmZvcm1hbmNlfHdpbmRvdylcXGIvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgICdjb25zb2xlJzoge1xuICAgICAgcGF0dGVybjogL1xcYmNvbnNvbGUoPz1cXHMqXFwuKS8sXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfVxuICB9KTsgLy8gYWRkICdtYXliZS1jbGFzcy1uYW1lJyB0byB0b2tlbnMgd2hpY2ggbWlnaHQgYmUgYSBjbGFzcyBuYW1lXG5cbiAgdmFyIG1heWJlQ2xhc3NOYW1lVG9rZW5zID0gWydmdW5jdGlvbicsICdmdW5jdGlvbi12YXJpYWJsZScsICdtZXRob2QnLCAnbWV0aG9kLXZhcmlhYmxlJywgJ3Byb3BlcnR5LWFjY2VzcyddO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5YmVDbGFzc05hbWVUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSBtYXliZUNsYXNzTmFtZVRva2Vuc1tpXTtcbiAgICB2YXIgdmFsdWUgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFt0b2tlbl07IC8vIGNvbnZlcnQgcmVnZXggdG8gb2JqZWN0XG5cbiAgICBpZiAoUHJpc20udXRpbC50eXBlKHZhbHVlKSA9PT0gJ1JlZ0V4cCcpIHtcbiAgICAgIHZhbHVlID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbdG9rZW5dID0ge1xuICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9IC8vIGtlZXAgaW4gbWluZCB0aGF0IHdlIGRvbid0IHN1cHBvcnQgYXJyYXlzXG5cblxuICAgIHZhciBpbnNpZGUgPSB2YWx1ZS5pbnNpZGUgfHwge307XG4gICAgdmFsdWUuaW5zaWRlID0gaW5zaWRlO1xuICAgIGluc2lkZVsnbWF5YmUtY2xhc3MtbmFtZSddID0gL15bQS1aXVtcXHNcXFNdKi87XG4gIH1cbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzLXRlbXBsYXRlc1wiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICB2YXIgdGVtcGxhdGVTdHJpbmcgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsndGVtcGxhdGUtc3RyaW5nJ107IC8vIHNlZSB0aGUgcGF0dGVybiBpbiBwcmlzbS1qYXZhc2NyaXB0LmpzXG5cbiAgdmFyIHRlbXBsYXRlTGl0ZXJhbFBhdHRlcm4gPSB0ZW1wbGF0ZVN0cmluZy5wYXR0ZXJuLnNvdXJjZTtcbiAgdmFyIGludGVycG9sYXRpb25PYmplY3QgPSB0ZW1wbGF0ZVN0cmluZy5pbnNpZGVbJ2ludGVycG9sYXRpb24nXTtcbiAgdmFyIGludGVycG9sYXRpb25QdW5jdHVhdGlvbk9iamVjdCA9IGludGVycG9sYXRpb25PYmplY3QuaW5zaWRlWydpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJ107XG4gIHZhciBpbnRlcnBvbGF0aW9uUGF0dGVybiA9IGludGVycG9sYXRpb25PYmplY3QucGF0dGVybi5zb3VyY2U7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHBhdHRlcm4gdG8gbWF0Y2ggYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aCBhIHNwZWNpYWwgdGFnLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIGdyYW1tYXIgd2l0aCB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQgb2YgdGhlIGVtYmVkZGVkIGxhbmd1YWdlLiBFLmcuIGBtYXJrZG93bmAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIHJlZ2V4IHBhdHRlcm4gdG8gbWF0Y2ggdGhlIHRhZy5cbiAgICogQHJldHVybnMge29iamVjdCB8IHVuZGVmaW5lZH1cbiAgICogQGV4YW1wbGVcbiAgICogY3JlYXRlVGVtcGxhdGUoJ2NzcycsIC9cXGJjc3MvLnNvdXJjZSk7XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKGxhbmd1YWdlLCB0YWcpIHtcbiAgICBpZiAoIVByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV0pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKCg/OicgKyB0YWcgKyAnKVxcXFxzKiknICsgdGVtcGxhdGVMaXRlcmFsUGF0dGVybiksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICAnZW1iZWRkZWQtY29kZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgICBhbGlhczogbGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsndGVtcGxhdGUtc3RyaW5nJ10gPSBbLy8gc3R5bGVkLWpzeDpcbiAgLy8gICBjc3NgYSB7IGNvbG9yOiAjMjVGOyB9YFxuICAvLyBzdHlsZWQtY29tcG9uZW50czpcbiAgLy8gICBzdHlsZWQuaDFgY29sb3I6IHJlZDtgXG4gIGNyZWF0ZVRlbXBsYXRlKCdjc3MnLCAvXFxiKD86c3R5bGVkKD86XFwoW14pXSpcXCkpPyg/OlxccypcXC5cXHMqXFx3Kyg/OlxcKFteKV0qXFwpKSopKnxjc3MoPzpcXHMqXFwuXFxzKig/Omdsb2JhbHxyZXNvbHZlKSk/fGNyZWF0ZUdsb2JhbFN0eWxlfGtleWZyYW1lcykvLnNvdXJjZSksIC8vIGh0bWxgPHA+PC9wPmBcbiAgLy8gZGl2LmlubmVySFRNTCA9IGA8cD48L3A+YFxuICBjcmVhdGVUZW1wbGF0ZSgnaHRtbCcsIC9cXGJodG1sfFxcLlxccyooPzppbm5lcnxvdXRlcilIVE1MXFxzKlxcKz89Ly5zb3VyY2UpLCAvLyBzdmdgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTU1LjM3IC4uLlwiLz5gXG4gIGNyZWF0ZVRlbXBsYXRlKCdzdmcnLCAvXFxic3ZnLy5zb3VyY2UpLCAvLyBtZGAjIGgxYCwgbWFya2Rvd25gIyMgaDJgXG4gIGNyZWF0ZVRlbXBsYXRlKCdtYXJrZG93bicsIC9cXGIoPzptYXJrZG93bnxtZCkvLnNvdXJjZSksIC8vIGdxbGAuLi5gLCBncmFwaHFsYC4uLmAsIGdyYXBocWwuZXhwZXJpbWVudGFsYC4uLmBcbiAgY3JlYXRlVGVtcGxhdGUoJ2dyYXBocWwnLCAvXFxiKD86Z3FsfGdyYXBocWwoPzpcXHMqXFwuXFxzKmV4cGVyaW1lbnRhbCk/KS8uc291cmNlKSwgLy8gc3FsYC4uLmBcbiAgY3JlYXRlVGVtcGxhdGUoJ3NxbCcsIC9cXGJzcWwvLnNvdXJjZSksIC8vIHZhbmlsbGEgdGVtcGxhdGUgc3RyaW5nXG4gIHRlbXBsYXRlU3RyaW5nXS5maWx0ZXIoQm9vbGVhbik7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3BlY2lmaWMgcGxhY2Vob2xkZXIgbGl0ZXJhbCBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIoY291bnRlciwgbGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gJ19fXycgKyBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpICsgJ18nICsgY291bnRlciArICdfX18nO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0b2tlbnMgb2YgYFByaXNtLnRva2VuaXplYCBidXQgYWxzbyBydW5zIHRoZSBgYmVmb3JlLXRva2VuaXplYCBhbmQgYGFmdGVyLXRva2VuaXplYCBob29rcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICogQHBhcmFtIHthbnl9IGdyYW1tYXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nfFRva2VuKVtdfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRva2VuaXplV2l0aEhvb2tzKGNvZGUsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG4gICAgdmFyIGVudiA9IHtcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBncmFtbWFyOiBncmFtbWFyLFxuICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlXG4gICAgfTtcbiAgICBQcmlzbS5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG4gICAgZW52LnRva2VucyA9IFByaXNtLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG4gICAgUHJpc20uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG4gICAgcmV0dXJuIGVudi50b2tlbnM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRva2VuIG9mIHRoZSBnaXZlbiBKYXZhU2NyaXB0IGludGVycG9sYXRpb24gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb24gVGhlIGNvZGUgb2YgdGhlIGV4cHJlc3Npb24uIEUuZy4gYFwiJHs0Mn1cImBcbiAgICogQHJldHVybnMge1Rva2VufVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRva2VuaXplSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHZhciB0ZW1wR3JhbW1hciA9IHt9O1xuICAgIHRlbXBHcmFtbWFyWydpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJ10gPSBpbnRlcnBvbGF0aW9uUHVuY3R1YXRpb25PYmplY3Q7XG4gICAgLyoqIEB0eXBlIHtBcnJheX0gKi9cblxuICAgIHZhciB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShleHByZXNzaW9uLCB0ZW1wR3JhbW1hcik7XG5cbiAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMykge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdG9rZW4gYXJyYXkgd2lsbCBsb29rIGxpa2UgdGhpc1xuICAgICAgICogW1xuICAgICAgICogICAgIFtcImludGVycG9sYXRpb24tcHVuY3R1YXRpb25cIiwgXCIke1wiXVxuICAgICAgICogICAgIFwiLi4uXCIgLy8gSmF2YVNjcmlwdCBleHByZXNzaW9uIG9mIHRoZSBpbnRlcnBvbGF0aW9uXG4gICAgICAgKiAgICAgW1wiaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvblwiLCBcIn1cIl1cbiAgICAgICAqIF1cbiAgICAgICAqL1xuICAgICAgdmFyIGFyZ3MgPSBbMSwgMV07XG4gICAgICBhcmdzLnB1c2guYXBwbHkoYXJncywgdG9rZW5pemVXaXRoSG9va3ModG9rZW5zWzFdLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCwgJ2phdmFzY3JpcHQnKSk7XG4gICAgICB0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcmlzbS5Ub2tlbignaW50ZXJwb2xhdGlvbicsIHRva2VucywgaW50ZXJwb2xhdGlvbk9iamVjdC5hbGlhcywgZXhwcmVzc2lvbik7XG4gIH1cbiAgLyoqXG4gICAqIFRva2VuaXplcyB0aGUgZ2l2ZW4gY29kZSB3aXRoIHN1cHBvcnQgZm9yIEphdmFTY3JpcHQgaW50ZXJwb2xhdGlvbiBleHByZXNzaW9ucyBtaXhlZCBpbi5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBoYXMgMyBwaGFzZXM6XG4gICAqXG4gICAqIDEuIFJlcGxhY2UgYWxsIEphdmFTY3JpcHQgaW50ZXJwb2xhdGlvbiBleHByZXNzaW9uIHdpdGggYSBwbGFjZWhvbGRlci5cbiAgICogICAgVGhlIHBsYWNlaG9sZGVyIHdpbGwgaGF2ZSB0aGUgc3ludGF4IG9mIGEgaWRlbnRpZnkgb2YgdGhlIHRhcmdldCBsYW5ndWFnZS5cbiAgICogMi4gVG9rZW5pemUgdGhlIGNvZGUgd2l0aCBwbGFjZWhvbGRlcnMuXG4gICAqIDMuIFRva2VuaXplIHRoZSBpbnRlcnBvbGF0aW9uIGV4cHJlc3Npb25zIGFuZCByZS1pbnNlcnQgdGhlbSBpbnRvIHRoZSB0b2tlbml6ZSBjb2RlLlxuICAgKiAgICBUaGUgaW5zZXJ0aW9uIG9ubHkgd29ya3MgaWYgYSBwbGFjZWhvbGRlciBoYXNuJ3QgYmVlbiBcInJpcHBlZCBhcGFydFwiIG1lYW5pbmcgdGhhdCB0aGUgcGxhY2Vob2xkZXIgaGFzIGJlZW5cbiAgICogICAgdG9rZW5pemVkIGFzIHR3byB0b2tlbnMgYnkgdGhlIGdyYW1tYXIgb2YgdGhlIGVtYmVkZGVkIGxhbmd1YWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZ3JhbW1hclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAgICogQHJldHVybnMge1Rva2VufVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHRva2VuaXplRW1iZWRkZWQoY29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcbiAgICAvLyAxLiBGaXJzdCBmaWx0ZXIgb3V0IGFsbCBpbnRlcnBvbGF0aW9uc1xuICAgIC8vIGJlY2F1c2UgdGhleSBtaWdodCBiZSBlc2NhcGVkLCB3ZSBuZWVkIGEgbG9va2JlaGluZCwgc28gd2UgdXNlIFByaXNtXG5cbiAgICAvKiogQHR5cGUgeyhUb2tlbnxzdHJpbmcpW119ICovXG4gICAgdmFyIF90b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCB7XG4gICAgICAnaW50ZXJwb2xhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKGludGVycG9sYXRpb25QYXR0ZXJuKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIH0pOyAvLyByZXBsYWNlIGFsbCBpbnRlcnBvbGF0aW9ucyB3aXRoIGEgcGxhY2Vob2xkZXIgd2hpY2ggaXMgbm90IGluIHRoZSBjb2RlIGFscmVhZHlcblxuXG4gICAgdmFyIHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XG4gICAgLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSAqL1xuXG4gICAgdmFyIHBsYWNlaG9sZGVyTWFwID0ge307XG5cbiAgICB2YXIgZW1iZWRkZWRDb2RlID0gX3Rva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW50ZXJwb2xhdGlvbkV4cHJlc3Npb24gPSB0b2tlbi5jb250ZW50O1xuICAgICAgICB2YXIgcGxhY2Vob2xkZXI7XG5cbiAgICAgICAgd2hpbGUgKGNvZGUuaW5kZXhPZihwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyQ291bnRlcisrLCBsYW5ndWFnZSkpICE9PSAtMSkge1xuICAgICAgICAgIC8qIG5vb3AgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlaG9sZGVyTWFwW3BsYWNlaG9sZGVyXSA9IGludGVycG9sYXRpb25FeHByZXNzaW9uO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7IC8vIDIuIFRva2VuaXplIHRoZSBlbWJlZGRlZCBjb2RlXG5cblxuICAgIHZhciBlbWJlZGRlZFRva2VucyA9IHRva2VuaXplV2l0aEhvb2tzKGVtYmVkZGVkQ29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpOyAvLyAzLiBSZS1pbnNlcnQgdGhlIGludGVycG9sYXRpb25cblxuICAgIHZhciBwbGFjZWhvbGRlcnMgPSBPYmplY3Qua2V5cyhwbGFjZWhvbGRlck1hcCk7XG4gICAgcGxhY2Vob2xkZXJDb3VudGVyID0gMDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KFRva2VufHN0cmluZylbXX0gdG9rZW5zXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG5cbiAgICBmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyQ291bnRlciA+PSBwbGFjZWhvbGRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1twbGFjZWhvbGRlckNvdW50ZXJdO1xuICAgICAgICAgIHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDpcbiAgICAgICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgICAgICB0b2tlbi5jb250ZW50O1xuICAgICAgICAgIHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICArK3BsYWNlaG9sZGVyQ291bnRlcjtcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICB2YXIgbWlkZGxlID0gdG9rZW5pemVJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihwbGFjZWhvbGRlck1hcFtwbGFjZWhvbGRlcl0pO1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gW107XG5cbiAgICAgICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaChiZWZvcmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoKG1pZGRsZSk7XG5cbiAgICAgICAgICAgIGlmIChhZnRlcikge1xuICAgICAgICAgICAgICB2YXIgYWZ0ZXJUb2tlbnMgPSBbYWZ0ZXJdO1xuICAgICAgICAgICAgICB3YWxrVG9rZW5zKGFmdGVyVG9rZW5zKTtcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgYWZ0ZXJUb2tlbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlLmFwcGx5KHRva2VucywgW2ksIDFdLmNvbmNhdChyZXBsYWNlbWVudCkpO1xuICAgICAgICAgICAgICBpICs9IHJlcGxhY2VtZW50Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uY29udGVudDtcblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICB3YWxrVG9rZW5zKGNvbnRlbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YWxrVG9rZW5zKFtjb250ZW50XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2Fsa1Rva2VucyhlbWJlZGRlZFRva2Vucyk7XG4gICAgcmV0dXJuIG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgZW1iZWRkZWRUb2tlbnMsICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsIGNvZGUpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgbGFuZ3VhZ2VzIGZvciB3aGljaCBKUyB0ZW1wbGF0aW5nIHdpbGwgaGFuZGxlIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscy5cbiAgICpcbiAgICogSlMgdGVtcGxhdGluZyBpc24ndCBhY3RpdmUgZm9yIG9ubHkgSmF2YVNjcmlwdCBidXQgYWxzbyByZWxhdGVkIGxhbmd1YWdlcyBsaWtlIFR5cGVTY3JpcHQsIEpTWCwgYW5kIFRTWC5cbiAgICovXG5cblxuICB2YXIgc3VwcG9ydGVkTGFuZ3VhZ2VzID0ge1xuICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAnanMnOiB0cnVlLFxuICAgICd0eXBlc2NyaXB0JzogdHJ1ZSxcbiAgICAndHMnOiB0cnVlLFxuICAgICdqc3gnOiB0cnVlLFxuICAgICd0c3gnOiB0cnVlXG4gIH07XG4gIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgaWYgKCEoZW52Lmxhbmd1YWdlIGluIHN1cHBvcnRlZExhbmd1YWdlcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHRva2VuaXplcyBhbGwgdGVtcGxhdGUgc3RyaW5ncyB3aXRoIGFuIGVtYmVkZGVkIGxhbmd1YWdlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KFRva2VuIHwgc3RyaW5nKVtdfSB0b2tlbnNcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gZmluZFRlbXBsYXRlU3RyaW5ncyh0b2tlbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250ZW50ID0gdG9rZW4uY29udGVudDtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmaW5kVGVtcGxhdGVTdHJpbmdzKFtjb250ZW50XSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RlbXBsYXRlLXN0cmluZycpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBIEphdmFTY3JpcHQgdGVtcGxhdGUtc3RyaW5nIHRva2VuIHdpbGwgbG9vayBsaWtlIHRoaXM6XG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBbXCJ0ZW1wbGF0ZS1zdHJpbmdcIiwgW1xuICAgICAgICAgICAqICAgICBbXCJ0ZW1wbGF0ZS1wdW5jdHVhdGlvblwiLCBcImBcIl0sXG4gICAgICAgICAgICogICAgIChcbiAgICAgICAgICAgKiAgICAgICAgIEFuIGFycmF5IG9mIFwic3RyaW5nXCIgYW5kIFwiaW50ZXJwb2xhdGlvblwiIHRva2Vucy4gVGhpcyBpcyB0aGUgc2ltcGxlIHN0cmluZyBjYXNlLlxuICAgICAgICAgICAqICAgICAgICAgb3JcbiAgICAgICAgICAgKiAgICAgICAgIFtcImVtYmVkZGVkLWNvZGVcIiwgXCIuLi5cIl0gVGhpcyBpcyB0aGUgdG9rZW4gY29udGFpbmluZyB0aGUgZW1iZWRkZWQgY29kZS5cbiAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBhbHNvIGhhcyBhbiBhbGlhcyB3aGljaCBpcyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIGVtYmVkZGVkIGNvZGUuXG4gICAgICAgICAgICogICAgICksXG4gICAgICAgICAgICogICAgIFtcInRlbXBsYXRlLXB1bmN0dWF0aW9uXCIsIFwiYFwiXVxuICAgICAgICAgICAqIF1dXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGVtYmVkZGVkID0gY29udGVudFsxXTtcblxuICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZW1iZWRkZWQgIT09ICdzdHJpbmcnICYmIGVtYmVkZGVkLnR5cGUgPT09ICdlbWJlZGRlZC1jb2RlJykge1xuICAgICAgICAgICAgLy8gZ2V0IHN0cmluZyBjb250ZW50XG4gICAgICAgICAgICB2YXIgY29kZSA9IHN0cmluZ0NvbnRlbnQoZW1iZWRkZWQpO1xuICAgICAgICAgICAgdmFyIGFsaWFzID0gZW1iZWRkZWQuYWxpYXM7XG4gICAgICAgICAgICB2YXIgbGFuZ3VhZ2UgPSBBcnJheS5pc0FycmF5KGFsaWFzKSA/IGFsaWFzWzBdIDogYWxpYXM7XG4gICAgICAgICAgICB2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cbiAgICAgICAgICAgIGlmICghZ3JhbW1hcikge1xuICAgICAgICAgICAgICAvLyB0aGUgZW1iZWRkZWQgbGFuZ3VhZ2UgaXNuJ3QgcmVnaXN0ZXJlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnRbMV0gPSB0b2tlbml6ZUVtYmVkZGVkKGNvZGUsIGdyYW1tYXIsIGxhbmd1YWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmluZFRlbXBsYXRlU3RyaW5ncyhjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRUZW1wbGF0ZVN0cmluZ3MoZW52LnRva2Vucyk7XG4gIH0pO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RyaW5nIGNvbnRlbnQgb2YgYSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCAoc3RyaW5nIHwgVG9rZW4pW119IHZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHN0cmluZ0NvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoc3RyaW5nQ29udGVudCkuam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHJpbmdDb250ZW50KHZhbHVlLmNvbnRlbnQpO1xuICAgIH1cbiAgfVxufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29mZmVlc2NyaXB0XCIgKi9cblxuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIC8vIElnbm9yZSBjb21tZW50cyBzdGFydGluZyB3aXRoIHsgdG8gcHJpdmlsZWdlIHN0cmluZyBpbnRlcnBvbGF0aW9uIGhpZ2hsaWdodGluZ1xuICB2YXIgY29tbWVudCA9IC8jKD8hXFx7KS4rLztcbiAgdmFyIGludGVycG9sYXRpb24gPSB7XG4gICAgcGF0dGVybjogLyNcXHtbXn1dK1xcfS8sXG4gICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNvZmZlZXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgJ2NvbW1lbnQnOiBjb21tZW50LFxuICAgICdzdHJpbmcnOiBbLy8gU3RyaW5ncyBhcmUgbXVsdGlsaW5lXG4gICAge1xuICAgICAgcGF0dGVybjogLycoPzpcXFxcW1xcc1xcU118W15cXFxcJ10pKicvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSwge1xuICAgICAgLy8gU3RyaW5ncyBhcmUgbXVsdGlsaW5lXG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2ludGVycG9sYXRpb24nOiBpbnRlcnBvbGF0aW9uXG4gICAgICB9XG4gICAgfV0sXG4gICAgJ2tleXdvcmQnOiAvXFxiKD86YW5kfGJyZWFrfGJ5fGNhdGNofGNsYXNzfGNvbnRpbnVlfGRlYnVnZ2VyfGRlbGV0ZXxkb3xlYWNofGVsc2V8ZXh0ZW5kfGV4dGVuZHN8ZmFsc2V8ZmluYWxseXxmb3J8aWZ8aW58aW5zdGFuY2VvZnxpc3xpc250fGxldHxsb29wfG5hbWVzcGFjZXxuZXd8bm98bm90fG51bGx8b2Z8b2ZmfG9ufG9yfG93bnxyZXR1cm58c3VwZXJ8c3dpdGNofHRoZW58dGhpc3x0aHJvd3x0cnVlfHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHVubGVzc3x1bnRpbHx3aGVufHdoaWxlfHdpbmRvd3x3aXRofHllc3x5aWVsZClcXGIvLFxuICAgICdjbGFzcy1tZW1iZXInOiB7XG4gICAgICBwYXR0ZXJuOiAvQCg/IVxcZClcXHcrLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY29mZmVlc2NyaXB0JywgJ2NvbW1lbnQnLCB7XG4gICAgJ211bHRpbGluZS1jb21tZW50Jzoge1xuICAgICAgcGF0dGVybjogLyMjI1tcXHNcXFNdKz8jIyMvLFxuICAgICAgYWxpYXM6ICdjb21tZW50J1xuICAgIH0sXG4gICAgLy8gQmxvY2sgcmVnZXhwIGNhbiBjb250YWluIGNvbW1lbnRzIGFuZCBpbnRlcnBvbGF0aW9uXG4gICAgJ2Jsb2NrLXJlZ2V4Jzoge1xuICAgICAgcGF0dGVybjogL1xcL3szfVtcXHNcXFNdKj9cXC97M30vLFxuICAgICAgYWxpYXM6ICdyZWdleCcsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2NvbW1lbnQnOiBjb21tZW50LFxuICAgICAgICAnaW50ZXJwb2xhdGlvbic6IGludGVycG9sYXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjb2ZmZWVzY3JpcHQnLCAnc3RyaW5nJywge1xuICAgICdpbmxpbmUtamF2YXNjcmlwdCc6IHtcbiAgICAgIHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFteXFxcXGBdKSpgLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZGVsaW1pdGVyJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eYHxgJC8sXG4gICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgJ3NjcmlwdCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgICBhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnLFxuICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQmxvY2sgc3RyaW5nc1xuICAgICdtdWx0aWxpbmUtc3RyaW5nJzogW3tcbiAgICAgIHBhdHRlcm46IC8nJydbXFxzXFxTXSo/JycnLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgIH0sIHtcbiAgICAgIHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uXG4gICAgICB9XG4gICAgfV1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdrZXl3b3JkJywge1xuICAgIC8vIE9iamVjdCBwcm9wZXJ0eVxuICAgICdwcm9wZXJ0eSc6IC8oPyFcXGQpXFx3Kyg/PVxccyo6KD8hOikpL1xuICB9KTtcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5jb2ZmZWVzY3JpcHRbJ3RlbXBsYXRlLXN0cmluZyddO1xuICBQcmlzbS5sYW5ndWFnZXMuY29mZmVlID0gUHJpc20ubGFuZ3VhZ2VzLmNvZmZlZXNjcmlwdDtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRpZmZcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmRpZmYgPSB7XG4gICAgJ2Nvb3JkJzogWy8vIE1hdGNoIGFsbCBraW5kcyBvZiBjb29yZCBsaW5lcyAocHJlZml4ZWQgYnkgXCIrKytcIiwgXCItLS1cIiBvciBcIioqKlwiKS5cbiAgICAvXig/OlxcKnszfXwtezN9fFxcK3szfSkuKiQvbSwgLy8gTWF0Y2ggXCJAQCAuLi4gQEBcIiBjb29yZCBsaW5lcyBpbiB1bmlmaWVkIGRpZmYuXG4gICAgL15AQC4qQEAkL20sIC8vIE1hdGNoIGNvb3JkIGxpbmVzIGluIG5vcm1hbCBkaWZmIChzdGFydHMgd2l0aCBhIG51bWJlcikuXG4gICAgL15cXGQuKiQvbV0gLy8gZGVsZXRlZCwgaW5zZXJ0ZWQsIHVuY2hhbmdlZCwgZGlmZlxuXG4gIH07XG4gIC8qKlxuICAgKiBBIG1hcCBmcm9tIHRoZSBuYW1lIG9mIGEgYmxvY2sgdG8gaXRzIGxpbmUgcHJlZml4LlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn1cbiAgICovXG5cbiAgdmFyIFBSRUZJWEVTID0ge1xuICAgICdkZWxldGVkLXNpZ24nOiAnLScsXG4gICAgJ2RlbGV0ZWQtYXJyb3cnOiAnPCcsXG4gICAgJ2luc2VydGVkLXNpZ24nOiAnKycsXG4gICAgJ2luc2VydGVkLWFycm93JzogJz4nLFxuICAgICd1bmNoYW5nZWQnOiAnICcsXG4gICAgJ2RpZmYnOiAnISdcbiAgfTsgLy8gYWRkIGEgdG9rZW4gZm9yIGVhY2ggcHJlZml4XG5cbiAgT2JqZWN0LmtleXMoUFJFRklYRVMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcHJlZml4ID0gUFJFRklYRVNbbmFtZV07XG4gICAgdmFyIGFsaWFzID0gW107XG5cbiAgICBpZiAoIS9eXFx3KyQvLnRlc3QobmFtZSkpIHtcbiAgICAgIC8vIFwiZGVsZXRlZC1zaWduXCIgLT4gXCJkZWxldGVkXCJcbiAgICAgIGFsaWFzLnB1c2goL1xcdysvLmV4ZWMobmFtZSlbMF0pO1xuICAgIH1cblxuICAgIGlmIChuYW1lID09PSAnZGlmZicpIHtcbiAgICAgIGFsaWFzLnB1c2goJ2JvbGQnKTtcbiAgICB9XG5cbiAgICBQcmlzbS5sYW5ndWFnZXMuZGlmZltuYW1lXSA9IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXig/OlsnICsgcHJlZml4ICsgJ10uKig/Olxcclxcbj98XFxufCg/IVtcXFxcc1xcXFxTXSkpKSsnLCAnbScpLFxuICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdsaW5lJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oLikoPz1bXFxzXFxTXSkuKig/Olxcclxcbj98XFxuKT8vLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ3ByZWZpeCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10vLFxuICAgICAgICAgIGFsaWFzOiAvXFx3Ky8uZXhlYyhuYW1lKVswXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7IC8vIG1ha2UgcHJlZml4ZXMgYXZhaWxhYmxlIHRvIERpZmYgcGx1Z2luXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5kaWZmLCAnUFJFRklYRVMnLCB7XG4gICAgdmFsdWU6IFBSRUZJWEVTXG4gIH0pO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2l0XCIgKi9cblxuXG5wcmlzbS5sYW5ndWFnZXMuZ2l0ID0ge1xuICAvKlxuICAgKiBBIHNpbXBsZSBvbmUgbGluZSBjb21tZW50IGxpa2UgaW4gYSBnaXQgc3RhdHVzIGNvbW1hbmRcbiAgICogRm9yIGluc3RhbmNlOlxuICAgKiAkIGdpdCBzdGF0dXNcbiAgICogIyBPbiBicmFuY2ggaW5maW5pdGUtc2Nyb2xsXG4gICAqICMgWW91ciBicmFuY2ggYW5kICdvcmlnaW4vc2hhcmVkQnJhbmNoZXMvZnJvbnRlbmRUZWFtL2luZmluaXRlLXNjcm9sbCcgaGF2ZSBkaXZlcmdlZCxcbiAgICogIyBhbmQgaGF2ZSAxIGFuZCAyIGRpZmZlcmVudCBjb21taXRzIGVhY2gsIHJlc3BlY3RpdmVseS5cbiAgICogbm90aGluZyB0byBjb21taXQgKHdvcmtpbmcgZGlyZWN0b3J5IGNsZWFuKVxuICAgKi9cbiAgJ2NvbW1lbnQnOiAvXiMuKi9tLFxuXG4gIC8qXG4gICAqIFJlZ2V4cCB0byBtYXRjaCB0aGUgY2hhbmdlZCBsaW5lcyBpbiBhIGdpdCBkaWZmIG91dHB1dC4gQ2hlY2sgdGhlIGV4YW1wbGUgYmVsb3cuXG4gICAqL1xuICAnZGVsZXRlZCc6IC9eWy3igJNdLiovbSxcbiAgJ2luc2VydGVkJzogL15cXCsuKi9tLFxuXG4gIC8qXG4gICAqIGEgc3RyaW5nIChkb3VibGUgYW5kIHNpbXBsZSBxdW90ZSlcbiAgICovXG4gICdzdHJpbmcnOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cbiAgLypcbiAgICogYSBnaXQgY29tbWFuZC4gSXQgc3RhcnRzIHdpdGggYSByYW5kb20gcHJvbXB0IGZpbmlzaGluZyBieSBhICQsIHRoZW4gXCJnaXRcIiB0aGVuIHNvbWUgb3RoZXIgcGFyYW1ldGVyc1xuICAgKiBGb3IgaW5zdGFuY2U6XG4gICAqICQgZ2l0IGFkZCBmaWxlLnR4dFxuICAgKi9cbiAgJ2NvbW1hbmQnOiB7XG4gICAgcGF0dGVybjogL14uKlxcJCBnaXQgLiokL20sXG4gICAgaW5zaWRlOiB7XG4gICAgICAvKlxuICAgICAgICogQSBnaXQgY29tbWFuZCBjYW4gY29udGFpbiBhIHBhcmFtZXRlciBzdGFydGluZyBieSBhIHNpbmdsZSBvciBhIGRvdWJsZSBkYXNoIGZvbGxvd2VkIGJ5IGEgc3RyaW5nXG4gICAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICAgKiAkIGdpdCBkaWZmIC0tY2FjaGVkXG4gICAgICAgKiAkIGdpdCBsb2cgLXBcbiAgICAgICAqL1xuICAgICAgJ3BhcmFtZXRlcic6IC9cXHMtLT9cXHcrL1xuICAgIH1cbiAgfSxcblxuICAvKlxuICAgKiBDb29yZGluYXRlcyBkaXNwbGF5ZWQgaW4gYSBnaXQgZGlmZiBjb21tYW5kXG4gICAqIEZvciBpbnN0YW5jZTpcbiAgICogJCBnaXQgZGlmZlxuICAgKiBkaWZmIC0tZ2l0IGZpbGUudHh0IGZpbGUudHh0XG4gICAqIGluZGV4IDYyMTQ5NTMuLjFkNTRhNTIgMTAwNjQ0XG4gICAqIC0tLSBmaWxlLnR4dFxuICAgKiArKysgZmlsZS50eHRcbiAgICogQEAgLTEgKzEsMiBAQFxuICAgKiAtSGVyZSdzIG15IHRldHggZmlsZVxuICAgKiArSGVyZSdzIG15IHRleHQgZmlsZVxuICAgKiArQW5kIHRoaXMgaXMgdGhlIHNlY29uZCBsaW5lXG4gICAqL1xuICAnY29vcmQnOiAvXkBALipAQCQvbSxcblxuICAvKlxuICAgKiBNYXRjaCBhIFwiY29tbWl0IFtTSEExXVwiIGxpbmUgaW4gYSBnaXQgbG9nIG91dHB1dC5cbiAgICogRm9yIGluc3RhbmNlOlxuICAgKiAkIGdpdCBsb2dcbiAgICogY29tbWl0IGExMWExNGVmN2UyNmYyY2E2MmQ0YjM1ZWFjNDU1Y2U2MzZkMGRjMDlcbiAgICogQXV0aG9yOiBsZ2lyYXVkZWxcbiAgICogRGF0ZTogICBNb24gRmViIDE3IDExOjE4OjM0IDIwMTQgKzAxMDBcbiAgICpcbiAgICogICAgIEFkZCBvZiBhIG5ldyBsaW5lXG4gICAqL1xuICAnY29tbWl0LXNoYTEnOiAvXmNvbW1pdCBcXHd7NDB9JC9tXG59O1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ29cIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMuZ28gPSBwcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcIig/OlxcXFwufFteXCJcXFxcXFxyXFxuXSkqXCJ8YFteYF0qYC8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86YnJlYWt8Y2FzZXxjaGFufGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZGVmZXJ8ZWxzZXxmYWxsdGhyb3VnaHxmb3J8ZnVuY3xnbyg/OnRvKT98aWZ8aW1wb3J0fGludGVyZmFjZXxtYXB8cGFja2FnZXxyYW5nZXxyZXR1cm58c2VsZWN0fHN0cnVjdHxzd2l0Y2h8dHlwZXx2YXIpXFxiLyxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86X3xmYWxzZXxpb3RhfG5pbHx0cnVlKVxcYi8sXG4gICdudW1iZXInOiBbLy8gYmluYXJ5IGFuZCBvY3RhbCBpbnRlZ2Vyc1xuICAvXFxiMCg/OmJbMDFfXSt8b1swLTdfXSspaT9cXGIvaSwgLy8gaGV4YWRlY2ltYWwgaW50ZWdlcnMgYW5kIGZsb2F0c1xuICAvXFxiMHgoPzpbYS1mXFxkX10rKD86XFwuW2EtZlxcZF9dKik/fFxcLlthLWZcXGRfXSspKD86cFsrLV0/XFxkKyg/Ol9cXGQrKSopP2k/KD8hXFx3KS9pLCAvLyBkZWNpbWFsIGludGVnZXJzIGFuZCBmbG9hdHNcbiAgLyg/OlxcYlxcZFtcXGRfXSooPzpcXC5bXFxkX10qKT98XFxCXFwuXFxkW1xcZF9dKikoPzplWystXT9bXFxkX10rKT9pPyg/IVxcdykvaV0sXG4gICdvcGVyYXRvcic6IC9bKlxcLyVeIT1dPT98XFwrWz0rXT98LVs9LV0/fFxcfFs9fF0/fCYoPzo9fCZ8XFxePT8pP3w+KD86Pj0/fD0pP3w8KD86PD0/fD18LSk/fDo9fFxcLlxcLlxcLi8sXG4gICdidWlsdGluJzogL1xcYig/OmFwcGVuZHxib29sfGJ5dGV8Y2FwfGNsb3NlfGNvbXBsZXh8Y29tcGxleCg/OjY0fDEyOCl8Y29weXxkZWxldGV8ZXJyb3J8ZmxvYXQoPzozMnw2NCl8dT9pbnQoPzo4fDE2fDMyfDY0KT98aW1hZ3xsZW58bWFrZXxuZXd8cGFuaWN8cHJpbnQoPzpsbik/fHJlYWx8cmVjb3ZlcnxydW5lfHN0cmluZ3x1aW50cHRyKVxcYi9cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZ28nLCAnc3RyaW5nJywge1xuICAnY2hhcic6IHtcbiAgICBwYXR0ZXJuOiAvJyg/OlxcXFwufFteJ1xcXFxcXHJcXG5dKXswLDEwfScvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9XG59KTtcbmRlbGV0ZSBwcmlzbS5sYW5ndWFnZXMuZ29bJ2NsYXNzLW5hbWUnXTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdyYXBocWxcIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMuZ3JhcGhxbCA9IHtcbiAgJ2NvbW1lbnQnOiAvIy4qLyxcbiAgJ2Rlc2NyaXB0aW9uJzoge1xuICAgIHBhdHRlcm46IC8oPzpcIlwiXCIoPzpbXlwiXXwoPyFcIlwiXCIpXCIpKlwiXCJcInxcIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIpKD89XFxzKlthLXpfXSkvaSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgIGluc2lkZToge1xuICAgICAgJ2xhbmd1YWdlLW1hcmtkb3duJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF5cIig/OlwiXCIpPykoPyFcXDEpW1xcc1xcU10rKD89XFwxJCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHByaXNtLmxhbmd1YWdlcy5tYXJrZG93blxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvXCJcIlwiKD86W15cIl18KD8hXCJcIlwiKVwiKSpcIlwiXCJ8XCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ251bWJlcic6IC8oPzpcXEItfFxcYilcXGQrKD86XFwuXFxkKyk/KD86ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgJ3ZhcmlhYmxlJzogL1xcJFthLXpfXVxcdyovaSxcbiAgJ2RpcmVjdGl2ZSc6IHtcbiAgICBwYXR0ZXJuOiAvQFthLXpfXVxcdyovaSxcbiAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICB9LFxuICAnYXR0ci1uYW1lJzoge1xuICAgIHBhdHRlcm46IC9cXGJbYS16X11cXHcqKD89XFxzKig/OlxcKCg/OlteKClcIl18XCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiKSpcXCkpPzopL2ksXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdhdG9tLWlucHV0Jzoge1xuICAgIHBhdHRlcm46IC9cXGJbQS1aXVxcdypJbnB1dFxcYi8sXG4gICAgYWxpYXM6ICdjbGFzcy1uYW1lJ1xuICB9LFxuICAnc2NhbGFyJzogL1xcYig/OkJvb2xlYW58RmxvYXR8SUR8SW50fFN0cmluZylcXGIvLFxuICAnY29uc3RhbnQnOiAvXFxiW0EtWl1bQS1aX1xcZF0qXFxiLyxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGIoPzplbnVtfGltcGxlbWVudHN8aW50ZXJmYWNlfG9ufHNjYWxhcnx0eXBlfHVuaW9uKVxccyt8Jlxccyp8Olxccyp8XFxbKVtBLVpfXVxcdyovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2ZyYWdtZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXFxiZnJhZ21lbnRcXHMrfFxcLnszfVxccyooPyFvblxcYikpW2EtekEtWl9dXFx3Ki8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICB9LFxuICAnZGVmaW5pdGlvbi1tdXRhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKFxcYm11dGF0aW9uXFxzKylbYS16QS1aX11cXHcqLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICdkZWZpbml0aW9uLXF1ZXJ5Jzoge1xuICAgIHBhdHRlcm46IC8oXFxicXVlcnlcXHMrKVthLXpBLVpfXVxcdyovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86ZGlyZWN0aXZlfGVudW18ZXh0ZW5kfGZyYWdtZW50fGltcGxlbWVudHN8aW5wdXR8aW50ZXJmYWNlfG11dGF0aW9ufG9ufHF1ZXJ5fHJlcGVhdGFibGV8c2NhbGFyfHNjaGVtYXxzdWJzY3JpcHRpb258dHlwZXx1bmlvbilcXGIvLFxuICAnb3BlcmF0b3InOiAvWyE9fCZdfFxcLnszfS8sXG4gICdwcm9wZXJ0eS1xdWVyeSc6IC9cXHcrKD89XFxzKlxcKCkvLFxuICAnb2JqZWN0JzogL1xcdysoPz1cXHMqXFx7KS8sXG4gICdwdW5jdHVhdGlvbic6IC9bISgpe31cXFtcXF06PSxdLyxcbiAgJ3Byb3BlcnR5JzogL1xcdysvXG59O1xucHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIGFmdGVyVG9rZW5pemVHcmFwaHFsKGVudikge1xuICBpZiAoZW52Lmxhbmd1YWdlICE9PSAnZ3JhcGhxbCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIGdldCB0aGUgZ3JhcGhxbCB0b2tlbiBzdHJlYW0gdGhhdCB3ZSB3YW50IHRvIGN1c3RvbWl6ZVxuICAgKlxuICAgKiBAdHlwZWRlZiB7SW5zdGFuY2VUeXBlPGltcG9ydChcIi4vcHJpc20tY29yZVwiKVtcIlRva2VuXCJdPn0gVG9rZW5cbiAgICogQHR5cGUge1Rva2VuW119XG4gICAqL1xuXG5cbiAgdmFyIHZhbGlkVG9rZW5zID0gZW52LnRva2Vucy5maWx0ZXIoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycgJiYgdG9rZW4udHlwZSAhPT0gJ2NvbW1lbnQnICYmIHRva2VuLnR5cGUgIT09ICdzY2FsYXInO1xuICB9KTtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHRva2VuIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IGluZGV4IGhhcyB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgKiBAcmV0dXJucyB7VG9rZW4gfCB1bmRlZmluZWR9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFRva2VuKG9mZnNldCkge1xuICAgIHJldHVybiB2YWxpZFRva2Vuc1tjdXJyZW50SW5kZXggKyBvZmZzZXRdO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHRva2VuIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IGluZGV4IGhhcyB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtyZWFkb25seSBzdHJpbmdbXX0gdHlwZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF1cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gaXNUb2tlblR5cGUodHlwZXMsIG9mZnNldCkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gZ2V0VG9rZW4oaSArIG9mZnNldCk7XG5cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4udHlwZSAhPT0gdHlwZXNbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY2xvc2luZyBicmFja2V0IHRvIGFuIG9wZW5pbmcgYnJhY2tldC5cbiAgICpcbiAgICogSXQgaXMgYXNzdW1lZCB0aGF0IGB0b2tlbltjdXJyZW50SW5kZXggLSAxXWAgaXMgYW4gb3BlbmluZyBicmFja2V0LlxuICAgKlxuICAgKiBJZiBubyBjbG9zaW5nIGJyYWNrZXQgY291bGQgYmUgZm91bmQsIGAtMWAgd2lsbCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IG9wZW5cbiAgICogQHBhcmFtIHtSZWdFeHB9IGNsb3NlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZmluZENsb3NpbmdCcmFja2V0KG9wZW4sIGNsb3NlKSB7XG4gICAgdmFyIHN0YWNrSGVpZ2h0ID0gMTtcblxuICAgIGZvciAodmFyIGkgPSBjdXJyZW50SW5kZXg7IGkgPCB2YWxpZFRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdmFsaWRUb2tlbnNbaV07XG4gICAgICB2YXIgY29udGVudCA9IHRva2VuLmNvbnRlbnQ7XG5cbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAncHVuY3R1YXRpb24nICYmIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAob3Blbi50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgc3RhY2tIZWlnaHQrKztcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZS50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgc3RhY2tIZWlnaHQtLTtcblxuICAgICAgICAgIGlmIChzdGFja0hlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFuIGFsaWFzIHRvIHRoZSBnaXZlbiB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtUb2tlbn0gdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFkZEFsaWFzKHRva2VuLCBhbGlhcykge1xuICAgIHZhciBhbGlhc2VzID0gdG9rZW4uYWxpYXM7XG5cbiAgICBpZiAoIWFsaWFzZXMpIHtcbiAgICAgIHRva2VuLmFsaWFzID0gYWxpYXNlcyA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYWxpYXNlcykpIHtcbiAgICAgIHRva2VuLmFsaWFzID0gYWxpYXNlcyA9IFthbGlhc2VzXTtcbiAgICB9XG5cbiAgICBhbGlhc2VzLnB1c2goYWxpYXMpO1xuICB9XG5cbiAgZm9yICg7IGN1cnJlbnRJbmRleCA8IHZhbGlkVG9rZW5zLmxlbmd0aDspIHtcbiAgICB2YXIgc3RhcnRUb2tlbiA9IHZhbGlkVG9rZW5zW2N1cnJlbnRJbmRleCsrXTsgLy8gYWRkIHNwZWNpYWwgYWxpYXNlcyBmb3IgbXV0YXRpb24gdG9rZW5zXG5cbiAgICBpZiAoc3RhcnRUb2tlbi50eXBlID09PSAna2V5d29yZCcgJiYgc3RhcnRUb2tlbi5jb250ZW50ID09PSAnbXV0YXRpb24nKSB7XG4gICAgICAvLyBhbnkgYXJyYXkgb2YgdGhlIG5hbWVzIG9mIGFsbCBpbnB1dCB2YXJpYWJsZXMgKGlmIGFueSlcbiAgICAgIHZhciBpbnB1dFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgICBpZiAoaXNUb2tlblR5cGUoWydkZWZpbml0aW9uLW11dGF0aW9uJywgJ3B1bmN0dWF0aW9uJ10pICYmIGdldFRva2VuKDEpLmNvbnRlbnQgPT09ICcoJykge1xuICAgICAgICAvLyBkZWZpbml0aW9uXG4gICAgICAgIGN1cnJlbnRJbmRleCArPSAyOyAvLyBza2lwICdkZWZpbml0aW9uLW11dGF0aW9uJyBhbmQgJ3B1bmN0dWF0aW9uJ1xuXG4gICAgICAgIHZhciBkZWZpbml0aW9uRW5kID0gZmluZENsb3NpbmdCcmFja2V0KC9eXFwoJC8sIC9eXFwpJC8pO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uRW5kID09PSAtMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIGZpbmQgYWxsIGlucHV0IHZhcmlhYmxlc1xuXG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRJbmRleCA8IGRlZmluaXRpb25FbmQ7IGN1cnJlbnRJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIHQgPSBnZXRUb2tlbigwKTtcblxuICAgICAgICAgIGlmICh0LnR5cGUgPT09ICd2YXJpYWJsZScpIHtcbiAgICAgICAgICAgIGFkZEFsaWFzKHQsICd2YXJpYWJsZS1pbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXRWYXJpYWJsZXMucHVzaCh0LmNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGRlZmluaXRpb25FbmQgKyAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNUb2tlblR5cGUoWydwdW5jdHVhdGlvbicsICdwcm9wZXJ0eS1xdWVyeSddKSAmJiBnZXRUb2tlbigwKS5jb250ZW50ID09PSAneycpIHtcbiAgICAgICAgY3VycmVudEluZGV4Kys7IC8vIHNraXAgb3BlbmluZyBicmFja2V0XG5cbiAgICAgICAgYWRkQWxpYXMoZ2V0VG9rZW4oMCksICdwcm9wZXJ0eS1tdXRhdGlvbicpO1xuXG4gICAgICAgIGlmIChpbnB1dFZhcmlhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIG11dGF0aW9uRW5kID0gZmluZENsb3NpbmdCcmFja2V0KC9eXFx7JC8sIC9eXFx9JC8pO1xuXG4gICAgICAgICAgaWYgKG11dGF0aW9uRW5kID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSAvLyBnaXZlIHJlZmVyZW5jZXMgdG8gaW5wdXQgdmFyaWFibGVzIGEgc3BlY2lhbCBhbGlhc1xuXG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gY3VycmVudEluZGV4OyBpIDwgbXV0YXRpb25FbmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZhclRva2VuID0gdmFsaWRUb2tlbnNbaV07XG5cbiAgICAgICAgICAgIGlmICh2YXJUb2tlbi50eXBlID09PSAndmFyaWFibGUnICYmIGlucHV0VmFyaWFibGVzLmluZGV4T2YodmFyVG9rZW4uY29udGVudCkgPj0gMCkge1xuICAgICAgICAgICAgICBhZGRBbGlhcyh2YXJUb2tlbiwgJ3ZhcmlhYmxlLWlucHV0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cC10ZW1wbGF0aW5nXCIgKi9cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBnaXZlbiBsYW5ndWFnZSBpZCBhbmQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gJ19fXycgKyBsYW5ndWFnZS50b1VwcGVyQ2FzZSgpICsgaW5kZXggKyAnX19fJztcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXSA9IHt9LCB7XG4gICAgYnVpbGRQbGFjZWhvbGRlcnM6IHtcbiAgICAgIC8qKlxuICAgICAgICogVG9rZW5pemUgYWxsIGlubGluZSB0ZW1wbGF0aW5nIGV4cHJlc3Npb25zIG1hdGNoaW5nIGBwbGFjZWhvbGRlclBhdHRlcm5gLlxuICAgICAgICpcbiAgICAgICAqIElmIGByZXBsYWNlRmlsdGVyYCBpcyBwcm92aWRlZCwgb25seSBtYXRjaGVzIG9mIGBwbGFjZWhvbGRlclBhdHRlcm5gIGZvciB3aGljaCBgcmVwbGFjZUZpbHRlcmAgcmV0dXJuc1xuICAgICAgICogYHRydWVgIHdpbGwgYmUgcmVwbGFjZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBiZWZvcmUtdG9rZW5pemVgIGhvb2suXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICogQHBhcmFtIHtSZWdFeHB9IHBsYWNlaG9sZGVyUGF0dGVybiBUaGUgbWF0Y2hlcyBvZiB0aGlzIHBhdHRlcm4gd2lsbCBiZSByZXBsYWNlZCBieSBwbGFjZWhvbGRlcnMuXG4gICAgICAgKiBAcGFyYW0geyhtYXRjaDogc3RyaW5nKSA9PiBib29sZWFufSBbcmVwbGFjZUZpbHRlcl1cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIChlbnYsIGxhbmd1YWdlLCBwbGFjZWhvbGRlclBhdHRlcm4sIHJlcGxhY2VGaWx0ZXIpIHtcbiAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW5TdGFjayA9IGVudi50b2tlblN0YWNrID0gW107XG4gICAgICAgIGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhcmVwbGFjZUZpbHRlcihtYXRjaCkpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaSA9IHRva2VuU3RhY2subGVuZ3RoO1xuICAgICAgICAgIHZhciBwbGFjZWhvbGRlcjsgLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIHN0cmluZ3NcblxuICAgICAgICAgIHdoaWxlIChlbnYuY29kZS5pbmRleE9mKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9IC8vIENyZWF0ZSBhIHNwYXJzZSBhcnJheVxuXG5cbiAgICAgICAgICB0b2tlblN0YWNrW2ldID0gbWF0Y2g7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgICAgICB9KTsgLy8gU3dpdGNoIHRoZSBncmFtbWFyIHRvIG1hcmt1cFxuXG4gICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRva2VuaXplUGxhY2Vob2xkZXJzOiB7XG4gICAgICAvKipcbiAgICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYWZ0ZXItdG9rZW5pemVgIGhvb2suXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UgfHwgIWVudi50b2tlblN0YWNrKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN3aXRjaCB0aGUgZ3JhbW1hciBiYWNrXG5cblxuICAgICAgICBlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnYudG9rZW5TdGFjayk7XG5cbiAgICAgICAgZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gYWxsIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKGogPj0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHwgdG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzW2pdO1xuICAgICAgICAgICAgICB2YXIgdCA9IGVudi50b2tlblN0YWNrW2tdO1xuICAgICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgPyB0b2tlbiA6IHRva2VuLmNvbnRlbnQ7XG4gICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBrKTtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcy5pbmRleE9mKHBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICsrajtcbiAgICAgICAgICAgICAgICB2YXIgYmVmb3JlID0gcy5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBtaWRkbGUgPSBuZXcgUHJpc20uVG9rZW4obGFuZ3VhZ2UsIFByaXNtLnRva2VuaXplKHQsIGVudi5ncmFtbWFyKSwgJ2xhbmd1YWdlLScgKyBsYW5ndWFnZSwgdCk7XG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYmVmb3JlXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50LnB1c2gobWlkZGxlKTtcblxuICAgICAgICAgICAgICAgIGlmIChhZnRlcikge1xuICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYWZ0ZXJdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4uY29udGVudFxuICAgICAgICAgICAgLyogJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgIT09ICdzdHJpbmcnICovXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfVxuXG4gICAgICAgIHdhbGtUb2tlbnMoZW52LnRva2Vucyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhhbmRsZWJhcnNcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmhhbmRsZWJhcnMgPSB7XG4gICAgJ2NvbW1lbnQnOiAvXFx7XFx7IVtcXHNcXFNdKj9cXH1cXH0vLFxuICAgICdkZWxpbWl0ZXInOiB7XG4gICAgICBwYXR0ZXJuOiAvXlxce1xce1xcez98XFx9XFx9XFx9PyQvLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgICdzdHJpbmcnOiAvKFtcIiddKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICdudW1iZXInOiAvXFxiMHhbXFxkQS1GYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OltFZV1bKy1dP1xcZCspPy8sXG4gICAgJ2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAgICdibG9jayc6IHtcbiAgICAgIHBhdHRlcm46IC9eKFxccyooPzp+XFxzKik/KVsjXFwvXVxcUys/KD89XFxzKig/On5cXHMqKT8kfFxccykvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgICdicmFja2V0cyc6IHtcbiAgICAgIHBhdHRlcm46IC9cXFtbXlxcXV0rXFxdLyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBwdW5jdHVhdGlvbjogL1xcW3xcXF0vLFxuICAgICAgICB2YXJpYWJsZTogL1tcXHNcXFNdKy9cbiAgICAgIH1cbiAgICB9LFxuICAgICdwdW5jdHVhdGlvbic6IC9bIVwiIyUmJzooKSorLC5cXC87PD0+QFxcW1xcXFxcXF1eYHt8fX5dLyxcbiAgICAndmFyaWFibGUnOiAvW14hXCIjJSYnKCkqKyxcXC87PD0+QFxcW1xcXFxcXF1eYHt8fX5cXHNdKy9cbiAgfTtcbiAgUHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgdmFyIGhhbmRsZWJhcnNQYXR0ZXJuID0gL1xce1xce1xce1tcXHNcXFNdKz9cXH1cXH1cXH18XFx7XFx7W1xcc1xcU10rP1xcfVxcfS9nO1xuICAgIFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhlbnYsICdoYW5kbGViYXJzJywgaGFuZGxlYmFyc1BhdHRlcm4pO1xuICB9KTtcbiAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcbiAgICBQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnaGFuZGxlYmFycycpO1xuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmhicyA9IFByaXNtLmxhbmd1YWdlcy5oYW5kbGViYXJzO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanNvblwiICovXG4vLyBodHRwczovL3d3dy5qc29uLm9yZy9qc29uLWVuLmh0bWxcblxuXG5wcmlzbS5sYW5ndWFnZXMuanNvbiA9IHtcbiAgJ3Byb3BlcnR5Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVwiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIig/PVxccyo6KS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIoPyFcXHMqOikvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC9cXC9cXC8uKnxcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ251bWJlcic6IC8tP1xcYlxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT9cXGIvaSxcbiAgJ3B1bmN0dWF0aW9uJzogL1t7fVtcXF0sXS8sXG4gICdvcGVyYXRvcic6IC86LyxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAnbnVsbCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgYWxpYXM6ICdrZXl3b3JkJ1xuICB9XG59O1xucHJpc20ubGFuZ3VhZ2VzLndlYm1hbmlmZXN0ID0gcHJpc20ubGFuZ3VhZ2VzLmpzb247XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1sZXNzXCIgKi9cblxuLyogRklYTUUgOlxuIDpleHRlbmQoKSBpcyBub3QgaGFuZGxlZCBzcGVjaWZpY2FsbHkgOiBpdHMgaGlnaGxpZ2h0aW5nIGlzIGJ1Z2d5LlxuIE1peGluIHVzYWdlIG11c3QgYmUgaW5zaWRlIGEgcnVsZXNldCB0byBiZSBoaWdobGlnaHRlZC5cbiBBdC1ydWxlcyAoZS5nLiBpbXBvcnQpIGNvbnRhaW5pbmcgaW50ZXJwb2xhdGlvbnMgYXJlIGJ1Z2d5LlxuIERldGFjaGVkIHJ1bGVzZXRzIGFyZSBoaWdobGlnaHRlZCBhcyBhdC1ydWxlcy5cbiBBIGNvbW1lbnQgYmVmb3JlIGEgbWl4aW4gdXNhZ2UgcHJldmVudHMgdGhlIGxhdHRlciB0byBiZSBwcm9wZXJseSBoaWdobGlnaHRlZC5cbiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMubGVzcyA9IHByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcbiAgJ2NvbW1lbnQnOiBbL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLCB7XG4gICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwvLiovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfV0sXG4gICdhdHJ1bGUnOiB7XG4gICAgcGF0dGVybjogL0BbXFx3LV0oPzpcXCgoPzpbXigpe31dfFxcKFteKCl7fV0qXFwpKSpcXCl8W14oKXt9O1xcc118XFxzKyg/IVxccykpKj8oPz1cXHMqXFx7KS8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvWzooKV0vXG4gICAgfVxuICB9LFxuICAvLyBzZWxlY3RvcnMgYW5kIG1peGlucyBhcmUgY29uc2lkZXJlZCB0aGUgc2FtZVxuICAnc2VsZWN0b3InOiB7XG4gICAgcGF0dGVybjogLyg/OkBcXHtbXFx3LV0rXFx9fFtee307XFxzQF0pKD86QFxce1tcXHctXStcXH18XFwoKD86W14oKXt9XXxcXChbXigpe31dKlxcKSkqXFwpfFteKCl7fTtAXFxzXXxcXHMrKD8hXFxzKSkqPyg/PVxccypcXHspLyxcbiAgICBpbnNpZGU6IHtcbiAgICAgIC8vIG1peGluIHBhcmFtZXRlcnNcbiAgICAgICd2YXJpYWJsZSc6IC9AK1tcXHctXSsvXG4gICAgfVxuICB9LFxuICAncHJvcGVydHknOiAvKD86QFxce1tcXHctXStcXH18W1xcdy1dKSsoPzpcXCtfPyk/KD89XFxzKjopLyxcbiAgJ29wZXJhdG9yJzogL1srXFwtKlxcL10vXG59KTtcbnByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2xlc3MnLCAncHJvcGVydHknLCB7XG4gICd2YXJpYWJsZSc6IFsvLyBWYXJpYWJsZSBkZWNsYXJhdGlvbiAodGhlIGNvbG9uIG11c3QgYmUgY29uc3VtZWQhKVxuICB7XG4gICAgcGF0dGVybjogL0BbXFx3LV0rXFxzKjovLFxuICAgIGluc2lkZToge1xuICAgICAgJ3B1bmN0dWF0aW9uJzogLzovXG4gICAgfVxuICB9LCAvLyBWYXJpYWJsZSB1c2FnZVxuICAvQEA/W1xcdy1dKy9dLFxuICAnbWl4aW4tdXNhZ2UnOiB7XG4gICAgcGF0dGVybjogLyhbeztdXFxzKilbLiNdKD8hXFxkKVtcXHctXS4qPyg/PVsoO10pLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH1cbn0pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFrZWZpbGVcIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMubWFrZWZpbGUgPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5dKSovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnYnVpbHRpbi10YXJnZXQnOiB7XG4gICAgcGF0dGVybjogL1xcLltBLVpdW146Iz1cXHNdKyg/PVxccyo6KD8hPSkpLyxcbiAgICBhbGlhczogJ2J1aWx0aW4nXG4gIH0sXG4gICd0YXJnZXQnOiB7XG4gICAgcGF0dGVybjogL14oPzpbXjo9XFxzXXxbIFxcdF0rKD8hW1xcczpdKSkrKD89XFxzKjooPyE9KSkvbSxcbiAgICBhbGlhczogJ3N5bWJvbCcsXG4gICAgaW5zaWRlOiB7XG4gICAgICAndmFyaWFibGUnOiAvXFwkKyg/Oig/IVxcJClbXigpe306Iz1cXHNdK3woPz1bKHtdKSkvXG4gICAgfVxuICB9LFxuICAndmFyaWFibGUnOiAvXFwkKyg/Oig/IVxcJClbXigpe306Iz1cXHNdK3xcXChbQColPF4rP11bREZdXFwpfCg/PVsoe10pKS8sXG4gIC8vIERpcmVjdGl2ZXNcbiAgJ2tleXdvcmQnOiAvLWluY2x1ZGVcXGJ8XFxiKD86ZGVmaW5lfGVsc2V8ZW5kZWZ8ZW5kaWZ8ZXhwb3J0fGlmbj9kZWZ8aWZuP2VxfGluY2x1ZGV8b3ZlcnJpZGV8cHJpdmF0ZXxzaW5jbHVkZXx1bmRlZmluZXx1bmV4cG9ydHx2cGF0aClcXGIvLFxuICAnZnVuY3Rpb24nOiB7XG4gICAgcGF0dGVybjogLyhcXCgpKD86YWJzcGF0aHxhZGRzdWZmaXh8YW5kfGJhc2VuYW1lfGNhbGx8ZGlyfGVycm9yfGV2YWx8ZmlsZXxmaWx0ZXIoPzotb3V0KT98ZmluZHN0cmluZ3xmaXJzdHdvcmR8Zmxhdm9yfGZvcmVhY2h8Z3VpbGV8aWZ8aW5mb3xqb2lufGxhc3R3b3JkfGxvYWR8bm90ZGlyfG9yfG9yaWdpbnxwYXRzdWJzdHxyZWFscGF0aHxzaGVsbHxzb3J0fHN0cmlwfHN1YnN0fHN1ZmZpeHx2YWx1ZXx3YXJuaW5nfHdpbGRjYXJkfHdvcmQoPzpsaXN0fHMpPykoPz1bIFxcdF0pLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sXG4gICdvcGVyYXRvcic6IC8oPzo6OnxbPzorIV0pPz18W3xAXS8sXG4gICdwdW5jdHVhdGlvbic6IC9bOjsoKXt9XS9cbn07XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrZG93blwiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgLy8gQWxsb3cgb25seSBvbmUgbGluZSBicmVha1xuICB2YXIgaW5uZXIgPSAvKD86XFxcXC58W15cXFxcXFxuXFxyXXwoPzpcXG58XFxyXFxuPykoPyFbXFxyXFxuXSkpLy5zb3VyY2U7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIGZvciB0aGUgY3JlYXRpb24gb2YgdGhlIGJvbGQgb3IgaXRhbGljIHBhdHRlcm4uXG4gICAqXG4gICAqIFRoaXMgYWxzbyBhZGRzIGEgbG9va2JlaGluZCBncm91cCB0byB0aGUgZ2l2ZW4gcGF0dGVybiB0byBlbnN1cmUgdGhhdCB0aGUgcGF0dGVybiBpcyBub3QgYmFja3NsYXNoLWVzY2FwZWQuXG4gICAqXG4gICAqIF9Ob3RlOl8gS2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBhZGRzIGEgY2FwdHVyaW5nIGdyb3VwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVJbmxpbmUocGF0dGVybikge1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoLzxpbm5lcj4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGlubmVyO1xuICAgIH0pO1xuICAgIHJldHVybiBSZWdFeHAoLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKS8uc291cmNlICsgJyg/OicgKyBwYXR0ZXJuICsgJyknKTtcbiAgfVxuXG4gIHZhciB0YWJsZUNlbGwgPSAvKD86XFxcXC58YGAoPzpbXmBcXHJcXG5dfGAoPyFgKSkrYGB8YFteYFxcclxcbl0rYHxbXlxcXFx8XFxyXFxuYF0pKy8uc291cmNlO1xuICB2YXIgdGFibGVSb3cgPSAvXFx8P19fKD86XFx8X18pK1xcfD8oPzooPzpcXG58XFxyXFxuPyl8KD8hW1xcc1xcU10pKS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFibGVDZWxsO1xuICB9KTtcbiAgdmFyIHRhYmxlTGluZSA9IC9cXHw/WyBcXHRdKjo/LXszLH06P1sgXFx0XSooPzpcXHxbIFxcdF0qOj8tezMsfTo/WyBcXHRdKikrXFx8Pyg/OlxcbnxcXHJcXG4/KS8uc291cmNlO1xuICBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmtkb3duJywgJ3Byb2xvZycsIHtcbiAgICAnZnJvbnQtbWF0dGVyLWJsb2NrJzoge1xuICAgICAgcGF0dGVybjogLyheKD86XFxzKltcXHJcXG5dKT8pLS0tKD8hLilbXFxzXFxTXSo/W1xcclxcbl0tLS0oPyEuKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9eLS0tfC0tLSQvLFxuICAgICAgICAnZnJvbnQtbWF0dGVyJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFMrKD86XFxzK1xcUyspKi8sXG4gICAgICAgICAgYWxpYXM6IFsneWFtbCcsICdsYW5ndWFnZS15YW1sJ10sXG4gICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMueWFtbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnYmxvY2txdW90ZSc6IHtcbiAgICAgIC8vID4gLi4uXG4gICAgICBwYXR0ZXJuOiAvXj4oPzpbXFx0IF0qPikqL20sXG4gICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgIH0sXG4gICAgJ3RhYmxlJzoge1xuICAgICAgcGF0dGVybjogUmVnRXhwKCdeJyArIHRhYmxlUm93ICsgdGFibGVMaW5lICsgJyg/OicgKyB0YWJsZVJvdyArICcpKicsICdtJyksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3RhYmxlLWRhdGEtcm93cyc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJ14oJyArIHRhYmxlUm93ICsgdGFibGVMaW5lICsgJykoPzonICsgdGFibGVSb3cgKyAnKSokJyksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICd0YWJsZS1kYXRhJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAodGFibGVDZWxsKSxcbiAgICAgICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncHVuY3R1YXRpb24nOiAvXFx8L1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RhYmxlLWxpbmUnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeKCcgKyB0YWJsZVJvdyArICcpJyArIHRhYmxlTGluZSArICckJyksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdwdW5jdHVhdGlvbic6IC9cXHx8Oj8tezMsfTo/L1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3RhYmxlLWhlYWRlci1yb3cnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeJyArIHRhYmxlUm93ICsgJyQnKSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICd0YWJsZS1oZWFkZXInOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCh0YWJsZUNlbGwpLFxuICAgICAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcfC9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICdjb2RlJzogW3tcbiAgICAgIC8vIFByZWZpeGVkIGJ5IDQgc3BhY2VzIG9yIDEgdGFiIGFuZCBwcmVjZWRlZCBieSBhbiBlbXB0eSBsaW5lXG4gICAgICBwYXR0ZXJuOiAvKCg/Ol58XFxuKVsgXFx0XSpcXG58KD86XnxcXHJcXG4/KVsgXFx0XSpcXHJcXG4/KSg/OiB7NH18XFx0KS4rKD86KD86XFxufFxcclxcbj8pKD86IHs0fXxcXHQpLispKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sIHtcbiAgICAgIC8vIGBgYG9wdGlvbmFsIGxhbmd1YWdlXG4gICAgICAvLyBjb2RlIGJsb2NrXG4gICAgICAvLyBgYGBcbiAgICAgIHBhdHRlcm46IC9eYGBgW1xcc1xcU10qP15gYGAkL20sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2NvZGUtYmxvY2snOiB7XG4gICAgICAgICAgcGF0dGVybjogL14oYGBgLiooPzpcXG58XFxyXFxuPykpW1xcc1xcU10rPyg/PSg/OlxcbnxcXHJcXG4/KV5gYGAkKS9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ2NvZGUtbGFuZ3VhZ2UnOiB7XG4gICAgICAgICAgcGF0dGVybjogL14oYGBgKS4rLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9gYGAvXG4gICAgICB9XG4gICAgfV0sXG4gICAgJ3RpdGxlJzogW3tcbiAgICAgIC8vIHRpdGxlIDFcbiAgICAgIC8vID09PT09PT1cbiAgICAgIC8vIHRpdGxlIDJcbiAgICAgIC8vIC0tLS0tLS1cbiAgICAgIHBhdHRlcm46IC9cXFMuKig/OlxcbnxcXHJcXG4/KSg/Oj09K3wtLSspKD89WyBcXHRdKiQpL20sXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC89PSskfC0tKyQvXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgLy8gIyB0aXRsZSAxXG4gICAgICAvLyAjIyMjIyMgdGl0bGUgNlxuICAgICAgcGF0dGVybjogLyheXFxzKikjLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9eIyt8IyskL1xuICAgICAgfVxuICAgIH1dLFxuICAgICdocic6IHtcbiAgICAgIC8vICoqKlxuICAgICAgLy8gLS0tXG4gICAgICAvLyAqICogKlxuICAgICAgLy8gLS0tLS0tLS0tLS1cbiAgICAgIHBhdHRlcm46IC8oXlxccyopKFsqLV0pKD86W1xcdCBdKlxcMil7Mix9KD89XFxzKiQpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgICdsaXN0Jzoge1xuICAgICAgLy8gKiBpdGVtXG4gICAgICAvLyArIGl0ZW1cbiAgICAgIC8vIC0gaXRlbVxuICAgICAgLy8gMS4gaXRlbVxuICAgICAgcGF0dGVybjogLyheXFxzKikoPzpbKistXXxcXGQrXFwuKSg/PVtcXHQgXS4pL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgICd1cmwtcmVmZXJlbmNlJzoge1xuICAgICAgLy8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tIFwiT3B0aW9uYWwgdGl0bGVcIlxuICAgICAgLy8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tICdPcHRpb25hbCB0aXRsZSdcbiAgICAgIC8vIFtpZF06IGh0dHA6Ly9leGFtcGxlLmNvbSAoT3B0aW9uYWwgdGl0bGUpXG4gICAgICAvLyBbaWRdOiA8aHR0cDovL2V4YW1wbGUuY29tPiBcIk9wdGlvbmFsIHRpdGxlXCJcbiAgICAgIHBhdHRlcm46IC8hP1xcW1teXFxdXStcXF06W1xcdCBdKyg/OlxcUyt8PCg/OlxcXFwufFtePlxcXFxdKSs+KSg/OltcXHQgXSsoPzpcIig/OlxcXFwufFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwufFteJ1xcXFxdKSonfFxcKCg/OlxcXFwufFteKVxcXFxdKSpcXCkpKT8vLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd2YXJpYWJsZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXighP1xcWylbXlxcXV0rLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdzdHJpbmcnOiAvKD86XCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwifCcoPzpcXFxcLnxbXidcXFxcXSkqJ3xcXCgoPzpcXFxcLnxbXilcXFxcXSkqXFwpKSQvLFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvXltcXFtcXF0hOl18Wzw+XS9cbiAgICAgIH0sXG4gICAgICBhbGlhczogJ3VybCdcbiAgICB9LFxuICAgICdib2xkJzoge1xuICAgICAgLy8gKipzdHJvbmcqKlxuICAgICAgLy8gX19zdHJvbmdfX1xuICAgICAgLy8gYWxsb3cgb25lIG5lc3RlZCBpbnN0YW5jZSBvZiBpdGFsaWMgdGV4dCB1c2luZyB0aGUgc2FtZSBkZWxpbWl0ZXJcbiAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZSgvXFxiX18oPzooPyFfKTxpbm5lcj58Xyg/Oig/IV8pPGlubmVyPikrXykrX19cXGJ8XFwqXFwqKD86KD8hXFwqKTxpbm5lcj58XFwqKD86KD8hXFwqKTxpbm5lcj4pK1xcKikrXFwqXFwqLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF4uLilbXFxzXFxTXSsoPz0uLiQpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge30gLy8gc2VlIGJlbG93XG5cbiAgICAgICAgfSxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcKlxcKnxfXy9cbiAgICAgIH1cbiAgICB9LFxuICAgICdpdGFsaWMnOiB7XG4gICAgICAvLyAqZW0qXG4gICAgICAvLyBfZW1fXG4gICAgICAvLyBhbGxvdyBvbmUgbmVzdGVkIGluc3RhbmNlIG9mIGJvbGQgdGV4dCB1c2luZyB0aGUgc2FtZSBkZWxpbWl0ZXJcbiAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZSgvXFxiXyg/Oig/IV8pPGlubmVyPnxfXyg/Oig/IV8pPGlubmVyPikrX18pK19cXGJ8XFwqKD86KD8hXFwqKTxpbm5lcj58XFwqXFwqKD86KD8hXFwqKTxpbm5lcj4pK1xcKlxcKikrXFwqLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF4uKVtcXHNcXFNdKyg/PS4kKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuXG4gICAgICAgIH0sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9bKl9dL1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3N0cmlrZSc6IHtcbiAgICAgIC8vIH5+c3RyaWtlIHRocm91Z2h+flxuICAgICAgLy8gfnN0cmlrZX5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvc3RyaWN0XG4gICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoLyh+fj8pKD86KD8hfik8aW5uZXI+KStcXDIvLnNvdXJjZSksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdjb250ZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXn5+PylbXFxzXFxTXSsoPz1cXDEkKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuXG4gICAgICAgIH0sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9+fj8vXG4gICAgICB9XG4gICAgfSxcbiAgICAnY29kZS1zbmlwcGV0Jzoge1xuICAgICAgLy8gYGNvZGVgXG4gICAgICAvLyBgYGNvZGVgYFxuICAgICAgcGF0dGVybjogLyhefFteXFxcXGBdKSg/OmBgW15gXFxyXFxuXSsoPzpgW15gXFxyXFxuXSspKmBgKD8hYCl8YFteYFxcclxcbl0rYCg/IWApKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgYWxpYXM6IFsnY29kZScsICdrZXl3b3JkJ11cbiAgICB9LFxuICAgICd1cmwnOiB7XG4gICAgICAvLyBbZXhhbXBsZV0oaHR0cDovL2V4YW1wbGUuY29tIFwiT3B0aW9uYWwgdGl0bGVcIilcbiAgICAgIC8vIFtleGFtcGxlXVtpZF1cbiAgICAgIC8vIFtleGFtcGxlXSBbaWRdXG4gICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoLyE/XFxbKD86KD8hXFxdKTxpbm5lcj4pK1xcXSg/OlxcKFteXFxzKV0rKD86W1xcdCBdK1wiKD86XFxcXC58W15cIlxcXFxdKSpcIik/XFwpfFsgXFx0XT9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKS8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ29wZXJhdG9yJzogL14hLyxcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheXFxbKVteXFxdXSsoPz1cXF0pLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge30gLy8gc2VlIGJlbG93XG5cbiAgICAgICAgfSxcbiAgICAgICAgJ3ZhcmlhYmxlJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXlxcXVsgXFx0XT9cXFspW15cXF1dKyg/PVxcXSQpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICd1cmwnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheXFxdXFwoKVteXFxzKV0rLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdzdHJpbmcnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKylcIig/OlxcXFwufFteXCJcXFxcXSkqXCIoPz1cXCkkKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgWyd1cmwnLCAnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtlJ10uZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBbJ3VybCcsICdib2xkJywgJ2l0YWxpYycsICdzdHJpa2UnLCAnY29kZS1zbmlwcGV0J10uZm9yRWFjaChmdW5jdGlvbiAoaW5zaWRlKSB7XG4gICAgICBpZiAodG9rZW4gIT09IGluc2lkZSkge1xuICAgICAgICBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25bdG9rZW5dLmluc2lkZS5jb250ZW50Lmluc2lkZVtpbnNpZGVdID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duW2luc2lkZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09ICdtYXJrZG93bicgJiYgZW52Lmxhbmd1YWdlICE9PSAnbWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fsa1Rva2Vucyh0b2tlbnMpIHtcbiAgICAgIGlmICghdG9rZW5zIHx8IHR5cGVvZiB0b2tlbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ2NvZGUnKSB7XG4gICAgICAgICAgd2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgYGxhbmd1YWdlLXh4eHhgIGNsYXNzIHRvIHRoaXMgY29kZSBibG9jay4gS2VlcCBpbiBtaW5kIHRoYXQgdGhlIGBjb2RlLWxhbmd1YWdlYCB0b2tlblxuICAgICAgICAgKiBpcyBvcHRpb25hbC4gQnV0IHRoZSBncmFtbWFyIGlzIGRlZmluZWQgc28gdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBjYXNlIHdlIGhhdmUgdG8gaGFuZGxlOlxuICAgICAgICAgKlxuICAgICAgICAgKiB0b2tlbi5jb250ZW50ID0gW1xuICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJwdW5jdHVhdGlvblwiPmBgYDwvc3Bhbj4sXG4gICAgICAgICAqICAgICA8c3BhbiBjbGFzcz1cImNvZGUtbGFuZ3VhZ2VcIj54eHh4PC9zcGFuPixcbiAgICAgICAgICogICAgICdcXG4nLCAvLyBleGFjdGx5IG9uZSBuZXcgbGluZXMgKFxcciBvciBcXG4gb3IgXFxyXFxuKVxuICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJjb2RlLWJsb2NrXCI+Li4uPC9zcGFuPixcbiAgICAgICAgICogICAgICdcXG4nLCAvLyBleGFjdGx5IG9uZSBuZXcgbGluZXMgYWdhaW5cbiAgICAgICAgICogICAgIDxzcGFuIGNsYXNzPVwicHVuY3R1YXRpb25cIj5gYGA8L3NwYW4+XG4gICAgICAgICAqIF07XG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgdmFyIGNvZGVMYW5nID0gdG9rZW4uY29udGVudFsxXTtcbiAgICAgICAgdmFyIGNvZGVCbG9jayA9IHRva2VuLmNvbnRlbnRbM107XG5cbiAgICAgICAgaWYgKGNvZGVMYW5nICYmIGNvZGVCbG9jayAmJiBjb2RlTGFuZy50eXBlID09PSAnY29kZS1sYW5ndWFnZScgJiYgY29kZUJsb2NrLnR5cGUgPT09ICdjb2RlLWJsb2NrJyAmJiB0eXBlb2YgY29kZUxhbmcuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyB0aGlzIG1pZ2h0IGJlIGEgbGFuZ3VhZ2UgdGhhdCBQcmlzbSBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICAgICAgLy8gZG8gc29tZSByZXBsYWNlbWVudHMgdG8gc3VwcG9ydCBDKyssIEMjLCBhbmQgRiNcbiAgICAgICAgICB2YXIgbGFuZyA9IGNvZGVMYW5nLmNvbnRlbnQucmVwbGFjZSgvXFxiIy9nLCAnc2hhcnAnKS5yZXBsYWNlKC9cXGJcXCtcXCsvZywgJ3BwJyk7IC8vIG9ubHkgdXNlIHRoZSBmaXJzdCB3b3JkXG5cbiAgICAgICAgICBsYW5nID0gKC9bYS16XVtcXHctXSovaS5leGVjKGxhbmcpIHx8IFsnJ10pWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdmFyIGFsaWFzID0gJ2xhbmd1YWdlLScgKyBsYW5nOyAvLyBhZGQgYWxpYXNcblxuICAgICAgICAgIGlmICghY29kZUJsb2NrLmFsaWFzKSB7XG4gICAgICAgICAgICBjb2RlQmxvY2suYWxpYXMgPSBbYWxpYXNdO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvZGVCbG9jay5hbGlhcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvZGVCbG9jay5hbGlhcyA9IFtjb2RlQmxvY2suYWxpYXMsIGFsaWFzXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZUJsb2NrLmFsaWFzLnB1c2goYWxpYXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhbGtUb2tlbnMoZW52LnRva2Vucyk7XG4gIH0pO1xuICBQcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgaWYgKGVudi50eXBlICE9PSAnY29kZS1ibG9jaycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29kZUxhbmcgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZW52LmNsYXNzZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2xzID0gZW52LmNsYXNzZXNbaV07XG4gICAgICB2YXIgbWF0Y2ggPSAvbGFuZ3VhZ2UtKC4rKS8uZXhlYyhjbHMpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgY29kZUxhbmcgPSBtYXRjaFsxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbY29kZUxhbmddO1xuXG4gICAgaWYgKCFncmFtbWFyKSB7XG4gICAgICBpZiAoY29kZUxhbmcgJiYgY29kZUxhbmcgIT09ICdub25lJyAmJiBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXIpIHtcbiAgICAgICAgdmFyIGlkID0gJ21kLScgKyBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlMTYpO1xuICAgICAgICBlbnYuYXR0cmlidXRlc1snaWQnXSA9IGlkO1xuICAgICAgICBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXIubG9hZExhbmd1YWdlcyhjb2RlTGFuZywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgICAgICBpZiAoZWxlKSB7XG4gICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KGVsZS50ZXh0Q29udGVudCwgUHJpc20ubGFuZ3VhZ2VzW2NvZGVMYW5nXSwgY29kZUxhbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudi5jb250ZW50ID0gUHJpc20uaGlnaGxpZ2h0KHRleHRDb250ZW50KGVudi5jb250ZW50KSwgZ3JhbW1hciwgY29kZUxhbmcpO1xuICAgIH1cbiAgfSk7XG4gIHZhciB0YWdQYXR0ZXJuID0gUmVnRXhwKFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLnBhdHRlcm4uc291cmNlLCAnZ2knKTtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBrbm93biBlbnRpdHkgbmFtZXMuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBhbHdheXMgYmUgaW5jb21wbGV0ZSB0byBzYXZlIHNwYWNlLiBUaGUgY3VycmVudCBsaXN0IGlzIHRoZSBvbmUgdXNlZCBieSBsb3dkYXNoJ3MgdW5lc2NhcGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvMmRhMDI0YzNiNGY5OTQ3YTQ4NTE3NjM5ZGU3NTYwNDU3Y2Q0ZWM2Yy91bmVzY2FwZS5qcyNMMn1cbiAgICovXG5cbiAgdmFyIEtOT1dOX0VOVElUWV9OQU1FUyA9IHtcbiAgICAnYW1wJzogJyYnLFxuICAgICdsdCc6ICc8JyxcbiAgICAnZ3QnOiAnPicsXG4gICAgJ3F1b3QnOiAnXCInXG4gIH07IC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCBgU3RyaW5nLmZyb21Db2RlUG9pbnRgXG5cbiAgdmFyIGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGV4dCBjb250ZW50IG9mIGEgZ2l2ZW4gSFRNTCBzb3VyY2UgY29kZSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRleHRDb250ZW50KGh0bWwpIHtcbiAgICAvLyByZW1vdmUgYWxsIHRhZ3NcbiAgICB2YXIgdGV4dCA9IGh0bWwucmVwbGFjZSh0YWdQYXR0ZXJuLCAnJyk7IC8vIGRlY29kZSBrbm93biBlbnRpdGllc1xuXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvJihcXHd7MSw4fXwjeD9bXFxkYS1mXXsxLDh9KTsvZ2ksIGZ1bmN0aW9uIChtLCBjb2RlKSB7XG4gICAgICBjb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoY29kZVswXSA9PT0gJyMnKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBpZiAoY29kZVsxXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludChjb2RlLnNsaWNlKDIpLCAxNik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBOdW1iZXIoY29kZS5zbGljZSgxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbUNvZGVQb2ludCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga25vd24gPSBLTk9XTl9FTlRJVFlfTkFNRVNbY29kZV07XG5cbiAgICAgICAgaWYgKGtub3duKSB7XG4gICAgICAgICAgcmV0dXJuIGtub3duO1xuICAgICAgICB9IC8vIHVuYWJsZSB0byBkZWNvZGVcblxuXG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgUHJpc20ubGFuZ3VhZ2VzLm1kID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tb2JqZWN0aXZlY1wiICovXG5cblxucHJpc20ubGFuZ3VhZ2VzLm9iamVjdGl2ZWMgPSBwcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjJywge1xuICAnc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC9AP1wiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcIi8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdrZXl3b3JkJzogL1xcYig/OmFzbXxhdXRvfGJyZWFrfGNhc2V8Y2hhcnxjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXh0ZXJufGZsb2F0fGZvcnxnb3RvfGlmfGlufGlubGluZXxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2VsZnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdHJ1Y3R8c3VwZXJ8c3dpdGNofHR5cGVkZWZ8dHlwZW9mfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxifCg/OkBpbnRlcmZhY2V8QGVuZHxAaW1wbGVtZW50YXRpb258QHByb3RvY29sfEBjbGFzc3xAcHVibGljfEBwcm90ZWN0ZWR8QHByaXZhdGV8QHByb3BlcnR5fEB0cnl8QGNhdGNofEBmaW5hbGx5fEB0aHJvd3xAc3ludGhlc2l6ZXxAZHluYW1pY3xAc2VsZWN0b3IpXFxiLyxcbiAgJ29wZXJhdG9yJzogLy1bLT5dP3xcXCtcXCs/fCE9P3w8PD89P3w+Pj89P3w9PT98JiY/fFxcfFxcfD98W35eJT8qXFwvQF0vXG59KTtcbmRlbGV0ZSBwcmlzbS5sYW5ndWFnZXMub2JqZWN0aXZlY1snY2xhc3MtbmFtZSddO1xucHJpc20ubGFuZ3VhZ2VzLm9iamMgPSBwcmlzbS5sYW5ndWFnZXMub2JqZWN0aXZlYztcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW9jYW1sXCIgKi9cbi8vIGh0dHBzOi8vb2NhbWwub3JnL21hbnVhbC9sZXguaHRtbFxuXG5wcmlzbS5sYW5ndWFnZXMub2NhbWwgPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC9cXChcXCpbXFxzXFxTXSo/XFwqXFwpLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2NoYXInOiB7XG4gICAgcGF0dGVybjogLycoPzpbXlxcXFxcXHJcXG4nXXxcXFxcKD86Lnxbb3hdP1swLTlhLWZdezEsM30pKScvaSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ3N0cmluZyc6IFt7XG4gICAgcGF0dGVybjogL1wiKD86XFxcXCg/OltcXHNcXFNdfFxcclxcbil8W15cXFxcXFxyXFxuXCJdKSpcIi8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXFx7KFthLXpfXSopXFx8W1xcc1xcU10qP1xcfFxcMVxcfS8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH1dLFxuICAnbnVtYmVyJzogWy8vIGJpbmFyeSBhbmQgb2N0YWxcbiAgL1xcYig/OjBiWzAxXVswMV9dKnwwb1swLTddWzAtN19dKilcXGIvaSwgLy8gaGV4YWRlY2ltYWxcbiAgL1xcYjB4W2EtZjAtOV1bYS1mMC05X10qKD86XFwuW2EtZjAtOV9dKik/KD86cFsrLV0/XFxkW1xcZF9dKik/KD8hXFx3KS9pLCAvLyBkZWNpbWFsXG4gIC9cXGJcXGRbXFxkX10qKD86XFwuW1xcZF9dKik/KD86ZVsrLV0/XFxkW1xcZF9dKik/KD8hXFx3KS9pXSxcbiAgJ2RpcmVjdGl2ZSc6IHtcbiAgICBwYXR0ZXJuOiAvXFxCI1xcdysvLFxuICAgIGFsaWFzOiAncHJvcGVydHknXG4gIH0sXG4gICdsYWJlbCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxCflxcdysvLFxuICAgIGFsaWFzOiAncHJvcGVydHknXG4gIH0sXG4gICd0eXBlLXZhcmlhYmxlJzoge1xuICAgIHBhdHRlcm46IC9cXEInXFx3Ky8sXG4gICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgfSxcbiAgJ3ZhcmlhbnQnOiB7XG4gICAgcGF0dGVybjogL2BcXHcrLyxcbiAgICBhbGlhczogJ3N5bWJvbCdcbiAgfSxcbiAgLy8gRm9yIHRoZSBsaXN0IG9mIGtleXdvcmRzIGFuZCBvcGVyYXRvcnMsXG4gIC8vIHNlZTogaHR0cDovL2NhbWwuaW5yaWEuZnIvcHViL2RvY3MvbWFudWFsLW9jYW1sL2xleC5odG1sI3NlYzg0XG4gICdrZXl3b3JkJzogL1xcYig/OmFzfGFzc2VydHxiZWdpbnxjbGFzc3xjb25zdHJhaW50fGRvfGRvbmV8ZG93bnRvfGVsc2V8ZW5kfGV4Y2VwdGlvbnxleHRlcm5hbHxmb3J8ZnVufGZ1bmN0aW9ufGZ1bmN0b3J8aWZ8aW58aW5jbHVkZXxpbmhlcml0fGluaXRpYWxpemVyfGxhenl8bGV0fG1hdGNofG1ldGhvZHxtb2R1bGV8bXV0YWJsZXxuZXd8bm9ucmVjfG9iamVjdHxvZnxvcGVufHByaXZhdGV8cmVjfHNpZ3xzdHJ1Y3R8dGhlbnx0b3x0cnl8dHlwZXx2YWx8dmFsdWV8dmlydHVhbHx3aGVufHdoZXJlfHdoaWxlfHdpdGgpXFxiLyxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAnb3BlcmF0b3ItbGlrZS1wdW5jdHVhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvXFxbWzw+fF18Wz58XVxcXXxcXHs8fD5cXH0vLFxuICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gIH0sXG4gIC8vIEN1c3RvbSBvcGVyYXRvcnMgYXJlIGFsbG93ZWRcbiAgJ29wZXJhdG9yJzogL1xcLlsufl18Ols9Pl18Wz08PkBefCYrXFwtKlxcLyQlIT9+XVshJCUmKitcXC0uXFwvOjw9Pj9AXnx+XSp8XFxiKD86YW5kfGFzcnxsYW5kfGxvcnxsc2x8bHNyfGx4b3J8bW9kfG9yKVxcYi8sXG4gICdwdW5jdHVhdGlvbic6IC87O3w6OnxbKCl7fVxcW1xcXS4sOjsjXXxcXGJfXFxiL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB5dGhvblwiICovXG5cbnByaXNtLmxhbmd1YWdlcy5weXRob24gPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ3N0cmluZy1pbnRlcnBvbGF0aW9uJzoge1xuICAgIHBhdHRlcm46IC8oPzpmfGZyfHJmKSg/OihcIlwiXCJ8JycnKVtcXHNcXFNdKj9cXDF8KFwifCcpKD86XFxcXC58KD8hXFwyKVteXFxcXFxcclxcbl0pKlxcMikvaSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnaW50ZXJwb2xhdGlvbic6IHtcbiAgICAgICAgLy8gXCJ7XCIgPGV4cHJlc3Npb24+IDxvcHRpb25hbCBcIiFzXCIsIFwiIXJcIiwgb3IgXCIhYVwiPiA8b3B0aW9uYWwgXCI6XCIgZm9ybWF0IHNwZWNpZmllcj4gXCJ9XCJcbiAgICAgICAgcGF0dGVybjogLygoPzpefFtee10pKD86XFx7XFx7KSopXFx7KD8hXFx7KSg/Oltee31dfFxceyg/IVxceykoPzpbXnt9XXxcXHsoPyFcXHspKD86W157fV0pK1xcfSkrXFx9KStcXH0vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnZm9ybWF0LXNwZWMnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKDopW146KCl7fV0rKD89XFx9JCkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NvbnZlcnNpb24tb3B0aW9uJzoge1xuICAgICAgICAgICAgcGF0dGVybjogLyFbc3JhXSg/PVs6fV0kKS8sXG4gICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdDogbnVsbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3N0cmluZyc6IC9bXFxzXFxTXSsvXG4gICAgfVxuICB9LFxuICAndHJpcGxlLXF1b3RlZC1zdHJpbmcnOiB7XG4gICAgcGF0dGVybjogLyg/OltydWJdfGJyfHJiKT8oXCJcIlwifCcnJylbXFxzXFxTXSo/XFwxL2ksXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGFsaWFzOiAnc3RyaW5nJ1xuICB9LFxuICAnc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC8oPzpbcnViXXxicnxyYik/KFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS9pLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnZnVuY3Rpb24nOiB7XG4gICAgcGF0dGVybjogLygoPzpefFxccylkZWZbIFxcdF0rKVthLXpBLVpfXVxcdyooPz1cXHMqXFwoKS9nLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGJjbGFzc1xccyspXFx3Ky9pLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2RlY29yYXRvcic6IHtcbiAgICBwYXR0ZXJuOiAvKF5bXFx0IF0qKUBcXHcrKD86XFwuXFx3KykqL20sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBhbGlhczogWydhbm5vdGF0aW9uJywgJ3B1bmN0dWF0aW9uJ10sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvXFwuL1xuICAgIH1cbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86Xyg/PVxccyo6KXxhbmR8YXN8YXNzZXJ0fGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29udGludWV8ZGVmfGRlbHxlbGlmfGVsc2V8ZXhjZXB0fGV4ZWN8ZmluYWxseXxmb3J8ZnJvbXxnbG9iYWx8aWZ8aW1wb3J0fGlufGlzfGxhbWJkYXxtYXRjaHxub25sb2NhbHxub3R8b3J8cGFzc3xwcmludHxyYWlzZXxyZXR1cm58dHJ5fHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcbiAgJ2J1aWx0aW4nOiAvXFxiKD86X19pbXBvcnRfX3xhYnN8YWxsfGFueXxhcHBseXxhc2NpaXxiYXNlc3RyaW5nfGJpbnxib29sfGJ1ZmZlcnxieXRlYXJyYXl8Ynl0ZXN8Y2FsbGFibGV8Y2hyfGNsYXNzbWV0aG9kfGNtcHxjb2VyY2V8Y29tcGlsZXxjb21wbGV4fGRlbGF0dHJ8ZGljdHxkaXJ8ZGl2bW9kfGVudW1lcmF0ZXxldmFsfGV4ZWNmaWxlfGZpbGV8ZmlsdGVyfGZsb2F0fGZvcm1hdHxmcm96ZW5zZXR8Z2V0YXR0cnxnbG9iYWxzfGhhc2F0dHJ8aGFzaHxoZWxwfGhleHxpZHxpbnB1dHxpbnR8aW50ZXJufGlzaW5zdGFuY2V8aXNzdWJjbGFzc3xpdGVyfGxlbnxsaXN0fGxvY2Fsc3xsb25nfG1hcHxtYXh8bWVtb3J5dmlld3xtaW58bmV4dHxvYmplY3R8b2N0fG9wZW58b3JkfHBvd3xwcm9wZXJ0eXxyYW5nZXxyYXdfaW5wdXR8cmVkdWNlfHJlbG9hZHxyZXByfHJldmVyc2VkfHJvdW5kfHNldHxzZXRhdHRyfHNsaWNlfHNvcnRlZHxzdGF0aWNtZXRob2R8c3RyfHN1bXxzdXBlcnx0dXBsZXx0eXBlfHVuaWNocnx1bmljb2RlfHZhcnN8eHJhbmdlfHppcClcXGIvLFxuICAnYm9vbGVhbic6IC9cXGIoPzpGYWxzZXxOb25lfFRydWUpXFxiLyxcbiAgJ251bWJlcic6IC9cXGIwKD86Yig/Ol8/WzAxXSkrfG8oPzpfP1swLTddKSt8eCg/Ol8/W2EtZjAtOV0pKylcXGJ8KD86XFxiXFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFxCXFwuXFxkKyg/Ol9cXGQrKSopKD86ZVsrLV0/XFxkKyg/Ol9cXGQrKSopP2o/KD8hXFx3KS9pLFxuICAnb3BlcmF0b3InOiAvWy0rJT1dPT98IT18Oj18XFwqXFwqPz0/fFxcL1xcLz89P3w8Wzw9Pl0/fD5bPT5dP3xbJnxefl0vLFxuICAncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xucHJpc20ubGFuZ3VhZ2VzLnB5dGhvblsnc3RyaW5nLWludGVycG9sYXRpb24nXS5pbnNpZGVbJ2ludGVycG9sYXRpb24nXS5pbnNpZGUucmVzdCA9IHByaXNtLmxhbmd1YWdlcy5weXRob247XG5wcmlzbS5sYW5ndWFnZXMucHkgPSBwcmlzbS5sYW5ndWFnZXMucHl0aG9uO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcmVhc29uXCIgKi9cblxucHJpc20ubGFuZ3VhZ2VzLnJlYXNvbiA9IHByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAnc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcclxcblwiXSkqXCIvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAvLyAnY2xhc3MtbmFtZScgbXVzdCBiZSBtYXRjaGVkICphZnRlciogJ2NvbnN0cnVjdG9yJyBkZWZpbmVkIGJlbG93XG4gICdjbGFzcy1uYW1lJzogL1xcYltBLVpdXFx3Ki8sXG4gICdrZXl3b3JkJzogL1xcYig/OmFuZHxhc3xhc3NlcnR8YmVnaW58Y2xhc3N8Y29uc3RyYWludHxkb3xkb25lfGRvd250b3xlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJuYWx8Zm9yfGZ1bnxmdW5jdGlvbnxmdW5jdG9yfGlmfGlufGluY2x1ZGV8aW5oZXJpdHxpbml0aWFsaXplcnxsYXp5fGxldHxtZXRob2R8bW9kdWxlfG11dGFibGV8bmV3fG5vbnJlY3xvYmplY3R8b2Z8b3Blbnxvcnxwcml2YXRlfHJlY3xzaWd8c3RydWN0fHN3aXRjaHx0aGVufHRvfHRyeXx0eXBlfHZhbHx2aXJ0dWFsfHdoZW58d2hpbGV8d2l0aClcXGIvLFxuICAnb3BlcmF0b3InOiAvXFwuezN9fDpbOj1dfFxcfD58LT58PSg/Oj09P3w+KT98PD0/fD49P3xbfF4/JyMhfmBdfFsrXFwtKlxcL11cXC4/fFxcYig/OmFzcnxsYW5kfGxvcnxsc2x8bHNyfGx4b3J8bW9kKVxcYi9cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncmVhc29uJywgJ2NsYXNzLW5hbWUnLCB7XG4gICdjaGFyJzoge1xuICAgIHBhdHRlcm46IC8nKD86XFxcXHhbXFxkYS1mXXsyfXxcXFxcb1swLTNdWzAtN11bMC03XXxcXFxcXFxkezN9fFxcXFwufFteJ1xcXFxcXHJcXG5dKScvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAvLyBOZWdhdGl2ZSBsb29rLWFoZWFkIHByZXZlbnRzIGZyb20gbWF0Y2hpbmcgdGhpbmdzIGxpa2UgU3RyaW5nLmNhcGl0YWxpemVcbiAgJ2NvbnN0cnVjdG9yJzogL1xcYltBLVpdXFx3KlxcYig/IVxccypcXC4pLyxcbiAgJ2xhYmVsJzoge1xuICAgIHBhdHRlcm46IC9cXGJbYS16XVxcdyooPz06OikvLFxuICAgIGFsaWFzOiAnc3ltYm9sJ1xuICB9XG59KTsgLy8gV2UgY2FuJ3QgbWF0Y2ggZnVuY3Rpb25zIHByb3BlcnR5LCBzbyBsZXQncyBub3QgZXZlbiB0cnkuXG5cbmRlbGV0ZSBwcmlzbS5sYW5ndWFnZXMucmVhc29uLmZ1bmN0aW9uO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc2Fzc1wiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnNhc3MgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG4gICAgLy8gU2FzcyBjb21tZW50cyBkb24ndCBuZWVkIHRvIGJlIGNsb3NlZCwgb25seSBpbmRlbnRlZFxuICAgICdjb21tZW50Jzoge1xuICAgICAgcGF0dGVybjogL14oWyBcXHRdKilcXC9bXFwvKl0uKig/Oig/Olxccj9cXG58XFxyKVxcMVsgXFx0XS4rKSovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzYXNzJywgJ2F0cnVsZScsIHtcbiAgICAvLyBXZSB3YW50IHRvIGNvbnN1bWUgdGhlIHdob2xlIGxpbmVcbiAgICAnYXRydWxlLWxpbmUnOiB7XG4gICAgICAvLyBJbmNsdWRlcyBzdXBwb3J0IGZvciA9IGFuZCArIHNob3J0Y3V0c1xuICAgICAgcGF0dGVybjogL14oPzpbIFxcdF0qKVtAKz1dLisvbSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnYXRydWxlJzogLyg/OkBbXFx3LV0rfFsrPV0pL1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5hdHJ1bGU7XG4gIHZhciB2YXJpYWJsZSA9IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9LztcbiAgdmFyIG9wZXJhdG9yID0gWy9bKypcXC8lXXxbPSFdPXw8PT98Pj0/fFxcYig/OmFuZHxub3R8b3IpXFxiLywge1xuICAgIHBhdHRlcm46IC8oXFxzKS0oPz1cXHMpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH1dO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzYXNzJywgJ3Byb3BlcnR5Jywge1xuICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICd2YXJpYWJsZS1saW5lJzoge1xuICAgICAgcGF0dGVybjogL15bIFxcdF0qXFwkLisvbSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncHVuY3R1YXRpb24nOiAvOi8sXG4gICAgICAgICd2YXJpYWJsZSc6IHZhcmlhYmxlLFxuICAgICAgICAnb3BlcmF0b3InOiBvcGVyYXRvclxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gV2Ugd2FudCB0byBjb25zdW1lIHRoZSB3aG9sZSBsaW5lXG4gICAgJ3Byb3BlcnR5LWxpbmUnOiB7XG4gICAgICBwYXR0ZXJuOiAvXlsgXFx0XSooPzpbXjpcXHNdKyAqOi4qfDpbXjpcXHNdLiopL20sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3Byb3BlcnR5JzogWy9bXjpcXHNdKyg/PVxccyo6KS8sIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKDopW146XFxzXSsvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfV0sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC86LyxcbiAgICAgICAgJ3ZhcmlhYmxlJzogdmFyaWFibGUsXG4gICAgICAgICdvcGVyYXRvcic6IG9wZXJhdG9yLFxuICAgICAgICAnaW1wb3J0YW50JzogUHJpc20ubGFuZ3VhZ2VzLnNhc3MuaW1wb3J0YW50XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5zYXNzLnByb3BlcnR5O1xuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MuaW1wb3J0YW50OyAvLyBOb3cgdGhhdCB3aG9sZSBsaW5lcyBmb3Igb3RoZXIgcGF0dGVybnMgYXJlIGNvbnN1bWVkLFxuICAvLyB3aGF0J3MgbGVmdCBzaG91bGQgYmUgc2VsZWN0b3JzXG5cbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2FzcycsICdwdW5jdHVhdGlvbicsIHtcbiAgICAnc2VsZWN0b3InOiB7XG4gICAgICBwYXR0ZXJuOiAvXihbIFxcdF0qKVxcUyg/OixbXixcXHJcXG5dK3xbXixcXHJcXG5dKikoPzosW14sXFxyXFxuXSspKig/OiwoPzpcXHI/XFxufFxccilcXDFbIFxcdF0rXFxTKD86LFteLFxcclxcbl0rfFteLFxcclxcbl0qKSg/OixbXixcXHJcXG5dKykqKSovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pO1xufSkocHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc2Nzc1wiICovXG5cblxucHJpc20ubGFuZ3VhZ2VzLnNjc3MgPSBwcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sXG4gICdhdHJ1bGUnOiB7XG4gICAgcGF0dGVybjogL0BbXFx3LV0oPzpcXChbXigpXStcXCl8W14oKVxcc118XFxzKyg/IVxccykpKj8oPz1cXHMrW3s7XSkvLFxuICAgIGluc2lkZToge1xuICAgICAgJ3J1bGUnOiAvQFtcXHctXSsvIC8vIFNlZSByZXN0IGJlbG93XG5cbiAgICB9XG4gIH0sXG4gIC8vIHVybCwgY29tcGFzc2lmaWVkXG4gICd1cmwnOiAvKD86Wy1hLXpdKy0pP3VybCg/PVxcKCkvaSxcbiAgLy8gQ1NTIHNlbGVjdG9yIHJlZ2V4IGlzIG5vdCBhcHByb3ByaWF0ZSBmb3IgU2Fzc1xuICAvLyBzaW5jZSB0aGVyZSBjYW4gYmUgbG90IG1vcmUgdGhpbmdzICh2YXIsIEAgZGlyZWN0aXZlLCBuZXN0aW5nLi4pXG4gIC8vIGEgc2VsZWN0b3IgbXVzdCBzdGFydCBhdCB0aGUgZW5kIG9mIGEgcHJvcGVydHkgb3IgYWZ0ZXIgYSBicmFjZSAoZW5kIG9mIG90aGVyIHJ1bGVzIG9yIG5lc3RpbmcpXG4gIC8vIGl0IGNhbiBjb250YWluIHNvbWUgY2hhcmFjdGVycyB0aGF0IGFyZW4ndCB1c2VkIGZvciBkZWZpbmluZyBydWxlcyBvciBlbmQgb2Ygc2VsZWN0b3IsICYgKHBhcmVudCBzZWxlY3RvciksIG9yIGludGVycG9sYXRlZCB2YXJpYWJsZVxuICAvLyB0aGUgZW5kIG9mIGEgc2VsZWN0b3IgaXMgZm91bmQgd2hlbiB0aGVyZSBpcyBubyBydWxlcyBpbiBpdCAoIHt9IG9yIHtcXHN9KSBvciBpZiB0aGVyZSBpcyBhIHByb3BlcnR5IChiZWNhdXNlIGFuIGludGVycG9sYXRlZCB2YXJcbiAgLy8gY2FuIFwicGFzc1wiIGFzIGEgc2VsZWN0b3ItIGUuZzogcHJvcGVyI3skZXJ0eX0pXG4gIC8vIHRoaXMgb25lIHdhcyBoYXJkIHRvIGRvLCBzbyBwbGVhc2UgYmUgY2FyZWZ1bCBpZiB5b3UgZWRpdCB0aGlzIG9uZSA6KVxuICAnc2VsZWN0b3InOiB7XG4gICAgLy8gSW5pdGlhbCBsb29rLWFoZWFkIGlzIHVzZWQgdG8gcHJldmVudCBtYXRjaGluZyBvZiBibGFuayBzZWxlY3RvcnNcbiAgICBwYXR0ZXJuOiAvKD89XFxTKVteQDt7fSgpXT8oPzpbXkA7e30oKVxcc118XFxzKyg/IVxccyl8I1xce1xcJFstXFx3XStcXH0pKyg/PVxccypcXHsoPzpcXH18XFxzfFtefV1bXjp7fV0qWzp7XVtefV0pKS8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncGFyZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvJi8sXG4gICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgfSxcbiAgICAgICdwbGFjZWhvbGRlcic6IC8lWy1cXHddKy8sXG4gICAgICAndmFyaWFibGUnOiAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbiAgICB9XG4gIH0sXG4gICdwcm9wZXJ0eSc6IHtcbiAgICBwYXR0ZXJuOiAvKD86Wy1cXHddfFxcJFstXFx3XXwjXFx7XFwkWy1cXHddK1xcfSkrKD89XFxzKjopLyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICd2YXJpYWJsZSc6IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9L1xuICAgIH1cbiAgfVxufSk7XG5wcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzY3NzJywgJ2F0cnVsZScsIHtcbiAgJ2tleXdvcmQnOiBbL0AoPzpjb250ZW50fGRlYnVnfGVhY2h8ZWxzZSg/OiBpZik/fGV4dGVuZHxmb3J8Zm9yd2FyZHxmdW5jdGlvbnxpZnxpbXBvcnR8aW5jbHVkZXxtaXhpbnxyZXR1cm58dXNlfHdhcm58d2hpbGUpXFxiL2ksIHtcbiAgICBwYXR0ZXJuOiAvKCApKD86ZnJvbXx0aHJvdWdoKSg/PSApLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH1dXG59KTtcbnByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Njc3MnLCAnaW1wb3J0YW50Jywge1xuICAvLyB2YXIgYW5kIGludGVycG9sYXRlZCB2YXJzXG4gICd2YXJpYWJsZSc6IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9L1xufSk7XG5wcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzY3NzJywgJ2Z1bmN0aW9uJywge1xuICAnbW9kdWxlLW1vZGlmaWVyJzoge1xuICAgIHBhdHRlcm46IC9cXGIoPzphc3xoaWRlfHNob3d8d2l0aClcXGIvaSxcbiAgICBhbGlhczogJ2tleXdvcmQnXG4gIH0sXG4gICdwbGFjZWhvbGRlcic6IHtcbiAgICBwYXR0ZXJuOiAvJVstXFx3XSsvLFxuICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gIH0sXG4gICdzdGF0ZW1lbnQnOiB7XG4gICAgcGF0dGVybjogL1xcQiEoPzpkZWZhdWx0fG9wdGlvbmFsKVxcYi9pLFxuICAgIGFsaWFzOiAna2V5d29yZCdcbiAgfSxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAnbnVsbCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgYWxpYXM6ICdrZXl3b3JkJ1xuICB9LFxuICAnb3BlcmF0b3InOiB7XG4gICAgcGF0dGVybjogLyhcXHMpKD86Wy0rKlxcLyVdfFs9IV09fDw9P3w+PT98YW5kfG5vdHxvcikoPz1cXHMpLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH1cbn0pO1xucHJpc20ubGFuZ3VhZ2VzLnNjc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gcHJpc20ubGFuZ3VhZ2VzLnNjc3M7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zcWxcIiAqL1xuXG5wcmlzbS5sYW5ndWFnZXMuc3FsID0ge1xuICAnY29tbWVudCc6IHtcbiAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkoPzpcXC9cXCpbXFxzXFxTXSo/XFwqXFwvfCg/Oi0tfFxcL1xcL3wjKS4qKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAndmFyaWFibGUnOiBbe1xuICAgIHBhdHRlcm46IC9AKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pK1xcMS8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sIC9AW1xcdy4kXSsvXSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKF58W15AXFxcXF0pKFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMilbXlxcXFxdfFxcMlxcMikqXFwyLyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAnaWRlbnRpZmllcic6IHtcbiAgICBwYXR0ZXJuOiAvKF58W15AXFxcXF0pYCg/OlxcXFxbXFxzXFxTXXxbXmBcXFxcXXxgYCkqYC8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvXmB8YCQvXG4gICAgfVxuICB9LFxuICAnZnVuY3Rpb24nOiAvXFxiKD86QVZHfENPVU5UfEZJUlNUfEZPUk1BVHxMQVNUfExDQVNFfExFTnxNQVh8TUlEfE1JTnxNT0R8Tk9XfFJPVU5EfFNVTXxVQ0FTRSkoPz1cXHMqXFwoKS9pLFxuICAvLyBTaG91bGQgd2UgaGlnaGxpZ2h0IHVzZXIgZGVmaW5lZCBmdW5jdGlvbnMgdG9vP1xuICAna2V5d29yZCc6IC9cXGIoPzpBQ1RJT058QUREfEFGVEVSfEFMR09SSVRITXxBTEx8QUxURVJ8QU5BTFlaRXxBTll8QVBQTFl8QVN8QVNDfEFVVEhPUklaQVRJT058QVVUT19JTkNSRU1FTlR8QkFDS1VQfEJEQnxCRUdJTnxCRVJLRUxFWURCfEJJR0lOVHxCSU5BUll8QklUfEJMT0J8Qk9PTHxCT09MRUFOfEJSRUFLfEJST1dTRXxCVFJFRXxCVUxLfEJZfENBTEx8Q0FTQ0FERUQ/fENBU0V8Q0hBSU58Q0hBUig/OkFDVEVSfFNFVCk/fENIRUNLKD86UE9JTlQpP3xDTE9TRXxDTFVTVEVSRUR8Q09BTEVTQ0V8Q09MTEFURXxDT0xVTU5TP3xDT01NRU5UfENPTU1JVCg/OlRFRCk/fENPTVBVVEV8Q09OTkVDVHxDT05TSVNURU5UfENPTlNUUkFJTlR8Q09OVEFJTlMoPzpUQUJMRSk/fENPTlRJTlVFfENPTlZFUlR8Q1JFQVRFfENST1NTfENVUlJFTlQoPzpfREFURXxfVElNRXxfVElNRVNUQU1QfF9VU0VSKT98Q1VSU09SfENZQ0xFfERBVEEoPzpCQVNFUz8pP3xEQVRFKD86VElNRSk/fERBWXxEQkNDfERFQUxMT0NBVEV8REVDfERFQ0lNQUx8REVDTEFSRXxERUZBVUxUfERFRklORVJ8REVMQVlFRHxERUxFVEV8REVMSU1JVEVSUz98REVOWXxERVNDfERFU0NSSUJFfERFVEVSTUlOSVNUSUN8RElTQUJMRXxESVNDQVJEfERJU0t8RElTVElOQ1R8RElTVElOQ1RST1d8RElTVFJJQlVURUR8RE98RE9VQkxFfERST1B8RFVNTVl8RFVNUCg/OkZJTEUpP3xEVVBMSUNBVEV8RUxTRSg/OklGKT98RU5BQkxFfEVOQ0xPU0VEfEVORHxFTkdJTkV8RU5VTXxFUlJMVkx8RVJST1JTfEVTQ0FQRUQ/fEVYQ0VQVHxFWEVDKD86VVRFKT98RVhJU1RTfEVYSVR8RVhQTEFJTnxFWFRFTkRFRHxGRVRDSHxGSUVMRFN8RklMRXxGSUxMRkFDVE9SfEZJUlNUfEZJWEVEfEZMT0FUfEZPTExPV0lOR3xGT1IoPzogRUFDSCBST1cpP3xGT1JDRXxGT1JFSUdOfEZSRUVURVhUKD86VEFCTEUpP3xGUk9NfEZVTEx8RlVOQ1RJT058R0VPTUVUUlkoPzpDT0xMRUNUSU9OKT98R0xPQkFMfEdPVE98R1JBTlR8R1JPVVB8SEFORExFUnxIQVNIfEhBVklOR3xIT0xETE9DS3xIT1VSfElERU5USVRZKD86Q09MfF9JTlNFUlQpP3xJRnxJR05PUkV8SU1QT1JUfElOREVYfElORklMRXxJTk5FUnxJTk5PREJ8SU5PVVR8SU5TRVJUfElOVHxJTlRFR0VSfElOVEVSU0VDVHxJTlRFUlZBTHxJTlRPfElOVk9LRVJ8SVNPTEFUSU9OfElURVJBVEV8Sk9JTnxLRVlTP3xLSUxMfExBTkdVQUdFfExBU1R8TEVBVkV8TEVGVHxMRVZFTHxMSU1JVHxMSU5FTk98TElORVN8TElORVNUUklOR3xMT0FEfExPQ0FMfExPQ0t8TE9ORyg/OkJMT0J8VEVYVCl8TE9PUHxNQVRDSCg/OkVEKT98TUVESVVNKD86QkxPQnxJTlR8VEVYVCl8TUVSR0V8TUlERExFSU5UfE1JTlVURXxNT0RFfE1PRElGSUVTfE1PRElGWXxNT05USHxNVUxUSSg/OkxJTkVTVFJJTkd8UE9JTlR8UE9MWUdPTil8TkFUSU9OQUx8TkFUVVJBTHxOQ0hBUnxORVhUfE5PfE5PTkNMVVNURVJFRHxOVUxMSUZ8TlVNRVJJQ3xPRkY/fE9GRlNFVFM/fE9OfE9QRU4oPzpEQVRBU09VUkNFfFFVRVJZfFJPV1NFVCk/fE9QVElNSVpFfE9QVElPTig/OkFMTFkpP3xPUkRFUnxPVVQoPzpFUnxGSUxFKT98T1ZFUnxQQVJUSUFMfFBBUlRJVElPTnxQRVJDRU5UfFBJVk9UfFBMQU58UE9JTlR8UE9MWUdPTnxQUkVDRURJTkd8UFJFQ0lTSU9OfFBSRVBBUkV8UFJFVnxQUklNQVJZfFBSSU5UfFBSSVZJTEVHRVN8UFJPQyg/OkVEVVJFKT98UFVCTElDfFBVUkdFfFFVSUNLfFJBSVNFUlJPUnxSRUFEUz98UkVBTHxSRUNPTkZJR1VSRXxSRUZFUkVOQ0VTfFJFTEVBU0V8UkVOQU1FfFJFUEVBVCg/OkFCTEUpP3xSRVBMQUNFfFJFUExJQ0FUSU9OfFJFUVVJUkV8UkVTSUdOQUx8UkVTVE9SRXxSRVNUUklDVHxSRVRVUk4oPzpJTkd8Uyk/fFJFVk9LRXxSSUdIVHxST0xMQkFDS3xST1VUSU5FfFJPVyg/OkNPVU5UfEdVSURDT0x8Uyk/fFJUUkVFfFJVTEV8U0FWRSg/OlBPSU5UKT98U0NIRU1BfFNFQ09ORHxTRUxFQ1R8U0VSSUFMKD86SVpBQkxFKT98U0VTU0lPTig/Ol9VU0VSKT98U0VUKD86VVNFUik/fFNIQVJFfFNIT1d8U0hVVERPV058U0lNUExFfFNNQUxMSU5UfFNOQVBTSE9UfFNPTUV8U09OQU1FfFNRTHxTVEFSVCg/OklORyk/fFNUQVRJU1RJQ1N8U1RBVFVTfFNUUklQRUR8U1lTVEVNX1VTRVJ8VEFCTEVTP3xUQUJMRVNQQUNFfFRFTVAoPzpPUkFSWXxUQUJMRSk/fFRFUk1JTkFURUR8VEVYVCg/OlNJWkUpP3xUSEVOfFRJTUUoPzpTVEFNUCk/fFRJTlkoPzpCTE9CfElOVHxURVhUKXxUT1A/fFRSQU4oPzpTQUNUSU9OUz8pP3xUUklHR0VSfFRSVU5DQVRFfFRTRVFVQUx8VFlQRVM/fFVOQk9VTkRFRHxVTkNPTU1JVFRFRHxVTkRFRklORUR8VU5JT058VU5JUVVFfFVOTE9DS3xVTlBJVk9UfFVOU0lHTkVEfFVQREFURSg/OlRFWFQpP3xVU0FHRXxVU0V8VVNFUnxVU0lOR3xWQUxVRVM/fFZBUig/OkJJTkFSWXxDSEFSfENIQVJBQ1RFUnxZSU5HKXxWSUVXfFdBSVRGT1J8V0FSTklOR1N8V0hFTnxXSEVSRXxXSElMRXxXSVRIKD86IFJPTExVUHxJTik/fFdPUkt8V1JJVEUoPzpURVhUKT98WUVBUilcXGIvaSxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86RkFMU0V8TlVMTHxUUlVFKVxcYi9pLFxuICAnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifFxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkK1xcYi9pLFxuICAnb3BlcmF0b3InOiAvWy0rKlxcLz0lXn5dfCYmP3xcXHxcXHw/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dP3xcXGIoPzpBTkR8QkVUV0VFTnxESVZ8SUxJS0V8SU58SVN8TElLRXxOT1R8T1J8UkVHRVhQfFJMSUtFfFNPVU5EUyBMSUtFfFhPUilcXGIvaSxcbiAgJ3B1bmN0dWF0aW9uJzogL1s7W1xcXSgpYCwuXS9cbn07XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zdHlsdXNcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIHZhciB1bml0ID0ge1xuICAgIHBhdHRlcm46IC8oXFxiXFxkKykoPzolfFthLXpdKykvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfTsgLy8gMTIzIC0xMjMgLjEyMyAtLjEyMyAxMi4zIC0xMi4zXG5cbiAgdmFyIG51bWJlciA9IHtcbiAgICBwYXR0ZXJuOiAvKF58W15cXHcuLV0pLT8oPzpcXGQrKD86XFwuXFxkKyk/fFxcLlxcZCspLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH07XG4gIHZhciBpbnNpZGUgPSB7XG4gICAgJ2NvbW1lbnQnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkoPzpcXC9cXCpbXFxzXFxTXSo/XFwqXFwvfFxcL1xcLy4qKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAndXJsJzoge1xuICAgICAgcGF0dGVybjogL1xcYnVybFxcKChbXCInXT8pLio/XFwxXFwpL2ksXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdzdHJpbmcnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFwifCcpKD86KD8hXFwxKVteXFxcXFxcclxcbl18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdpbnRlcnBvbGF0aW9uJzogbnVsbCxcbiAgICAvLyBTZWUgYmVsb3dcbiAgICAnZnVuYyc6IG51bGwsXG4gICAgLy8gU2VlIGJlbG93XG4gICAgJ2ltcG9ydGFudCc6IC9cXEIhKD86aW1wb3J0YW50fG9wdGlvbmFsKVxcYi9pLFxuICAgICdrZXl3b3JkJzoge1xuICAgICAgcGF0dGVybjogLyhefFxccyspKD86KD86ZWxzZXxmb3J8aWZ8cmV0dXJufHVubGVzcykoPz1cXHN8JCl8QFtcXHctXSspLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdoZXhjb2RlJzogLyNbXFxkYS1mXXszLDZ9L2ksXG4gICAgJ2NvbG9yJzogWy9cXGIoPzpBbGljZUJsdWV8QW50aXF1ZVdoaXRlfEFxdWF8QXF1YW1hcmluZXxBenVyZXxCZWlnZXxCaXNxdWV8QmxhY2t8QmxhbmNoZWRBbG1vbmR8Qmx1ZXxCbHVlVmlvbGV0fEJyb3dufEJ1cmx5V29vZHxDYWRldEJsdWV8Q2hhcnRyZXVzZXxDaG9jb2xhdGV8Q29yYWx8Q29ybmZsb3dlckJsdWV8Q29ybnNpbGt8Q3JpbXNvbnxDeWFufERhcmtCbHVlfERhcmtDeWFufERhcmtHb2xkZW5Sb2R8RGFya0dyW2FlXXl8RGFya0dyZWVufERhcmtLaGFraXxEYXJrTWFnZW50YXxEYXJrT2xpdmVHcmVlbnxEYXJrT3JhbmdlfERhcmtPcmNoaWR8RGFya1JlZHxEYXJrU2FsbW9ufERhcmtTZWFHcmVlbnxEYXJrU2xhdGVCbHVlfERhcmtTbGF0ZUdyW2FlXXl8RGFya1R1cnF1b2lzZXxEYXJrVmlvbGV0fERlZXBQaW5rfERlZXBTa3lCbHVlfERpbUdyW2FlXXl8RG9kZ2VyQmx1ZXxGaXJlQnJpY2t8RmxvcmFsV2hpdGV8Rm9yZXN0R3JlZW58RnVjaHNpYXxHYWluc2Jvcm98R2hvc3RXaGl0ZXxHb2xkfEdvbGRlblJvZHxHclthZV15fEdyZWVufEdyZWVuWWVsbG93fEhvbmV5RGV3fEhvdFBpbmt8SW5kaWFuUmVkfEluZGlnb3xJdm9yeXxLaGFraXxMYXZlbmRlcnxMYXZlbmRlckJsdXNofExhd25HcmVlbnxMZW1vbkNoaWZmb258TGlnaHRCbHVlfExpZ2h0Q29yYWx8TGlnaHRDeWFufExpZ2h0R29sZGVuUm9kWWVsbG93fExpZ2h0R3JbYWVdeXxMaWdodEdyZWVufExpZ2h0UGlua3xMaWdodFNhbG1vbnxMaWdodFNlYUdyZWVufExpZ2h0U2t5Qmx1ZXxMaWdodFNsYXRlR3JbYWVdeXxMaWdodFN0ZWVsQmx1ZXxMaWdodFllbGxvd3xMaW1lfExpbWVHcmVlbnxMaW5lbnxNYWdlbnRhfE1hcm9vbnxNZWRpdW1BcXVhTWFyaW5lfE1lZGl1bUJsdWV8TWVkaXVtT3JjaGlkfE1lZGl1bVB1cnBsZXxNZWRpdW1TZWFHcmVlbnxNZWRpdW1TbGF0ZUJsdWV8TWVkaXVtU3ByaW5nR3JlZW58TWVkaXVtVHVycXVvaXNlfE1lZGl1bVZpb2xldFJlZHxNaWRuaWdodEJsdWV8TWludENyZWFtfE1pc3R5Um9zZXxNb2NjYXNpbnxOYXZham9XaGl0ZXxOYXZ5fE9sZExhY2V8T2xpdmV8T2xpdmVEcmFifE9yYW5nZXxPcmFuZ2VSZWR8T3JjaGlkfFBhbGVHb2xkZW5Sb2R8UGFsZUdyZWVufFBhbGVUdXJxdW9pc2V8UGFsZVZpb2xldFJlZHxQYXBheWFXaGlwfFBlYWNoUHVmZnxQZXJ1fFBpbmt8UGx1bXxQb3dkZXJCbHVlfFB1cnBsZXxSZWR8Um9zeUJyb3dufFJveWFsQmx1ZXxTYWRkbGVCcm93bnxTYWxtb258U2FuZHlCcm93bnxTZWFHcmVlbnxTZWFTaGVsbHxTaWVubmF8U2lsdmVyfFNreUJsdWV8U2xhdGVCbHVlfFNsYXRlR3JbYWVdeXxTbm93fFNwcmluZ0dyZWVufFN0ZWVsQmx1ZXxUYW58VGVhbHxUaGlzdGxlfFRvbWF0b3xUcmFuc3BhcmVudHxUdXJxdW9pc2V8VmlvbGV0fFdoZWF0fFdoaXRlfFdoaXRlU21va2V8WWVsbG93fFllbGxvd0dyZWVuKVxcYi9pLCB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86aHNsfHJnYilcXChcXHMqXFxkezEsM31cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqXFxkezEsM30lP1xccypcXClcXEJ8XFxiKD86aHNsfHJnYilhXFwoXFxzKlxcZHsxLDN9XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccyooPzowfDA/XFwuXFxkK3wxKVxccypcXClcXEIvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAndW5pdCc6IHVuaXQsXG4gICAgICAgICdudW1iZXInOiBudW1iZXIsXG4gICAgICAgICdmdW5jdGlvbic6IC9bXFx3LV0rKD89XFwoKS8sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9bKCksXS9cbiAgICAgIH1cbiAgICB9XSxcbiAgICAnZW50aXR5JzogL1xcXFxbXFxkYS1mXXsxLDh9L2ksXG4gICAgJ3VuaXQnOiB1bml0LFxuICAgICdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgICAnb3BlcmF0b3InOiBbLy8gV2Ugd2FudCBub24td29yZCBjaGFycyBhcm91bmQgXCItXCIgYmVjYXVzZSBpdCBpc1xuICAgIC8vIGFjY2VwdGVkIGluIHByb3BlcnR5IG5hbWVzLlxuICAgIC9+fFsrIVxcLyU8Pj89XT0/fFstOl09fFxcKlsqPV0/fFxcLnsyLDN9fCYmfFxcfFxcfHxcXEItXFxCfFxcYig/OmFuZHxpbnxpcyg/OiBhfCBkZWZpbmVkfCBub3R8bnQpP3xub3R8b3IpXFxiL10sXG4gICAgJ251bWJlcic6IG51bWJlcixcbiAgICAncHVuY3R1YXRpb24nOiAvW3t9KClcXFtcXF07OixdL1xuICB9O1xuICBpbnNpZGVbJ2ludGVycG9sYXRpb24nXSA9IHtcbiAgICBwYXR0ZXJuOiAvXFx7W15cXHJcXG59Ol0rXFx9LyxcbiAgICBhbGlhczogJ3ZhcmlhYmxlJyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdkZWxpbWl0ZXInOiB7XG4gICAgICAgIHBhdHRlcm46IC9eXFx7fFxcfSQvLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIHJlc3Q6IGluc2lkZVxuICAgIH1cbiAgfTtcbiAgaW5zaWRlWydmdW5jJ10gPSB7XG4gICAgcGF0dGVybjogL1tcXHctXStcXChbXildKlxcKS4qLyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdmdW5jdGlvbic6IC9eW14oXSsvLFxuICAgICAgcmVzdDogaW5zaWRlXG4gICAgfVxuICB9O1xuICBQcmlzbS5sYW5ndWFnZXMuc3R5bHVzID0ge1xuICAgICdhdHJ1bGUtZGVjbGFyYXRpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKUAuKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnYXRydWxlJzogL15AW1xcdy1dKy8sXG4gICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgfVxuICAgIH0sXG4gICAgJ3ZhcmlhYmxlLWRlY2xhcmF0aW9uJzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKilbXFx3JC1dK1xccyouPz1bIFxcdF0qKD86XFx7W157fV0qXFx9fFxcUy4qfCQpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd2YXJpYWJsZSc6IC9eXFxTKy8sXG4gICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgfVxuICAgIH0sXG4gICAgJ3N0YXRlbWVudCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopKD86ZWxzZXxmb3J8aWZ8cmV0dXJufHVubGVzcylbIFxcdF0uKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAna2V5d29yZCc6IC9eXFxTKy8sXG4gICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQSBwcm9wZXJ0eS92YWx1ZSBwYWlyIGNhbm5vdCBlbmQgd2l0aCBhIGNvbW1hIG9yIGEgYnJhY2VcbiAgICAvLyBJdCBjYW5ub3QgaGF2ZSBpbmRlbnRlZCBjb250ZW50IHVubGVzcyBpdCBlbmRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gICAgJ3Byb3BlcnR5LWRlY2xhcmF0aW9uJzoge1xuICAgICAgcGF0dGVybjogLygoPzpefFxceykoWyBcXHRdKikpKD86W1xcdy1dfFxce1tefVxcclxcbl0rXFx9KSsoPzpcXHMqOlxccyp8WyBcXHRdKykoPyFcXHMpW157XFxyXFxuXSooPzo7fFtee1xcclxcbixdJCg/ISg/Olxccj9cXG58XFxyKSg/Olxce3xcXDJbIFxcdF0pKSkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3Byb3BlcnR5Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eW15cXHM6XSsvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ2ludGVycG9sYXRpb24nOiBpbnNpZGUuaW50ZXJwb2xhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBBIHNlbGVjdG9yIGNhbiBjb250YWluIHBhcmVudGhlc2VzIG9ubHkgYXMgcGFydCBvZiBhIHBzZXVkby1lbGVtZW50XG4gICAgLy8gSXQgY2FuIHNwYW4gbXVsdGlwbGUgbGluZXMuXG4gICAgLy8gSXQgbXVzdCBlbmQgd2l0aCBhIGNvbW1hIG9yIGFuIGFjY29sYWRlIG9yIGhhdmUgaW5kZW50ZWQgY29udGVudC5cbiAgICAnc2VsZWN0b3InOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKSg/Oig/PVxcUykoPzpbXnt9XFxyXFxuOigpXXw6Oj9bXFx3LV0rKD86XFwoW14pXFxyXFxuXSpcXCl8KD8hW1xcdy1dKSl8XFx7W159XFxyXFxuXStcXH0pKykoPzooPzpcXHI/XFxufFxccikoPzpcXDEoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpfCg/IVtcXHctXSkpfFxce1tefVxcclxcbl0rXFx9KSspKSkqKD86LCR8XFx7fCg/PSg/Olxccj9cXG58XFxyKSg/Olxce3xcXDFbIFxcdF0pKSkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2ludGVycG9sYXRpb24nOiBpbnNpZGUuaW50ZXJwb2xhdGlvbixcbiAgICAgICAgJ2NvbW1lbnQnOiBpbnNpZGUuY29tbWVudCxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1t7fSxdL1xuICAgICAgfVxuICAgIH0sXG4gICAgJ2Z1bmMnOiBpbnNpZGUuZnVuYyxcbiAgICAnc3RyaW5nJzogaW5zaWRlLnN0cmluZyxcbiAgICAnY29tbWVudCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdpbnRlcnBvbGF0aW9uJzogaW5zaWRlLmludGVycG9sYXRpb24sXG4gICAgJ3B1bmN0dWF0aW9uJzogL1t7fSgpXFxbXFxdOzouXS9cbiAgfTtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhc2NyaXB0Jywge1xuICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLyhcXGIoPzpjbGFzc3xleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxpbnRlcmZhY2V8bmV3fHR5cGUpXFxzKykoPyFrZXlvZlxcYikoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD86XFxzKjwoPzpbXjw+XXw8KD86W148Pl18PFtePD5dKj4pKj4pKj4pPy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuXG4gICAgfSxcbiAgICAnYnVpbHRpbic6IC9cXGIoPzpBcnJheXxGdW5jdGlvbnxQcm9taXNlfGFueXxib29sZWFufGNvbnNvbGV8bmV2ZXJ8bnVtYmVyfHN0cmluZ3xzeW1ib2x8dW5rbm93bilcXGIvXG4gIH0pOyAvLyBUaGUga2V5d29yZHMgVHlwZVNjcmlwdCBhZGRzIHRvIEphdmFTY3JpcHRcblxuICBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdC5rZXl3b3JkLnB1c2goL1xcYig/OmFic3RyYWN0fGRlY2xhcmV8aXN8a2V5b2Z8cmVhZG9ubHl8cmVxdWlyZSlcXGIvLCAvLyBrZXl3b3JkcyB0aGF0IGhhdmUgdG8gYmUgZm9sbG93ZWQgYnkgYW4gaWRlbnRpZmllclxuICAvXFxiKD86YXNzZXJ0c3xpbmZlcnxpbnRlcmZhY2V8bW9kdWxlfG5hbWVzcGFjZXx0eXBlKVxcYig/PVxccyooPzpbe18kYS16QS1aXFx4QTAtXFx1RkZGRl18JCkpLywgLy8gVGhpcyBpcyBmb3IgYGltcG9ydCB0eXBlICosIHt9YFxuICAvXFxidHlwZVxcYig/PVxccyooPzpbXFx7Kl18JCkpLyk7IC8vIGRvZXNuJ3Qgd29yayB3aXRoIFRTIGJlY2F1c2UgVFMgaXMgdG9vIGNvbXBsZXhcblxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRbJ3BhcmFtZXRlciddO1xuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRbJ2xpdGVyYWwtcHJvcGVydHknXTsgLy8gYSB2ZXJzaW9uIG9mIHR5cGVzY3JpcHQgc3BlY2lmaWNhbGx5IGZvciBoaWdobGlnaHRpbmcgdHlwZXNcblxuICB2YXIgdHlwZUluc2lkZSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ3R5cGVzY3JpcHQnLCB7fSk7XG4gIGRlbGV0ZSB0eXBlSW5zaWRlWydjbGFzcy1uYW1lJ107XG4gIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0WydjbGFzcy1uYW1lJ10uaW5zaWRlID0gdHlwZUluc2lkZTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgndHlwZXNjcmlwdCcsICdmdW5jdGlvbicsIHtcbiAgICAnZGVjb3JhdG9yJzoge1xuICAgICAgcGF0dGVybjogL0BbJFxcd1xceEEwLVxcdUZGRkZdKy8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2F0Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eQC8sXG4gICAgICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICAgICAgfSxcbiAgICAgICAgJ2Z1bmN0aW9uJzogL15bXFxzXFxTXSsvXG4gICAgICB9XG4gICAgfSxcbiAgICAnZ2VuZXJpYy1mdW5jdGlvbic6IHtcbiAgICAgIC8vIGUuZy4gZm9vPFQgZXh0ZW5kcyBcImJhclwiIHwgXCJiYXpcIj4oIC4uLlxuICAgICAgcGF0dGVybjogLyM/KD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKlxccyo8KD86W148Pl18PCg/OltePD5dfDxbXjw+XSo+KSo+KSo+KD89XFxzKlxcKCkvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdmdW5jdGlvbic6IC9eIz8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqLyxcbiAgICAgICAgJ2dlbmVyaWMnOiB7XG4gICAgICAgICAgcGF0dGVybjogLzxbXFxzXFxTXSsvLFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IDxcbiAgICAgICAgICBhbGlhczogJ2NsYXNzLW5hbWUnLFxuICAgICAgICAgIGluc2lkZTogdHlwZUluc2lkZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLnRzID0gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQ7XG59KShwcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIHR5cGVzY3JpcHQgPSBQcmlzbS51dGlsLmNsb25lKFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLnRzeCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2pzeCcsIHR5cGVzY3JpcHQpOyAvLyBkb2Vzbid0IHdvcmsgd2l0aCBUUyBiZWNhdXNlIFRTIGlzIHRvbyBjb21wbGV4XG5cbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy50c3hbJ3BhcmFtZXRlciddO1xuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnRzeFsnbGl0ZXJhbC1wcm9wZXJ0eSddOyAvLyBUaGlzIHdpbGwgcHJldmVudCBjb2xsaXNpb25zIGJldHdlZW4gVFNYIHRhZ3MgYW5kIFRTIGdlbmVyaWMgdHlwZXMuXG4gIC8vIElkZWEgYnkgaHR0cHM6Ly9naXRodWIuY29tL2thcmxob3JreVxuICAvLyBEaXNjdXNzaW9uOiBodHRwczovL2dpdGh1Yi5jb20vUHJpc21KUy9wcmlzbS9pc3N1ZXMvMjU5NCNpc3N1ZWNvbW1lbnQtNzEwNjY2OTI4XG5cbiAgdmFyIHRhZyA9IFByaXNtLmxhbmd1YWdlcy50c3gudGFnO1xuICB0YWcucGF0dGVybiA9IFJlZ0V4cCgvKF58W15cXHckXXwoPz08XFwvKSkvLnNvdXJjZSArICcoPzonICsgdGFnLnBhdHRlcm4uc291cmNlICsgJyknLCB0YWcucGF0dGVybi5mbGFncyk7XG4gIHRhZy5sb29rYmVoaW5kID0gdHJ1ZTtcbn0pKHByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXdhc21cIiAqL1xuXG5cbnByaXNtLmxhbmd1YWdlcy53YXNtID0ge1xuICAnY29tbWVudCc6IFsvXFwoO1tcXHNcXFNdKj87XFwpLywge1xuICAgIHBhdHRlcm46IC87Oy4qLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfV0sXG4gICdzdHJpbmcnOiB7XG4gICAgcGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXCJcXFxcXSkqXCIvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAna2V5d29yZCc6IFt7XG4gICAgcGF0dGVybjogL1xcYig/OmFsaWdufG9mZnNldCk9LyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdvcGVyYXRvcic6IC89L1xuICAgIH1cbiAgfSwge1xuICAgIHBhdHRlcm46IC9cXGIoPzooPzpmMzJ8ZjY0fGkzMnxpNjQpKD86XFwuKD86YWJzfGFkZHxhbmR8Y2VpbHxjbHp8Y29uc3R8Y29udmVydF9bc3VdXFwvaSg/OjMyfDY0KXxjb3B5c2lnbnxjdHp8ZGVtb3RlXFwvZjY0fGRpdig/Ol9bc3VdKT98ZXF6P3xleHRlbmRfW3N1XVxcL2kzMnxmbG9vcnxnZSg/Ol9bc3VdKT98Z3QoPzpfW3N1XSk/fGxlKD86X1tzdV0pP3xsb2FkKD86KD86OHwxNnwzMilfW3N1XSk/fGx0KD86X1tzdV0pP3xtYXh8bWlufG11bHxuZWc/fG5lYXJlc3R8b3J8cG9wY250fHByb21vdGVcXC9mMzJ8cmVpbnRlcnByZXRcXC9bZmldKD86MzJ8NjQpfHJlbV9bc3VdfHJvdFtscl18c2hsfHNocl9bc3VdfHNxcnR8c3RvcmUoPzo4fDE2fDMyKT98c3VifHRydW5jKD86X1tzdV1cXC9mKD86MzJ8NjQpKT98d3JhcFxcL2k2NHx4b3IpKT98bWVtb3J5XFwuKD86Z3Jvd3xzaXplKSlcXGIvLFxuICAgIGluc2lkZToge1xuICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcLi9cbiAgICB9XG4gIH0sIC9cXGIoPzphbnlmdW5jfGJsb2NrfGJyKD86X2lmfF90YWJsZSk/fGNhbGwoPzpfaW5kaXJlY3QpP3xkYXRhfGRyb3B8ZWxlbXxlbHNlfGVuZHxleHBvcnR8ZnVuY3xnZXRfKD86Z2xvYmFsfGxvY2FsKXxnbG9iYWx8aWZ8aW1wb3J0fGxvY2FsfGxvb3B8bWVtb3J5fG1vZHVsZXxtdXR8bm9wfG9mZnNldHxwYXJhbXxyZXN1bHR8cmV0dXJufHNlbGVjdHxzZXRfKD86Z2xvYmFsfGxvY2FsKXxzdGFydHx0YWJsZXx0ZWVfbG9jYWx8dGhlbnx0eXBlfHVucmVhY2hhYmxlKVxcYi9dLFxuICAndmFyaWFibGUnOiAvXFwkW1xcdyEjJCUmJyorXFwtLi86PD0+P0BcXFxcXmB8fl0rLyxcbiAgJ251bWJlcic6IC9bKy1dP1xcYig/OlxcZCg/Ol8/XFxkKSooPzpcXC5cXGQoPzpfP1xcZCkqKT8oPzpbZUVdWystXT9cXGQoPzpfP1xcZCkqKT98MHhbXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRl0pKig/OlxcLltcXGRhLWZBLUZdKD86Xz9bXFxkYS1mQS1EXSkqKT8oPzpbcFBdWystXT9cXGQoPzpfP1xcZCkqKT8pXFxifFxcYmluZlxcYnxcXGJuYW4oPzo6MHhbXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRF0pKik/XFxiLyxcbiAgJ3B1bmN0dWF0aW9uJzogL1soKV0vXG59O1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20teWFtbFwiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgLy8gaHR0cHM6Ly95YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjYy1ucy1hbmNob3ItcHJvcGVydHlcbiAgLy8gaHR0cHM6Ly95YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjYy1ucy1hbGlhcy1ub2RlXG4gIHZhciBhbmNob3JPckFsaWFzID0gL1sqJl1bXlxcc1tcXF17fSxdKy87IC8vIGh0dHBzOi8veWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2MtbnMtdGFnLXByb3BlcnR5XG5cbiAgdmFyIHRhZyA9IC8hKD86PFtcXHdcXC0lIzsvPzpAJj0rJCwuIX4qJygpW1xcXV0rPnwoPzpbYS16QS1aXFxkLV0qISk/W1xcd1xcLSUjOy8/OkAmPSskLn4qJygpXSspPy87IC8vIGh0dHBzOi8veWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2MtbnMtcHJvcGVydGllcyhuLGMpXG5cbiAgdmFyIHByb3BlcnRpZXMgPSAnKD86JyArIHRhZy5zb3VyY2UgKyAnKD86WyBcXHRdKycgKyBhbmNob3JPckFsaWFzLnNvdXJjZSArICcpP3wnICsgYW5jaG9yT3JBbGlhcy5zb3VyY2UgKyAnKD86WyBcXHRdKycgKyB0YWcuc291cmNlICsgJyk/KSc7IC8vIGh0dHBzOi8veWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI25zLXBsYWluKG4sYylcbiAgLy8gVGhpcyBpcyBhIHNpbXBsaWZpZWQgdmVyc2lvbiB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBcIiNcIiBhbmQgbXVsdGlsaW5lIGtleXNcbiAgLy8gQWxsIHRoZXNlIGxvbmcgc2NhcnJ5IGNoYXJhY3RlciBjbGFzc2VzIGFyZSBzaW1wbGlmaWVkIHZlcnNpb25zIG9mIFlBTUwncyBjaGFyYWN0ZXJzXG5cbiAgdmFyIHBsYWluS2V5ID0gLyg/OlteXFxzXFx4MDAtXFx4MDhcXHgwZS1cXHgxZiFcIiMlJicqLFxcLTo+P0BbXFxdYHt8fVxceDdmLVxceDg0XFx4ODYtXFx4OWZcXHVkODAwLVxcdWRmZmZcXHVmZmZlXFx1ZmZmZl18Wz86LV08UExBSU4+KSg/OlsgXFx0XSooPzooPyFbIzpdKTxQTEFJTj58OjxQTEFJTj4pKSovLnNvdXJjZS5yZXBsYWNlKC88UExBSU4+L2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gL1teXFxzXFx4MDAtXFx4MDhcXHgwZS1cXHgxZixbXFxde31cXHg3Zi1cXHg4NFxceDg2LVxceDlmXFx1ZDgwMC1cXHVkZmZmXFx1ZmZmZVxcdWZmZmZdLy5zb3VyY2U7XG4gIH0pO1xuICB2YXIgc3RyaW5nID0gL1wiKD86W15cIlxcXFxcXHJcXG5dfFxcXFwuKSpcInwnKD86W14nXFxcXFxcclxcbl18XFxcXC4pKicvLnNvdXJjZTtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYWdzXVxuICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWYWx1ZVBhdHRlcm4odmFsdWUsIGZsYWdzKSB7XG4gICAgZmxhZ3MgPSAoZmxhZ3MgfHwgJycpLnJlcGxhY2UoL20vZywgJycpICsgJ20nOyAvLyBhZGQgbSBmbGFnXG5cbiAgICB2YXIgcGF0dGVybiA9IC8oWzpcXC0sW3tdXFxzKig/Olxcczw8cHJvcD4+WyBcXHRdKyk/KSg/Ojw8dmFsdWU+PikoPz1bIFxcdF0qKD86JHwsfFxcXXxcXH18KD86W1xcclxcbl1cXHMqKT8jKSkvLnNvdXJjZS5yZXBsYWNlKC88PHByb3A+Pi9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9KS5yZXBsYWNlKC88PHZhbHVlPj4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICB9XG5cbiAgUHJpc20ubGFuZ3VhZ2VzLnlhbWwgPSB7XG4gICAgJ3NjYWxhcic6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKFtcXC06XVxccyooPzpcXHM8PHByb3A+PlsgXFx0XSspP1t8Pl0pWyBcXHRdKig/OigoPzpcXHI/XFxufFxccilbIFxcdF0rKVxcU1teXFxyXFxuXSooPzpcXDJbXlxcclxcbl0rKSopLy5zb3VyY2UucmVwbGFjZSgvPDxwcm9wPj4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgIH0pKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgICdjb21tZW50JzogLyMuKi8sXG4gICAgJ2tleSc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKCg/Ol58WzpcXC0sW3tcXHJcXG4/XSlbIFxcdF0qKD86PDxwcm9wPj5bIFxcdF0rKT8pPDxrZXk+Pig/PVxccyo6XFxzKS8uc291cmNlLnJlcGxhY2UoLzw8cHJvcD4+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgICB9KS5yZXBsYWNlKC88PGtleT4+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcoPzonICsgcGxhaW5LZXkgKyAnfCcgKyBzdHJpbmcgKyAnKSc7XG4gICAgICB9KSksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgYWxpYXM6ICdhdHJ1bGUnXG4gICAgfSxcbiAgICAnZGlyZWN0aXZlJzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKiklLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgICdkYXRldGltZSc6IHtcbiAgICAgIHBhdHRlcm46IGNyZWF0ZVZhbHVlUGF0dGVybigvXFxkezR9LVxcZFxcZD8tXFxkXFxkPyg/Olt0VF18WyBcXHRdKylcXGRcXGQ/OlxcZHsyfTpcXGR7Mn0oPzpcXC5cXGQqKT8oPzpbIFxcdF0qKD86WnxbLStdXFxkXFxkPyg/OjpcXGR7Mn0pPykpP3xcXGR7NH0tXFxkezJ9LVxcZHsyfXxcXGRcXGQ/OlxcZHsyfSg/OjpcXGR7Mn0oPzpcXC5cXGQqKT8pPy8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgICdib29sZWFuJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKC9mYWxzZXx0cnVlLy5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICAnbnVsbCc6IHtcbiAgICAgIHBhdHRlcm46IGNyZWF0ZVZhbHVlUGF0dGVybigvbnVsbHx+Ly5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICAnc3RyaW5nJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKHN0cmluZyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnbnVtYmVyJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKC9bKy1dPyg/OjB4W1xcZGEtZl0rfDBvWzAtN10rfCg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoPzplWystXT9cXGQrKT98XFwuaW5mfFxcLm5hbikvLnNvdXJjZSwgJ2knKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICd0YWcnOiB0YWcsXG4gICAgJ2ltcG9ydGFudCc6IGFuY2hvck9yQWxpYXMsXG4gICAgJ3B1bmN0dWF0aW9uJzogLy0tLXxbOltcXF17fVxcLSx8Pj9dfFxcLlxcLlxcLi9cbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLnltbCA9IFByaXNtLmxhbmd1YWdlcy55YW1sO1xufSkocHJpc20pO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbTtcbiIsIi8vIER1b3RvbmUgRGFya1xuLy8gQXV0aG9yOiBTaW11cmFpLCBhZGFwdGVkIGZyb20gRHVvVG9uZSB0aGVtZXMgZm9yIEF0b20gKGh0dHA6Ly9zaW11cmFpLmNvbS9wcm9qZWN0cy8yMDE2LzAxLzAxL2R1b3RvbmUtdGhlbWVzKVxuLy8gQ29udmVyc2lvbjogQnJhbSBkZSBIYWFuIChodHRwOi8vYXRlbGllcmJyYW0uZ2l0aHViLmlvL0Jhc2UyVG9uZS1wcmlzbS9vdXRwdXQvcHJpc20vcHJpc20tYmFzZTJ0b25lLWV2ZW5pbmctZGFyay5jc3MpXG4vLyBHZW5lcmF0ZWQgd2l0aCBCYXNlMTYgQnVpbGRlciAoaHR0cHM6Ly9naXRodWIuY29tL2Jhc2UxNi1idWlsZGVyL2Jhc2UxNi1idWlsZGVyKVxudmFyIHRoZW1lID0ge1xuICBwbGFpbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmEyNzM0XCIsXG4gICAgY29sb3I6IFwiIzlhODZmZFwiXG4gIH0sXG4gIHN0eWxlczogW3tcbiAgICB0eXBlczogW1wiY29tbWVudFwiLCBcInByb2xvZ1wiLCBcImRvY3R5cGVcIiwgXCJjZGF0YVwiLCBcInB1bmN0dWF0aW9uXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjNmM2NzgzXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wibmFtZXNwYWNlXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBvcGFjaXR5OiAwLjdcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1widGFnXCIsIFwib3BlcmF0b3JcIiwgXCJudW1iZXJcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcIiNlMDkxNDJcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJwcm9wZXJ0eVwiLCBcImZ1bmN0aW9uXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjOWE4NmZkXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1widGFnLWlkXCIsIFwic2VsZWN0b3JcIiwgXCJhdHJ1bGUtaWRcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcIiNlZWViZmZcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJhdHRyLW5hbWVcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcIiNjNGI5ZmVcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJib29sZWFuXCIsIFwic3RyaW5nXCIsIFwiZW50aXR5XCIsIFwidXJsXCIsIFwiYXR0ci12YWx1ZVwiLCBcImtleXdvcmRcIiwgXCJjb250cm9sXCIsIFwiZGlyZWN0aXZlXCIsIFwidW5pdFwiLCBcInN0YXRlbWVudFwiLCBcInJlZ2V4XCIsIFwiYXQtcnVsZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwidmFyaWFibGVcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcIiNmZmNjOTlcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJkZWxldGVkXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IFwibGluZS10aHJvdWdoXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiaW5zZXJ0ZWRcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogXCJ1bmRlcmxpbmVcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJpdGFsaWNcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJpbXBvcnRhbnRcIiwgXCJib2xkXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJpbXBvcnRhbnRcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcIiNjNGI5ZmVcIlxuICAgIH1cbiAgfV1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IHByaXNtIGZyb20gJy4uL3ByaXNtL2luZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJpc20gfSBmcm9tICcuLi9wcmlzbS9pbmRleC5qcyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWVzL2R1b3RvbmVEYXJrJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgLy8gJEZsb3dGaXhNZVxuICBQcmlzbTogcHJpc20sXG4gIHRoZW1lOiB0aGVtZVxufTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBuZXdsaW5lUmUgPSAvXFxyXFxufFxccnxcXG4vOyAvLyBFbXB0eSBsaW5lcyBuZWVkIHRvIGNvbnRhaW4gYSBzaW5nbGUgZW1wdHkgdG9rZW4sIGRlbm90ZWQgd2l0aCB7IGVtcHR5OiB0cnVlIH1cblxudmFyIG5vcm1hbGl6ZUVtcHR5TGluZXMgPSBmdW5jdGlvbiAobGluZSkge1xuICBpZiAobGluZS5sZW5ndGggPT09IDApIHtcbiAgICBsaW5lLnB1c2goe1xuICAgICAgdHlwZXM6IFtcInBsYWluXCJdLFxuICAgICAgY29udGVudDogXCJcXG5cIixcbiAgICAgIGVtcHR5OiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobGluZS5sZW5ndGggPT09IDEgJiYgbGluZVswXS5jb250ZW50ID09PSBcIlwiKSB7XG4gICAgbGluZVswXS5jb250ZW50ID0gXCJcXG5cIjtcbiAgICBsaW5lWzBdLmVtcHR5ID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGFwcGVuZFR5cGVzID0gZnVuY3Rpb24gKHR5cGVzLCBhZGQpIHtcbiAgdmFyIHR5cGVzU2l6ZSA9IHR5cGVzLmxlbmd0aDtcblxuICBpZiAodHlwZXNTaXplID4gMCAmJiB0eXBlc1t0eXBlc1NpemUgLSAxXSA9PT0gYWRkKSB7XG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVzLmNvbmNhdChhZGQpO1xufTsgLy8gVGFrZXMgYW4gYXJyYXkgb2YgUHJpc20ncyB0b2tlbnMgYW5kIGdyb3VwcyB0aGVtIGJ5IGxpbmUsIHR1cm5pbmcgcGxhaW5cbi8vIHN0cmluZ3MgaW50byB0b2tlbnMgYXMgd2VsbC4gVG9rZW5zIGNhbiBiZWNvbWUgcmVjdXJzaXZlIGluIHNvbWUgY2FzZXMsXG4vLyB3aGljaCBtZWFucyB0aGF0IHRoZWlyIHR5cGVzIGFyZSBjb25jYXRlbmF0ZWQuIFBsYWluLXN0cmluZyB0b2tlbnMgaG93ZXZlclxuLy8gYXJlIGFsd2F5cyBvZiB0eXBlIFwicGxhaW5cIi5cbi8vIFRoaXMgaXMgbm90IHJlY3Vyc2l2ZSB0byBhdm9pZCBleGNlZWRpbmcgdGhlIGNhbGwtc3RhY2sgbGltaXQsIHNpbmNlIGl0J3MgdW5jbGVhclxuLy8gaG93IG5lc3RlZCBQcmlzbSdzIHRva2VucyBjYW4gYmVjb21lXG5cblxudmFyIG5vcm1hbGl6ZVRva2VucyA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgdmFyIHR5cGVBcnJTdGFjayA9IFtbXV07XG4gIHZhciB0b2tlbkFyclN0YWNrID0gW3Rva2Vuc107XG4gIHZhciB0b2tlbkFyckluZGV4U3RhY2sgPSBbMF07XG4gIHZhciB0b2tlbkFyclNpemVTdGFjayA9IFt0b2tlbnMubGVuZ3RoXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgc3RhY2tJbmRleCA9IDA7XG4gIHZhciBjdXJyZW50TGluZSA9IFtdO1xuICB2YXIgYWNjID0gW2N1cnJlbnRMaW5lXTtcblxuICB3aGlsZSAoc3RhY2tJbmRleCA+IC0xKSB7XG4gICAgd2hpbGUgKChpID0gdG9rZW5BcnJJbmRleFN0YWNrW3N0YWNrSW5kZXhdKyspIDwgdG9rZW5BcnJTaXplU3RhY2tbc3RhY2tJbmRleF0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gdm9pZCAwO1xuICAgICAgdmFyIHR5cGVzID0gdHlwZUFyclN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgdmFyIHRva2VuQXJyID0gdG9rZW5BcnJTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIHZhciB0b2tlbiA9IHRva2VuQXJyW2ldOyAvLyBEZXRlcm1pbmUgY29udGVudCBhbmQgYXBwZW5kIHR5cGUgdG8gdHlwZXMgaWYgbmVjZXNzYXJ5XG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdHlwZXMgPSBzdGFja0luZGV4ID4gMCA/IHR5cGVzIDogW1wicGxhaW5cIl07XG4gICAgICAgIGNvbnRlbnQgPSB0b2tlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVzID0gYXBwZW5kVHlwZXModHlwZXMsIHRva2VuLnR5cGUpO1xuXG4gICAgICAgIGlmICh0b2tlbi5hbGlhcykge1xuICAgICAgICAgIHR5cGVzID0gYXBwZW5kVHlwZXModHlwZXMsIHRva2VuLmFsaWFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQgPSB0b2tlbi5jb250ZW50O1xuICAgICAgfSAvLyBJZiB0b2tlbi5jb250ZW50IGlzIGFuIGFycmF5LCBpbmNyZWFzZSB0aGUgc3RhY2sgZGVwdGggYW5kIHJlcGVhdCB0aGlzIHdoaWxlLWxvb3BcblxuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgc3RhY2tJbmRleCsrO1xuICAgICAgICB0eXBlQXJyU3RhY2sucHVzaCh0eXBlcyk7XG4gICAgICAgIHRva2VuQXJyU3RhY2sucHVzaChjb250ZW50KTtcbiAgICAgICAgdG9rZW5BcnJJbmRleFN0YWNrLnB1c2goMCk7XG4gICAgICAgIHRva2VuQXJyU2l6ZVN0YWNrLnB1c2goY29udGVudC5sZW5ndGgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gU3BsaXQgYnkgbmV3bGluZXNcblxuXG4gICAgICB2YXIgc3BsaXRCeU5ld2xpbmVzID0gY29udGVudC5zcGxpdChuZXdsaW5lUmUpO1xuICAgICAgdmFyIG5ld2xpbmVDb3VudCA9IHNwbGl0QnlOZXdsaW5lcy5sZW5ndGg7XG4gICAgICBjdXJyZW50TGluZS5wdXNoKHtcbiAgICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgICBjb250ZW50OiBzcGxpdEJ5TmV3bGluZXNbMF1cbiAgICAgIH0pOyAvLyBDcmVhdGUgYSBuZXcgbGluZSBmb3IgZWFjaCBzdHJpbmcgb24gYSBuZXcgbGluZVxuXG4gICAgICBmb3IgKHZhciBpJDEgPSAxOyBpJDEgPCBuZXdsaW5lQ291bnQ7IGkkMSsrKSB7XG4gICAgICAgIG5vcm1hbGl6ZUVtcHR5TGluZXMoY3VycmVudExpbmUpO1xuICAgICAgICBhY2MucHVzaChjdXJyZW50TGluZSA9IFtdKTtcbiAgICAgICAgY3VycmVudExpbmUucHVzaCh7XG4gICAgICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgICAgIGNvbnRlbnQ6IHNwbGl0QnlOZXdsaW5lc1tpJDFdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gLy8gRGVjcmVhdGUgdGhlIHN0YWNrIGRlcHRoXG5cblxuICAgIHN0YWNrSW5kZXgtLTtcbiAgICB0eXBlQXJyU3RhY2sucG9wKCk7XG4gICAgdG9rZW5BcnJTdGFjay5wb3AoKTtcbiAgICB0b2tlbkFyckluZGV4U3RhY2sucG9wKCk7XG4gICAgdG9rZW5BcnJTaXplU3RhY2sucG9wKCk7XG4gIH1cblxuICBub3JtYWxpemVFbXB0eUxpbmVzKGN1cnJlbnRMaW5lKTtcbiAgcmV0dXJuIGFjYztcbn07XG5cbnZhciB0aGVtZVRvRGljdCA9IGZ1bmN0aW9uICh0aGVtZSwgbGFuZ3VhZ2UpIHtcbiAgdmFyIHBsYWluID0gdGhlbWUucGxhaW47IC8vICRGbG93Rml4TWVcblxuICB2YXIgYmFzZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciB0aGVtZURpY3QgPSB0aGVtZS5zdHlsZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHRoZW1lRW50cnkpIHtcbiAgICB2YXIgbGFuZ3VhZ2VzID0gdGhlbWVFbnRyeS5sYW5ndWFnZXM7XG4gICAgdmFyIHN0eWxlID0gdGhlbWVFbnRyeS5zdHlsZTtcblxuICAgIGlmIChsYW5ndWFnZXMgJiYgIWxhbmd1YWdlcy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgdGhlbWVFbnRyeS50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICB2YXIgYWNjU3R5bGUgPSBfZXh0ZW5kcyh7fSwgYWNjW3R5cGVdLCBzdHlsZSk7XG5cbiAgICAgIGFjY1t0eXBlXSA9IGFjY1N0eWxlO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIGJhc2UpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgdGhlbWVEaWN0LnJvb3QgPSBwbGFpbjsgLy8gJEZsb3dGaXhNZVxuXG4gIHRoZW1lRGljdC5wbGFpbiA9IF9leHRlbmRzKHt9LCBwbGFpbiwge1xuICAgIGJhY2tncm91bmRDb2xvcjogbnVsbFxuICB9KTtcbiAgcmV0dXJuIHRoZW1lRGljdDtcbn07XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIEhpZ2hsaWdodCA9IC8qQF9fUFVSRV9fKi9mdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodCgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbi0tKSBhcmdzW2xlbl0gPSBhcmd1bWVudHNbbGVuXTtcblxuICAgIENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRoZW1lRGljdFwiLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGlmICh0aGlzJDEudGhlbWVEaWN0ICE9PSB1bmRlZmluZWQgJiYgcHJvcHMudGhlbWUgPT09IHRoaXMkMS5wcmV2VGhlbWUgJiYgcHJvcHMubGFuZ3VhZ2UgPT09IHRoaXMkMS5wcmV2TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMkMS50aGVtZURpY3Q7XG4gICAgICB9XG5cbiAgICAgIHRoaXMkMS5wcmV2VGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgICAgIHRoaXMkMS5wcmV2TGFuZ3VhZ2UgPSBwcm9wcy5sYW5ndWFnZTtcbiAgICAgIHZhciB0aGVtZURpY3QgPSBwcm9wcy50aGVtZSA/IHRoZW1lVG9EaWN0KHByb3BzLnRoZW1lLCBwcm9wcy5sYW5ndWFnZSkgOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpcyQxLnRoZW1lRGljdCA9IHRoZW1lRGljdDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldExpbmVQcm9wc1wiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSByZWYuY2xhc3NOYW1lO1xuICAgICAgdmFyIHN0eWxlID0gcmVmLnN0eWxlO1xuICAgICAgdmFyIHJlc3QkMSA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHJlZiwgW1wia2V5XCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJsaW5lXCJdKTtcbiAgICAgIHZhciByZXN0ID0gcmVzdCQxO1xuXG4gICAgICB2YXIgb3V0cHV0ID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInRva2VuLWxpbmVcIixcbiAgICAgICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgICAga2V5OiB1bmRlZmluZWRcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdGhlbWVEaWN0ID0gdGhpcyQxLmdldFRoZW1lRGljdCh0aGlzJDEucHJvcHMpO1xuXG4gICAgICBpZiAodGhlbWVEaWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0LnN0eWxlID0gdGhlbWVEaWN0LnBsYWluO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXRwdXQuc3R5bGUgPSBvdXRwdXQuc3R5bGUgIT09IHVuZGVmaW5lZCA/IF9leHRlbmRzKHt9LCBvdXRwdXQuc3R5bGUsIHN0eWxlKSA6IHN0eWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0LmtleSA9IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBvdXRwdXQuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0U3R5bGVGb3JUb2tlblwiLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgdHlwZXMgPSByZWYudHlwZXM7XG4gICAgICB2YXIgZW1wdHkgPSByZWYuZW1wdHk7XG4gICAgICB2YXIgdHlwZXNTaXplID0gdHlwZXMubGVuZ3RoO1xuICAgICAgdmFyIHRoZW1lRGljdCA9IHRoaXMkMS5nZXRUaGVtZURpY3QodGhpcyQxLnByb3BzKTtcblxuICAgICAgaWYgKHRoZW1lRGljdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVzU2l6ZSA9PT0gMSAmJiB0eXBlc1swXSA9PT0gXCJwbGFpblwiKSB7XG4gICAgICAgIHJldHVybiBlbXB0eSA/IHtcbiAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gICAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVzU2l6ZSA9PT0gMSAmJiAhZW1wdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lRGljdFt0eXBlc1swXV07XG4gICAgICB9XG5cbiAgICAgIHZhciBiYXNlU3R5bGUgPSBlbXB0eSA/IHtcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgfSA6IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIHZhciB0eXBlU3R5bGVzID0gdHlwZXMubWFwKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGVtZURpY3RbdHlwZV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgW2Jhc2VTdHlsZV0uY29uY2F0KHR5cGVTdHlsZXMpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRva2VuUHJvcHNcIiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gcmVmLmNsYXNzTmFtZTtcbiAgICAgIHZhciBzdHlsZSA9IHJlZi5zdHlsZTtcbiAgICAgIHZhciB0b2tlbiA9IHJlZi50b2tlbjtcbiAgICAgIHZhciByZXN0JDEgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhyZWYsIFtcImtleVwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwidG9rZW5cIl0pO1xuICAgICAgdmFyIHJlc3QgPSByZXN0JDE7XG5cbiAgICAgIHZhciBvdXRwdXQgPSBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICBjbGFzc05hbWU6IFwidG9rZW4gXCIgKyB0b2tlbi50eXBlcy5qb2luKFwiIFwiKSxcbiAgICAgICAgY2hpbGRyZW46IHRva2VuLmNvbnRlbnQsXG4gICAgICAgIHN0eWxlOiB0aGlzJDEuZ2V0U3R5bGVGb3JUb2tlbih0b2tlbiksXG4gICAgICAgIGtleTogdW5kZWZpbmVkXG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0LnN0eWxlID0gb3V0cHV0LnN0eWxlICE9PSB1bmRlZmluZWQgPyBfZXh0ZW5kcyh7fSwgb3V0cHV0LnN0eWxlLCBzdHlsZSkgOiBzdHlsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dC5rZXkgPSBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgb3V0cHV0LmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRva2VuaXplXCIsIGZ1bmN0aW9uIChQcmlzbSwgY29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcbiAgICAgIHZhciBlbnYgPSB7XG4gICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgIGdyYW1tYXI6IGdyYW1tYXIsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICAgICAgdG9rZW5zOiBbXVxuICAgICAgfTtcbiAgICAgIFByaXNtLmhvb2tzLnJ1bihcImJlZm9yZS10b2tlbml6ZVwiLCBlbnYpO1xuICAgICAgdmFyIHRva2VucyA9IGVudi50b2tlbnMgPSBQcmlzbS50b2tlbml6ZShlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSk7XG4gICAgICBQcmlzbS5ob29rcy5ydW4oXCJhZnRlci10b2tlbml6ZVwiLCBlbnYpO1xuICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChDb21wb25lbnQpIEhpZ2hsaWdodC5fX3Byb3RvX18gPSBDb21wb25lbnQ7XG4gIEhpZ2hsaWdodC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudCAmJiBDb21wb25lbnQucHJvdG90eXBlKTtcbiAgSGlnaGxpZ2h0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhpZ2hsaWdodDtcblxuICBIaWdobGlnaHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgUHJpc20gPSByZWYuUHJpc207XG4gICAgdmFyIGxhbmd1YWdlID0gcmVmLmxhbmd1YWdlO1xuICAgIHZhciBjb2RlID0gcmVmLmNvZGU7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciB0aGVtZURpY3QgPSB0aGlzLmdldFRoZW1lRGljdCh0aGlzLnByb3BzKTtcbiAgICB2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG4gICAgdmFyIG1peGVkVG9rZW5zID0gZ3JhbW1hciAhPT0gdW5kZWZpbmVkID8gdGhpcy50b2tlbml6ZShQcmlzbSwgY29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpIDogW2NvZGVdO1xuICAgIHZhciB0b2tlbnMgPSBub3JtYWxpemVUb2tlbnMobWl4ZWRUb2tlbnMpO1xuICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICB0b2tlbnM6IHRva2VucyxcbiAgICAgIGNsYXNzTmFtZTogXCJwcmlzbS1jb2RlIGxhbmd1YWdlLVwiICsgbGFuZ3VhZ2UsXG4gICAgICBzdHlsZTogdGhlbWVEaWN0ICE9PSB1bmRlZmluZWQgPyB0aGVtZURpY3Qucm9vdCA6IHt9LFxuICAgICAgZ2V0TGluZVByb3BzOiB0aGlzLmdldExpbmVQcm9wcyxcbiAgICAgIGdldFRva2VuUHJvcHM6IHRoaXMuZ2V0VG9rZW5Qcm9wc1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIaWdobGlnaHQ7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcbmV4cG9ydCB7IGRlZmF1bHRQcm9wcyB9O1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tICdwcmlzbS1yZWFjdC1yZW5kZXJlcic7XG5pbXBvcnQgeyB1c2VDb3B5IH0gZnJvbSAnZHVtaS90aGVtZSc7XG5pbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcyc7XG5pbXBvcnQgJy4vU291cmNlQ29kZS5sZXNzJztcbi8qKlxuICogZGVmaW5lIERTTCB3aGljaCBjYW4gYmUgaGlnaGxpZ2h0ZWQgYXMgc2ltaWxhciBsYW5ndWFnZVxuICovXG5cbnZhciBTSU1JTEFSX0RTTCA9IHtcbiAgYWNzczogJ2NzcycsXG4gIGF4bWw6ICd4bWwnXG59O1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjb2RlID0gX3JlZi5jb2RlLFxuICAgICAgbGFuZyA9IF9yZWYubGFuZyxcbiAgICAgIF9yZWYkc2hvd0NvcHkgPSBfcmVmLnNob3dDb3B5LFxuICAgICAgc2hvd0NvcHkgPSBfcmVmJHNob3dDb3B5ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRzaG93Q29weTtcblxuICB2YXIgX3VzZUNvcHkgPSB1c2VDb3B5KCksXG4gICAgICBfdXNlQ29weTIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29weSwgMiksXG4gICAgICBjb3B5Q29kZSA9IF91c2VDb3B5MlswXSxcbiAgICAgIGNvcHlTdGF0dXMgPSBfdXNlQ29weTJbMV07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiX19kdW1pLWRlZmF1bHQtY29kZS1ibG9ja1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhpZ2hsaWdodCwgX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywge1xuICAgIGNvZGU6IGNvZGUsXG4gICAgbGFuZ3VhZ2U6IFNJTUlMQVJfRFNMW2xhbmddIHx8IGxhbmcsXG4gICAgdGhlbWU6IHVuZGVmaW5lZFxuICB9KSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGUgPSBfcmVmMi5zdHlsZSxcbiAgICAgICAgdG9rZW5zID0gX3JlZjIudG9rZW5zLFxuICAgICAgICBnZXRMaW5lUHJvcHMgPSBfcmVmMi5nZXRMaW5lUHJvcHMsXG4gICAgICAgIGdldFRva2VuUHJvcHMgPSBfcmVmMi5nZXRUb2tlblByb3BzO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIHNob3dDb3B5ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJfX2R1bWktZGVmYXVsdC1pY29uIF9fZHVtaS1kZWZhdWx0LWNvZGUtYmxvY2stY29weS1idG5cIixcbiAgICAgIFwiZGF0YS1zdGF0dXNcIjogY29weVN0YXR1cyxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBjb3B5Q29kZShjb2RlKTtcbiAgICAgIH1cbiAgICB9KSwgdG9rZW5zLm1hcChmdW5jdGlvbiAobGluZSwgaSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIGdldExpbmVQcm9wcyh7XG4gICAgICAgIGxpbmU6IGxpbmUsXG4gICAgICAgIGtleTogaVxuICAgICAgfSksIGxpbmUubWFwKGZ1bmN0aW9uICh0b2tlbiwga2V5KSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgZ2V0VG9rZW5Qcm9wcyh7XG4gICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgIGtleToga2V5XG4gICAgICAgIH0pKTtcbiAgICAgIH0pKTtcbiAgICB9KSk7XG4gIH0pKTtcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hpSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///11695
`)}}]);
