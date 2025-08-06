import React, { useState } from 'react';
import { View, ScrollView, useColorScheme } from 'react-native';
import {
  Provider as PaperProvider,
  Card,
  Button,
  Text,
  Appbar,
  SegmentedButtons,
  TextInput,
  Switch,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import {
  Search,
  Plus,
  Settings,
  Share2,
  BrainCircuit,
  LayoutDashboard,
} from 'lucide-react-native';
import { styles, palette } from './src/styles/App.styles';

const DashboardIcon = ({ size, color }) => (
  <LayoutDashboard size={size} color={color} />
);
const GraphIcon = ({ size, color }) => <Share2 size={size} color={color} />;
const SettingsIcon = ({ size, color }) => (
  <Settings size={size} color={color} />
);
const NewNoteIcon = ({ size, color }) => <Plus size={size} color={color} />;
const SearchIcon = ({ size, color }) => <Search size={size} color={color} />;

const DashboardView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const cardStyle = {
    backgroundColor: isDarkMode ? palette.cardBgDark : palette.cardBgLight,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title title="Quick Actions" titleStyle={styles.cardTitle} />
        <Card.Content style={styles.buttonRow}>
          <Button
            icon={NewNoteIcon}
            mode="contained"
            onPress={() => console.log('New Note')}>
            New Note
          </Button>
          <Button
            icon={SearchIcon}
            mode="contained"
            onPress={() => console.log('Search')}>
            Search My Memex
          </Button>
        </Card.Content>
      </Card>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title
          title="Project Risk Overview"
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text style={styles.placeholderText}>
            Risk Radar Chart Placeholder
          </Text>
        </Card.Content>
      </Card>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title
          title="Trail Discovery Source"
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text style={styles.placeholderText}>Doughnut Chart Placeholder</Text>
        </Card.Content>
      </Card>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title title="Recent Activity" titleStyle={styles.cardTitle} />
        <Card.Content>
          <View style={styles.activityItem}>
            <Text style={{ color: palette.cyan }}>●</Text>
            <Text style={styles.activityText}>
              Note created: "Go Concurrency Patterns"
            </Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={{ color: palette.yellow }}>●</Text>
            <Text style={styles.activityText}>
              Trail discovered: "Go" → "Docker"
            </Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={{ color: palette.cyan }}>●</Text>
            <Text style={styles.activityText}>
              Note created: "React Native Performance Tips"
            </Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={{ color: palette.magenta }}>●</Text>
            <Text style={styles.activityText}>
              Query: "Notes about F1 and Breaking Bad"
            </Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const KnowledgeGraphView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const cardStyle = {
    backgroundColor: isDarkMode ? palette.cardBgDark : palette.cardBgLight,
  };

  return (
    <View style={styles.container}>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title
          title="Knowledge Graph Explorer"
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text style={styles.paragraph}>
            This area will feature an interactive visualization of your
            knowledge graph. Nodes represent pieces of information, and edges
            represent the associative trails between them.
          </Text>
          <View style={styles.graphPlaceholder}>
            <Text style={styles.placeholderText}>
              Graph visualization will be rendered here.
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const SettingsView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const cardStyle = {
    backgroundColor: isDarkMode ? palette.cardBgDark : palette.cardBgLight,
  };
  const [isSyncOn, setIsSyncOn] = useState(false);

  return (
    <View style={styles.container}>
      <Card style={[styles.card, cardStyle]}>
        <Card.Title title="Settings" titleStyle={styles.cardTitle} />
        <Card.Content>
          <TextInput
            label="LLM Provider"
            value="Gemini API (Cloud)"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="API Key"
            secureTextEntry
            placeholder="Enter your API key"
            mode="outlined"
            style={styles.input}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.paragraph}>Sync with Native File System</Text>
            <Switch value={isSyncOn} onValueChange={setIsSyncOn} />
          </View>
          <Button mode="contained" style={styles.button}>
            Save Changes
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;

  const renderContent = () => {
    switch (activeTab) {
      case 'graph':
        return <KnowledgeGraphView />;
      case 'settings':
        return <SettingsView />;
      case 'dashboard':
      default:
        return <DashboardView />;
    }
  };

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <BrainCircuit
          size={32}
          color={theme.colors.primary}
          style={styles.brainCircuitIcon}
        />
        <Appbar.Content title="Memex" titleStyle={styles.title} />
      </Appbar.Header>
      <View
        style={{ ...styles.main, backgroundColor: theme.colors.background }}>
        <SegmentedButtons
          value={activeTab}
          onValueChange={setActiveTab}
          style={styles.segmentedButtons}
          buttons={[
            {
              value: 'dashboard',
              label: 'Dashboard',
              icon: DashboardIcon,
            },
            {
              value: 'graph',
              label: 'Graph',
              icon: GraphIcon,
            },
            {
              value: 'settings',
              label: 'Settings',
              icon: SettingsIcon,
            },
          ]}
        />
        <View style={styles.content}>{renderContent()}</View>
      </View>
    </PaperProvider>
  );
}
