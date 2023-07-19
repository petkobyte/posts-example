import { render, screen, waitFor } from '@testing-library/react';
import Posts from '../Posts';
import { HELLO } from '../../../../constants/hello';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGetPost } from '../hooks/getPostHook';
import { useGetUsers } from '../hooks/getUsersHook';
import { BrowserRouter } from 'react-router-dom';

const mockedUseGetPosts = useGetPost;
const mockedUseGetUsers = useGetUsers;

jest.mock('../hooks/getPostHook');
jest.mock('../hooks/getUsersHook');

const postsMock = [
  {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body':
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    'userId': 1,
    'id': 2,
    'title': 'qui est esse',
    'body':
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    'userId': 2,
    'id': 3,
    'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    'body':
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];
const usersMock = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496',
      },
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets',
    },
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618',
      },
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains',
    },
  },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

export default wrapper;

describe('Posts component', () => {
  it('Displays the loading view', () => {
    mockedUseGetPosts.mockImplementation(() => ({
      status: 'loading',
    }));
    mockedUseGetUsers.mockImplementation(() => ({
      status: 'loading',
    }));

    const { container } = render(<Posts hello={HELLO} />, { wrapper });
    const loading = container.getElementsByClassName('loading-container');
    expect(loading.length).toBe(1);
  });

  it('should render correct data', async () => {
    mockedUseGetUsers.mockImplementation(() => ({
      status: 'success',
      data: usersMock,
    }));
    mockedUseGetPosts.mockImplementation(() => ({
      status: 'success',
      data: postsMock,
    }));

    render(<Posts hello={HELLO} />, { wrapper });
    await waitFor(() => {
      const user1 = screen.getAllByText(/Leanne Graham/)[0];
      const user2 = screen.getAllByText(/Ervin Howell/)[0];
      expect(user1).toBeInTheDocument();
      expect(user2).toBeInTheDocument();
    });
    screen.debug();
  });
});
